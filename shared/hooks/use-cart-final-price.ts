import { calcCartTotalPriceToTax } from '../lib'
import { useCart } from '../store'

export const useCartFinalPrice = (discount: number) => {
	// states
	const fetchCartItems = useCart(state => state.fetchCartItems)
	const items = useCart(state => state.items)
	const totalAmount = useCart(state => state.totalAmount)
	const updateItemQuantity = useCart(state => state.updateItemQuantity)
	const deleteItemCart = useCart(state => state.deleteItemCart)

	// price
	const { totalTax, totalPrice } = calcCartTotalPriceToTax(totalAmount, discount)

	return {
		// states
		fetchCartItems,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,

		// price
		totalTax,
		totalPrice,
	}
}
