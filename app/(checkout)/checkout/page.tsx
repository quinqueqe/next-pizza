'use client'

import {
	CheckoutAddressForm,
	Container,
	CheckoutCartForm,
	CheckoutPersonalForm,
	CheckoutTotalForm,
} from '@/shared/components'
import { cn } from '@/shared/lib'

import { CheckoutSchema, CheckoutSchemaType } from '@/shared/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {
	className?: string
}

export default function CheckoutPage({ className }: Props) {
	const form = useForm<CheckoutSchemaType>({
		resolver: zodResolver(CheckoutSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	})

	const onSubmit = (data: CheckoutSchemaType) => {
		console.log(data)
	} // форма будет треггерится каждый раз когда пользователь нажмет на кнопку (34 стр)
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
							<CheckoutTotalForm />
						</div>
					</Container>
				</form>
			</FormProvider>
		</div>
	)
}
