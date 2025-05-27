import React from 'react'
import { Button } from '@/shared/components/ui'
import { CheckoutFormInput } from '../../../checkout-form'
import { FormProvider, useForm } from 'react-hook-form'
import { FormLoginSchema, FormLoginSchemaType } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

type Props = {
	onClose?: () => void
}

export const LoginForm = ({ onClose }: Props) => {
	const form = useForm<FormLoginSchemaType>({
		resolver: zodResolver(FormLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: FormLoginSchemaType) => {
		try {
			const res = await signIn('credentials', {
				...data,
				redirect: false,
			})

			if (!res?.ok) {
				console.log('LOGIN_ERROR', res?.error)
				toast.error('Не удалось войти в аккаунт')
			}

			if (res?.ok) {
				toast.success('Вы успешно вошли в аккаунт')
			}
			onClose?.()
		} catch (err) {
			console.log('LOGIN_ERROR', err)
		}
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
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
					<CheckoutFormInput name='email' required label='E-Mail' />
					<CheckoutFormInput
						name='password'
						required
						label='Пароль'
						type='password'
					/>
					<Button variant='default' type='submit' className='w-full'>
						Войти
					</Button>
				</div>
			</form>
		</FormProvider>
	)
}
