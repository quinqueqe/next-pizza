'use client'

import React from 'react'
import { CheckoutProduct, CheckoutWhiteBlock } from '@/shared/components/shared'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'


export const CheckoutCartForm = () => {
	const discount = usePromoCodes().discount
	const {
		// status,
		items,
		updateItemQuantity,
		deleteItemCart,
		disabled,
	} = useCartInfo(discount)

	const onClickCountBtn = (id: number, quantity: number) => {
		updateItemQuantity(id, quantity)
	}

	return (
		<>
			<CheckoutWhiteBlock title='Корзина' hasClearCartBtn={true}>
				{items.map(item => (
					<CheckoutProduct
						key={item.id}
						imageUrl={item.imageUrl}
						name={item.name}
						pizzaSize={item.pizzaSize as number}
						pizzaType={item.pizzaType as number}
						price={item.price}
						quantity={item.quantity}
						ingredients={item.ingredients}
						onClickMinus={() => onClickCountBtn(item.id, item.quantity - 1)}
						onClickPlus={() => onClickCountBtn(item.id, item.quantity + 1)}
						onClickDelete={() => deleteItemCart(item.id)}
						disabled={disabled}
					/>
				))}
			</CheckoutWhiteBlock>
		</>
	)
}
