'use server'
import { CheckoutSchemaType } from '@/shared/constants'
import { OrderStatus } from '@prisma/client'
import prisma from '@/prisma/prisma'
import { cookies } from 'next/headers'

export async function createOrder(data: CheckoutSchemaType) {
	// console.log(data)
	try {
		const cookiesStore = await cookies()
		const token = cookiesStore.get('cartToken')?.value

		if (!token) {
			throw new Error('Cart token not found')
		}

		// Находим корзину по токену
		const userCart = await prisma.cart.findFirst({
			where: {
				token,
			},
			include: {
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},
		})

		// если корзина не найдена возращаем ошибку
		if (!userCart) {
			throw new Error('Cart not found')
		}

		// если корзина пустая возращаем ошибку
		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

		// создаем заказ
		const order = await prisma?.order.create({
			data: {
				token,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
			},
		})

		// Очищаем корзину по айди с найденной корзины
		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0,
			},
		})

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id,
			},
		})


		// TODO: сделать создание ссылки оплаты


		// отпра
	} catch (err) {
		console.log('SERVER_ACTION', err)
	}
}
