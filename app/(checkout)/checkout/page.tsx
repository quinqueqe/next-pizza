'use client'

import React from 'react'
import {
	CheckoutAddressForm,
	Container,
	CheckoutCartForm,
	CheckoutPersonalForm,
	CheckoutTotalForm,
} from '@/shared/components'
import { cn } from '@/shared/lib'

import { FormProvider } from 'react-hook-form'
import { useCheckoutInterface } from '@/shared/hooks'

type Props = {
	className?: string
}

export default function CheckoutPage({ className }: Props) {
	const { form, onSubmit, submitting } = useCheckoutInterface()
	return (
		<div className={cn('', className)}>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Container>
						<h3 className='py-13 font-extrabold text-[36px]'>
							Оформление заказа
						</h3>
						<div className='flex justify-between items-start pb-[180px]'>
							<div className='flex flex-col gap-13'>
								<CheckoutCartForm />
								<CheckoutPersonalForm />
								<CheckoutAddressForm />
							</div>
							<CheckoutTotalForm loading={submitting} />
						</div>
					</Container>
				</form>
			</FormProvider>
		</div>
	)
}
