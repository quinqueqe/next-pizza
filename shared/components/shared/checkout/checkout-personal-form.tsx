'use client'

import {
	CheckoutFormInput,
	// CheckoutInputBlock
	CheckoutWhiteBlock,
} from '@/shared/components/shared'

export const CheckoutPersonalForm = () => {
	return (
		<>
			<CheckoutWhiteBlock title='Персональная информация'>
				<div className='grid grid-cols-2 gap-6 pb-10 pt-[30px]'>
					<CheckoutFormInput placeholder='Имя' name='firstName' />
					<CheckoutFormInput placeholder='Фамилия' name='lastName' />
					<CheckoutFormInput placeholder='E-Mail' name='email' />
					<CheckoutFormInput placeholder='Телефон' name='phone' />
				</div>
			</CheckoutWhiteBlock>
		</>
	)
}
