'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormRegisterSchema, FormRegisterSchemaType } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutFormInput } from '../../../checkout-form'
import { Button } from '@/shared/components/ui'
import toast from 'react-hot-toast'
import { registerUser } from '@/app/actions'

type Props = {
	onClose?: () => void
}

export const RegisterForm = ({ onClose }: Props) => {
	const form = useForm<FormRegisterSchemaType>({
		resolver: zodResolver(FormRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	})
	const onSubmit = async (data: FormRegisterSchemaType) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			toast.success('Регистрация прошла успешно, подтвердите свою почту')
			onClose?.()
		} catch (err) {
			toast.error('Произошла ошибка при регистрации')
			console.log('REGISTER_ERROR', err)
		}
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-5'>
					<div>
						<h3 className='text-[26px] font-bold'>Регистрация аккаунта</h3>
						<p className='text-gray-400'>
							Введите свои данные, чтобы зарегистривароваться и войти в свой аккаунт
						</p>
					</div>
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
					<Button
						status={form.formState.isSubmitting && 'loading'}
						variant='default'
						type='submit'
						className='w-full'
					>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}
