import prisma from '@/prisma/prisma'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export const updateCartTotalAmount = async (token: string) => {
	const userCart = await prisma?.cart.findFirst({
		where: {
			token,
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

	if (!userCart) return 0

	const totalAmount = userCart.items.reduce((acc, item) => {
		return acc + calcCartItemTotalPrice(item)
	}, 0)

	return await prisma.cart.update({
		where: {
			// найди по id
			id: userCart.id,
		},
		data: {
			// обновить нужно только totalAmount
			totalAmount,
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
}
