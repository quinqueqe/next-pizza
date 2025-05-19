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

type Props = {
	className?: string
}

export default function CheckoutPage({ className }: Props) {
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
					<CheckoutTotalForm />
				</div>
			</Container>
		</div>
	)
}
