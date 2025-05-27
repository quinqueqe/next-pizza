'use client'

import React from 'react'
import { User } from '@prisma/client'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	FormUpdateSchema,
	FormUpdateSchemaType,
} from './modals/auth-modal/forms/schemas'
import { CheckoutFormInput } from './checkout-form'
import { Button } from '../ui'
import { cn } from '@/shared/lib'
import { signOut } from 'next-auth/react'

type Props = {
	user: User
	titleClassName?: string
}

export const ProfileForm = ({ user, titleClassName }: Props) => {
	const form = useForm<FormUpdateSchemaType>({
		resolver: zodResolver(FormUpdateSchema),
		defaultValues: {
			fullName: user.fullName,
			email: user.email,
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
				<div className='p-[35px]'>
					<div>
						<h3 className={cn('text-[26px] font-bold pb-7', titleClassName)}>
							Личные данные | #{user.id}
						</h3>
					</div>
					<div className='grid grid-cols-2 gap-5 pb-5'>
						<CheckoutFormInput
							name='email'
							// required
							label='E-Mail'
							type='text'
						/>
						<CheckoutFormInput
							name='fullName'
							// required
							// required
							label='Полное имя'
							type='text'
						/>
						<CheckoutFormInput
							name='password'
							// required
							label='Новый пароль'
							type='password'
						/>
						<CheckoutFormInput
							name='confirmPassword'
							// required
							label='Повторите пароль'
							type='password'
						/>
					</div>
					<div className='flex flex-col gap-3'>
						<Button
							type='submit'
							variant='outline'
							className='font-bold text-center text-[16px] py-[13px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
						>
							Сохранить
						</Button>
						<Button
							onClick={() =>
								signOut({
									callbackUrl: '/',
								})
							}
							type='button'
							variant='outline'
							className='font-bold text-center text-[16px] py-[13px]  text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
						>
							Выйти
						</Button>
					</div>
				</div>
			</form>
		</FormProvider>
	)
}
