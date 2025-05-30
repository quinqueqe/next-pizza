import { PaymentCallbackData } from '@/@types/yookassa'
import prisma from '@/prisma/prisma'
import { OrderSuccessTemplate } from '@/shared/components/shared/email-templates/order-success'
import { sendEmail } from '@/shared/lib'
import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import { OrderStatus } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as PaymentCallbackData

		const order = await prisma.order.findFirst({
			where: {
				id: Number(body.object.metadata.order_id),
			},
			include: {
				user: true,
			},
		})

		if (!order) {
			return NextResponse.json({ error: 'Order not found' })
		}

		// const isSucceeded = body.object.status === 'succeeded'

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				status: OrderStatus.SUCCEEDED,
			},
		})

		const items = JSON.parse(order.items as string) as CartItemDTO[]

		// if (isSucceeded) {
		await sendEmail(
			order.email,
			'Next Pizza | Ваш заказ успешно оформлен 🍕',
			OrderSuccessTemplate({
				orderId: order.id,
				totalAmount: order.totalAmount,
				fullName: order.fullName,
				items,
			})
		)
		// } else {
		// 	// письмо о не оплате
		// }
	} catch (error) {
		console.log('[GET_ERROR]', error)
	}
}
