'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormRegisterSchema, FormRegisterSchemaType } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutFormInput } from '../../../checkout-form'
import { Button } from '@/shared/components/ui'

export const RegisterForm = () => {
	const form = useForm<FormRegisterSchemaType>({
		resolver: zodResolver(FormRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	})
	const onSubmit = () => {
		console.log('submit')
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-5'>
					<CheckoutFormInput label='E-Mail' required name='email' />
					<CheckoutFormInput label='Полное имя' required name='fullName' />
					<CheckoutFormInput
						label='Пароль'
						required
						name='password'
						type='password'
					/>
					<CheckoutFormInput
						label='Подтвердите пароль'
						required
						name='confirmPassword'
						type='password'
					/>
					<Button variant='default' type='submit' className='w-full'>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}
