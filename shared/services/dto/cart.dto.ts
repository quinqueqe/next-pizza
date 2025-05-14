import { Cart, CartItem, Ingredients, Product, Variation } from '@prisma/client'

export type CartItemDTO = CartItem & {
	productItem: Variation & {
		product: Product
	}
	ingredients: Ingredients[]
}

export interface CartDTO extends Cart {
	items: CartItemDTO[]
}
