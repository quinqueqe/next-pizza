import { CartDTO } from '../services/dto/cart.dto'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

/**
 * Функция getCartDetails принимает объект data типа CartDTO,
 * который содержит информацию о корзине, и возвращает объект
 * со свойствами items (массив объектов типа CartStateItem) и
 * totalAmount (общая стоимость корзины).
 *
 * @param data - объект типа CartDTO, содержащий информацию о корзине
 * @returns - объект со свойствами items (массив объектов типа CartStateItem) и totalAmount (общая стоимость корзины)
 */
export type CartStateItem = {
	id: number
	quantity: number
	name: string
	imageUrl: string
	price: number
	pizzaSize?: number | null
	pizzaType?: number | null
	ingredients: Array<{ name: string; price: number }>
	details: string | null
}

interface ReturnProps {
	items: CartStateItem[]
	totalAmount: number
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem.product.imageUrl,
		price: calcCartItemTotalPrice(item),
		// price: item.productItem.price,
		pizzaSize: item.productItem.size,
		pizzaType: item.productItem.pizzaType,
		ingredients: item.ingredients.map(ing => ({
			name: ing.name,
			price: ing.price,
		})),
	}))
	return {
		items,
		totalAmount: data.totalAmount,
	}
}

