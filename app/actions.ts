'use server'

import prisma from '@/prisma/prisma'
import { cookies } from 'next/headers'

import { CheckoutSchemaType } from '@/shared/constants'
import { OrderStatus, Prisma } from '@prisma/client'
import { createPayment, sendEmail } from '@/shared/lib'
import { PayOrderTemplate, VerificationUserTemplate } from '@/shared/components'
import { getUserSession } from '@/shared/lib/get-user-session'
import { hashSync } from 'bcrypt'

export async function createOrder(
	data: CheckoutSchemaType,
	totalAmountCart: number,
	totalPrice: number,
	deliveryPrice: number,
	discount: number,
	promoCheckout: string
) {
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
				totalAmount: totalAmountCart,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
				totalPrice,
				deliveryPrice,
				promo: promoCheckout,
				discount,
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

		// создание ссылки оплаты
		const paymentData = await createPayment({
			description: `Оплата заказа #${order.id}`,
			orderId: order.id,
			amount: order.totalAmount,
		})

		if (!paymentData) {
			throw new Error('Payment data not found')
		}

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				paymentId: paymentData.id, // добавили для каждого заказа свой уникальный paymentId который береться с yookassa, по нему можно найти order пользователя
			},
		})

		const paymentUrl = paymentData.confirmation.confirmation_url // уникальная ссылка на оплату order пользователя

		// отправка письма на почту
		await sendEmail(
			data.email,
			`Next Pizza | Подтверждение вашего заказа 🍕`,
			PayOrderTemplate({
				paymentUrl,
				items: JSON.parse(order.items as string),
				order,
				// fullName: order.fullName,
				// totalAmount: order.totalAmount,
				// totalPrice,
				// deliveryPrice,
				// discount,
				// promoCheckout,
			})
		)

		return paymentUrl // возращаем ссылку на оплату для перехода после нажатия на кнопку отправки формы пользователя
	} catch (err) {
		console.log('[CREATE_ORDER_ERROR]', err)
	}
}

export const updateUserInfo = async (body: Prisma.UserUpdateInput) => {
	try {
		const currentUser = await getUserSession()

		if (!currentUser) {
			throw new Error('Пользователь не найден')
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(currentUser.id),
			},
		})

		await prisma.user.update({
			where: {
				id: Number(currentUser.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password
					? hashSync(body.password as string, 10)
					: findUser?.password,
				// password: body.password,
			},
		})
	} catch (err) {
		console.log('[UPDATE_USER_INFO_ERROR]', err)
	}
}

export const registerUser = async (body: Prisma.UserCreateInput) => {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		})

		if (user) {
			// if (!user.verified) {
			// 	throw new Error('Почта не подтверждена')
			// }

			throw new Error('Пользователь уже существует')
		}

		const createdUser = await prisma.user.create({
			data: {
				email: body.email,
				fullName: body.fullName,
				password: hashSync(body.password as string, 10),
				// password: body.password,
			},
		})

		const code = Math.floor(100000 + Math.random() * 900000).toString() // генерация кода

		await prisma.verifiсationCode.create({
			data: {
				code,
				userId: createdUser.id,
			},
		})

		await sendEmail(
			createdUser.email,
			'Next Pizza | Подтверждение почты 🍕',
			VerificationUserTemplate({ code })
		)
	} catch (err) {
		console.log('[REGISTER_USER_ERROR]', err)
		throw err // пробрасываем ошибку дальше
	}
}
