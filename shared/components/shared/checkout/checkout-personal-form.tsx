'use client'

import {
	CheckoutFormInput,
	// CheckoutInputBlock
	CheckoutWhiteBlock,
} from '@/shared/components/shared'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'

export const CheckoutPersonalForm = () => {
	const { discount } = usePromoCodes()
	const { status } = useCartInfo(discount)
	return (
		<>
			<CheckoutWhiteBlock
				title='Персональная информация'
				className={status === 'loading' ? 'opacity-40 pointer-events-none' : ''}
				classNamePb='max-[786px]:border-none'
			>
				<div
					className='grid grid-cols-2 gap-6 pb-10 pt-[30px] max-[786px]:grid-cols-1 max-[686px]:pb-[30px] max-[584px]:pb-[25px]
				max-[786px]:pt-[0px]'
				>
					<CheckoutFormInput placeholder='Имя' name='firstName' />
					<CheckoutFormInput placeholder='Фамилия' name='lastName' />
					<CheckoutFormInput placeholder='E-Mail' name='email' />
					<CheckoutFormInput placeholder='Телефон' name='phone' />
				</div>
			</CheckoutWhiteBlock>
		</>
	)
}
