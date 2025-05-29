import React from 'react'
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
export const useCartInfo = (discount: number) => {
	// states
	const {
		fetchCartItems,
		status,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,
		disabled,
	} = useCart()

	// price
	const { totalTax, totalPrice } = calcCartTotalPriceToTax(
		totalAmount,
		discount
	)

	React.useEffect(() => {
		fetchCartItems()
	}, [])

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

	const deliveryPrice = Math.round(totalPrice / 30)

	const fullPriceWithDelivery = Math.round(totalPrice + deliveryPrice)

	return {
		// states
		status,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,
		disabled,

		// price
		totalTax,
		totalPrice,

		// price delivery
		deliveryPrice,
		fullPriceWithDelivery,

		// Склоняемость 'товаров'
		goods,
	}
}
