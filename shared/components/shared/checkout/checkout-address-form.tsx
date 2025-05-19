import React from 'react'
import {
	CheckoutProduct,
	CheckoutWhiteBlock,
} from '@/shared/components/shared'


export const CheckoutAddressForm = () => {
	return (
		<>
			<CheckoutWhiteBlock>
				<CheckoutProduct />
				<CheckoutProduct className='border-none ' />
			</CheckoutWhiteBlock>
		</>
	)
}
