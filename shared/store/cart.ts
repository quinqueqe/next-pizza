import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
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
	disabled: boolean
	setDisabled: (value: boolean) => void
}

export const useCart = create<CartType>()(
	devtools(set => ({
		items: [],
		status: Status.LOADING,
		totalAmount: 0,
		disabled: false,
		setDisabled: value => set({ disabled: value }),

		fetchCartItems: async () => {
			try {
				set({ status: Status.LOADING })
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
				set({ disabled: true })
				const data = await Api.cart.updateQuantityItem(id, quantity)
				set(getCartDetails(data))
				set({disabled: true })
				// console.log(data)
			} catch (error) {
				set({ items: [], status: Status.ERROR, disabled: false })
				console.error(error)
			} finally {
				set({ disabled: false })
			}
		},
		deleteItemCart: async id => {
			try {
				set({ disabled: true })
				const data = await Api.cart.removeCartItem(id)
				set(getCartDetails(data))
				set({ disabled: true })
				// console.log(data)
			} catch (error) {
				set({ items: [], status: Status.ERROR, disabled: false })
				console.error(error)
			} finally {
				set({ disabled: false })
			}
		},
		addCartItem: async (values: CreateCartItemValues) => {
			try {
				set({ status: Status.LOADING })
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
)
