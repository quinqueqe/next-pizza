import prisma from '@/prisma/prisma'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'
import { CartItemDTO } from '../services/dto/cart.dto'

/**
 * Функция обновляет общую сумму корзины, используя переданный токен.
 * Она находит корзину, используя переданный токен, извлекает из нее
 * все пункты, вычисляет общую сумму, используя функцию
 * calcCartItemTotalPrice, и обновляет общую сумму в найденной корзине.
 * @param token - токен, используемый для поиска корзины
 * @returns обновленную корзину (Cart)
 */
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

	const validItems = userCart.items.filter(
		item => item.productItem.product !== null
	)

	const totalAmount = validItems.reduce((acc, item) => {
		return acc + calcCartItemTotalPrice(item as CartItemDTO)
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
