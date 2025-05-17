import { create } from 'zustand'
import { Api } from '../services/api-client'
import { CartStateItem } from '../lib/get-cart-details'
import { getCartDetails } from '../lib/get-cart-details'
import { CreateCartItemValues } from '../services/dto/cart.dto'

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface CartType {
	items: CartStateItem[]
	status: string
	totalAmount: number
	fetchCartItems: () => void
	updateItemQuantity: (id: number, quantity: number) => void
	deleteItemCart: (id: number) => void
	addCartItem: (values: CreateCartItemValues) => void
}

export const useCart = create<CartType>()(set => ({
	items: [],
	status: Status.LOADING,
	totalAmount: 666,

	fetchCartItems: async () => {
		try {
			set({ items: [], status: Status.LOADING })
			const data = await Api.cart.getCart()
			set(getCartDetails(data))
			set({ status: Status.SUCCESS })
			// console.log(data)
		} catch (error) {
			set({ items: [], status: Status.ERROR })
			console.error(error)
		}
	},

	updateItemQuantity: async (id, quantity) => {
		try {
			set({ items: [], status: Status.LOADING })
			const data = await Api.cart.updateQuantityItem(id, quantity)
			set(getCartDetails(data))
			set({ status: Status.SUCCESS })
			// console.log(data)
		} catch (error) {
			set({ items: [], status: Status.ERROR })
			console.error(error)
		}
	},
	deleteItemCart: async id => {
		try {
			set({ items: [], status: Status.LOADING })
			const data = await Api.cart.removeCartItem(id)
			set(getCartDetails(data))
			set({ status: Status.SUCCESS })
			// console.log(data)
		} catch (error) {
			set({ items: [], status: Status.ERROR })
			console.error(error)
		}
	},
	addCartItem: async (values: CreateCartItemValues) => {
		try {
			set({ items: [], status: Status.LOADING })
			const data = await Api.cart.addCartItem(values)
			set(getCartDetails(data))
			set({ status: Status.SUCCESS })
			// console.log(data)
		} catch (error) {
			set({ items: [], status: Status.ERROR })
			console.error(error)
		}
	},
}))
