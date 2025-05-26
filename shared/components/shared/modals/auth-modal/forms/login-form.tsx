import React from 'react'
import { Button } from '@/shared/components/ui'
import { CheckoutFormInput } from '../../../checkout-form'
import { FormProvider, useForm } from 'react-hook-form'
import { FormLoginSchema, FormLoginSchemaType } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

export const LoginForm = () => {
	const form = useForm<FormLoginSchemaType>({
		resolver: zodResolver(FormLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})
	return (
		<FormProvider {...form}>
			<div className='flex flex-col gap-5'>
				<div className='flex justify-between items-center'>
					<div>
						<h3 className='text-[26px] font-bold'>Вход в аккаунт</h3>
						<p className='text-gray-400 w-[300px]'>
							Введите свою почту, чтобы войти в свой аккаунт
						</p>
					</div>
					<Image
						src='/assets/images/phone-icon.png'
						width={60}
						height={60}
						alt='img'
					/>
				</div>
				<CheckoutFormInput name='email' required label='E-Mail'/>
				<CheckoutFormInput name='password' required label='Пароль' type='password' />
				<Button variant='default' type='submit' className='w-full'>
					Войти
				</Button>
			</div>
		</FormProvider>
	)
}
