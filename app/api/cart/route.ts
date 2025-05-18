import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto' // библиотека для создания уникального токена
import { FindOrCreateCart } from '@/shared/lib/find-or-create-cart'
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto'
import { updateCartTotalAmount } from '@/shared/lib'

export async function GET(req: NextRequest) {
	try {
		// const userId = 1
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}
		const userCart = await prisma?.cart.findFirst({
			where: {
				OR: [
					// {
					// 	userId,
					// },
					{
						token,
					},
				],
			},
			include: {
				items: {
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})

		return NextResponse.json(userCart)
	} catch (error) {
		console.log('[CART_GET] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось создать корзину' },
			{ status: 500 }
		)
	}
}

export async function POST(req: NextRequest) {
	try {
		// -- Генерация токена
		let token = req.cookies.get('cartToken')?.value

		if (!token) {
			token = crypto.randomUUID() // генерация токена
		}

		const userCart = await FindOrCreateCart(token)

		const data = (await req.json()) as CreateCartItemValues

		// -- Проверка товара (содержится ли он в корзине, если да то просто увеличиваем кол-во)
		const findCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId: userCart?.id,
				productItemId: data.productItemId,
				ingredients: { every: { id: { in: data.ingredients } } }, // проверка на то что каждый id из cartItem должен соответтствовать id из ingredients (которое позже передаться от клиента)
			},
		})

		// -- Если товар был найден, делаем + 1
		if (findCartItem) {
			await prisma.cartItem.update({
				where: {
					id: findCartItem.id,
				},
				data: {
					quantity: findCartItem.quantity, // + 1
				},
			})
		}

		// -- Если товар не был найден, мы создаем этот товар
		await prisma.cartItem.create({
			data: {
				cartId: userCart?.id,
				productItemId: data.productItemId,
				quantity: 1,
				ingredients: { connect: data.ingredients?.map(id => ({ id })) },
			},
		})

		// обновляем корзину
		const updatedUserCart = await updateCartTotalAmount(token)

		// получаем ответ
		const resp = NextResponse.json(updatedUserCart)

		// вшили пользователю токен, если ранее не было
		resp.cookies.set('cartToken', token)

		// возращаем ответ
		return resp
	} catch (error) {
		console.error('[CART_POST] Ошибка сервера:', error)
		return NextResponse.json(
			{ message: 'Не удалось обработать запрос', error: String(error) },
			{ status: 500 }
		)
	}
}
