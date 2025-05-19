'use client'

import React from 'react'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/components/shared'
import {
	CheckoutAddressForm,
	CheckoutCartForm,
	CheckoutPersonalForm,
	CheckoutTotalForm,
} from '@/shared/components/shared/checkout'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'

type Props = {
	className?: string
}

export default function CheckoutPage({ className }: Props) {
	const { onClickPromoBtn, promoStatus, discount, setInputValue, inputValue } =
		usePromoCodes()

	const {
		status,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,
		disabled,

		// price
		totalTax,
		totalPrice,
	} = useCartInfo(discount)

	return (
		<div className={cn('', className)}>
			<Container>
				<h3 className='py-13 font-extrabold text-[36px]'>Оформление заказа</h3>
				<div className='flex justify-between items-start pb-[180px]'>
					<div className='flex flex-col gap-13'>
						<CheckoutCartForm />
						<CheckoutPersonalForm />
						<CheckoutAddressForm />
					</div>
					<CheckoutTotalForm
						totalPrice={totalPrice}
						totalAmount={totalAmount}
						totalTax={totalTax}
					/>
				</div>
			</Container>
		</div>
	)
}
