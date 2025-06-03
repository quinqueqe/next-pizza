'use client'

import React from 'react'
import {
	CheckoutAddressForm,
	Container,
	CheckoutCartForm,
	CheckoutPersonalForm,
	CheckoutTotalForm,
} from '@/shared/components'

import { FormProvider } from 'react-hook-form'
import { useCheckoutInterface } from '@/shared/hooks'

export default function CheckoutPage() {
	const { form, onSubmit, submitting } = useCheckoutInterface()
	return (
		<div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Container>
						<h3 className='py-13 font-extrabold text-[36px] max-[786px]:py-8 max-[786px]:pt-6 max-[450px]:text-[30px]'>
							Оформление заказа
						</h3>
						<div className='flex justify-between items-start pb-[100px] max-[1300px]:flex-col max-[1300px]:justify-none max-[1300px]:gap-13 max-[1300px]:justify-center max-[1300px]:items-center max-[786px]:gap-8 max-[482px]:pb-[60px]'>
							<div className='flex flex-col gap-13 max-[786px]:gap-8'>
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
