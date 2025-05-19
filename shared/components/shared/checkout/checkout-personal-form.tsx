import React from 'react'
import { CheckoutProduct, CheckoutWhiteBlock } from '@/shared/components/shared'

export const CheckoutPersonalForm = () => {
	return (
		<>
			<CheckoutWhiteBlock>
				<CheckoutProduct />
				<CheckoutProduct className='border-none ' />
			</CheckoutWhiteBlock>
		</>
	)
}
