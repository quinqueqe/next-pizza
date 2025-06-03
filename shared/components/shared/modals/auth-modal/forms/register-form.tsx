'use client'

import React from 'react'
import { FormProvider } from 'react-hook-form'
import { CheckoutFormInput } from '../../../checkout-form'
import { Button } from '@/shared/components/ui'
import { useRegisterFormInterface } from '@/shared/hooks'

type Props = {
	onClose?: () => void
}

export const RegisterForm = ({ onClose }: Props) => {
	const { form, onSubmit } = useRegisterFormInterface({ onClose })
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3'>
					<div>
						<h3 className='text-[26px] font-bold'>Регистрация аккаунта</h3>
						{/* <p className='text-gray-400'>
							Введите свои данные, чтобы зарегистривароваться и войти в свой
							аккаунт
						</p> */}
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
