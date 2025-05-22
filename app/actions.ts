'use server'
import { CheckoutSchemaType } from '@/shared/constants'
import { OrderStatus } from '@prisma/client'
import prisma from '@/prisma/prisma'

export async function createOrder (data: CheckoutSchemaType) {
	console.log(data)
	const token = '123'

	const order = await prisma?.order.create({
		data: {
			token,
			totalAmount: 1500,
			status: OrderStatus.PENDING,
			items: [],
			fullName: data.firstName + ' ' + data.lastName,
			address: data.address,
			email: data.email,
			phone: data.phone,
			comment: data.comment,
		},
	})
	console.log(order)
}
