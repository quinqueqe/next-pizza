import { CartItemDTO } from '../services/dto/cart.dto'

export const calcCartItemTotalPrice = (item: CartItemDTO) => {
	const ingedientsPrice = item.ingredients.reduce(
		(acc, ing) => acc + ing.price,
		0
	)
	return (ingedientsPrice + item.productItem.price) * item.quantity
}
