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
import { createOrder } from '@/app/actions'
import toast from 'react-hot-toast'
import React from 'react'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'
import { useSession } from 'next-auth/react'
import { Api } from '@/shared/services/api-client'
import { useCheckout } from '@/shared/store'

type Props = {
	className?: string
}

export default function CheckoutPage({ className }: Props) {
	const { data: session } = useSession()
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

	React.useEffect(() => {
		async function fetchUserInfo() {
			const data = await Api.auth.getMe()
			const [firstName, lastName] = data.fullName.split(' ')

			form.setValue('firstName', firstName)
			form.setValue('lastName', lastName)
			form.setValue('email', data.email)
		}

		if (session) {
			fetchUserInfo()
		}
	}, [session])

	const { submitting, setSubmitting } = useCheckout()

	const { discount, promoCheckout } = usePromoCodes()
	const { totalPrice, deliveryPrice, fullPriceWithDelivery } =
		useCartInfo(discount)

	const onSubmit = async (data: CheckoutSchemaType) => {
		try {
			setSubmitting(true)
			const url = await createOrder(
				data,
				fullPriceWithDelivery,
				totalPrice,
				deliveryPrice,
				discount,
				promoCheckout
			) // data передается в виде массива с объектом data, url берется из return функции
			toast.success('Заказ успешно оформлен! Переходим на оплату...', {
				icon: '✅',
			})

			if (url) {
				location.href = url
			}
		} catch (err) {
			toast.error('Произошла ошибка при создании заказа', {
				icon: '❌',
			})
			setSubmitting(false)
			console.log('ERROR_ORDER', err)
		}
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
							<CheckoutTotalForm loading={submitting} />
						</div>
					</Container>
				</form>
			</FormProvider>
		</div>
	)
}
