'use client'
import { createOrder } from '@/shared/server/order/create-order'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CheckoutSchema, CheckoutSchemaType } from '../constants'
import { Api } from '../services/api-client'
import { useCheckout } from '../store'
import { useCartInfo } from './use-cart-info'
import { usePromoCodes } from './use-promo-codes'

export const useCheckoutInterface = () => {
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
	}

	return {
		session,
		form,
		onSubmit,
		submitting,
	}
}
