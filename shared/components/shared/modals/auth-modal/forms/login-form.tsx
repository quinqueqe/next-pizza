'use client'

import { Button } from '@/shared/components/ui'
import { useLoginFormInterface } from '@/shared/hooks'
import Image from 'next/image'
import { FormProvider } from 'react-hook-form'
import { CloseModalBtn } from '../../../buttons/close-modal-btn'
import { CheckoutFormInput } from '../../../checkout-form'

type Props = {
	onClose?: () => void
}

export const LoginForm = ({ onClose }: Props) => {
	const { form, onSubmit } = useLoginFormInterface({ onClose })

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 relative'>
					<div className='flex justify-between items-center'>
						<div>
							<h3 className='text-[26px] font-bold'>Вход в аккаунт</h3>
							{/* <p className='text-gray-400 w-[300px]'>
								Введите свою почту, чтобы войти в свой аккаунт
							</p> */}
						</div>
						<div className='max-[495px]:hidden'>
							<Image
								src='/assets/images/phone-icon.png'
								width={60}
								height={60}
								alt='img'
							/>
						</div>
					</div>
					<CheckoutFormInput name='email' required label='E-Mail' />
					<CheckoutFormInput
						name='password'
						required
						label='Пароль'
						type='password'
					/>
					<Button
						status={form.formState.isSubmitting && 'loading'}
						variant='default'
						type='submit'
						className='w-full'
					>
						Войти
					</Button>

					<CloseModalBtn className='-right-25 top-0' onClick={onClose} />
				</div>
			</form>
		</FormProvider>
	)
}
