import React from 'react'
import { CheckoutProduct, CheckoutWhiteBlock } from '@/shared/components/shared'
import { CartStateItem } from '@/shared/lib/get-cart-details'

type Props = {
	items: CartStateItem[]
}

export const CheckoutCartForm = ({ items }: Props) => {
	return (
		<>
			<CheckoutWhiteBlock title='Корзина' hasClearCartBtn={true}>
				{items.map(item => (
					<CheckoutProduct key={item.id} {...item} />
				))}
			</CheckoutWhiteBlock>
		</>
	)
}
