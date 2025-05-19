import { calcCartTotalPriceToTax } from '../lib'
import { useCart } from '../store'

/**
 * Хук useCartFinalPrice используется для управления данными корзины,
 * включая получение элементов корзины, управление количеством и
 * удаление элементов, а также расчет итоговой стоимости и налога
 * с учетом скидки.
 *
 * @param {number} discount - процент скидки для применения к общей сумме
 * @returns {object} объект с методами и параметрами для управления корзиной,
 * включая методы для получения и обновления элементов, а также итоговую
 * сумму и налог
 */
export const useCartFinalPrice = (discount: number) => {
	// states
	const fetchCartItems = useCart(state => state.fetchCartItems)
	const status = useCart(state => state.status)
	const items = useCart(state => state.items)
	const totalAmount = useCart(state => state.totalAmount)
	const updateItemQuantity = useCart(state => state.updateItemQuantity)
	const deleteItemCart = useCart(state => state.deleteItemCart)
	const disabled = useCart(state => state.disabled)

	// price
	const { totalTax, totalPrice } = calcCartTotalPriceToTax(
		totalAmount,
		discount
	)

	// Склоняемость 'Товаров'
	const goods =
		items.length === 1
			? 'товар'
			: items.length === 2
			? 'товара'
			: items.length === 3
			? 'товара'
			: items.length === 4
			? 'товара'
			: 'товаров'

	return {
		// states
		fetchCartItems,
		status,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,
		disabled,

		// price
		totalTax,
		totalPrice,

		// Склоняемость 'товаров'
		goods,
	}
}
