import { CartItemDTO } from '../services/dto/cart.dto'

/**
 * Функция расчета общей стоимости одного пункта в корзине
 *
 * @param {CartItemDTO} item - объект пункта в корзине
 * @returns {number} общая стоимость пункта в корзине
 */
export const calcCartItemTotalPrice = (item: CartItemDTO) => {
	const ingedientsPrice = item.ingredients.reduce(
		(acc, ing) => acc + ing.price,
		0
	)
	return (ingedientsPrice + item.productItem.price!) * item.quantity
}

