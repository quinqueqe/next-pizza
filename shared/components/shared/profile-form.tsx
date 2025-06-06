'use client'

import { useProfileFormInterface } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { FormProvider } from 'react-hook-form'
import { Button } from '../ui'
import { CheckoutFormInput } from './checkout-form'
import { CloseProfileModalBtn } from './buttons'

type Props = {
	user: User
	className?: string
	titleClassName?: string
	onCloseModal?: () => void
	type?: 'mobile' | 'dekstop'
}

export const ProfileForm = ({
	user,
	className,
	titleClassName,
	onCloseModal,
	type,
}: Props) => {
	const { loadingBtn, setLoadingBtn, form, onSubmit } = useProfileFormInterface(
		{ user, onCloseModal }
	)
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className={cn('p-[35px] relative', 'max-[820px]:pt-6', className)}>
					<div
						className={cn(
							type === 'mobile' &&
								'max-[820px]:flex max-[820px]:items-center max-[820px]:gap-3 max-[820px]:-mt-4 max-[820px]:-ml-4',
							'pb-5'
						)}
					>
						{type === 'mobile' && (
							<CloseProfileModalBtn onClick={onCloseModal} />
						)}
						<h3 className={cn('text-[26px] font-bold', titleClassName)}>
							Личные данные | #{user.id}
						</h3>
					</div>
					<div className='grid grid-cols-2 gap-5 pb-5 max-[650px]:grid-cols-1'>
						{user.provider === 'credentials' ? (
							<>
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
							</>
						) : (
							<CheckoutFormInput
								name='fullName'
								// required
								label='Полное имя'
								type='text'
							/>
						)}
					</div>
					<div className='flex gap-3'>
						<Button
							status={form.formState.isSubmitting ? 'loading' : 'success'}
							type='submit'
							variant='outline'
							className='font-bold text-center text-[16px] py-[13px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
						>
							Сохранить
						</Button>
						<Button
							onClick={() => {
								signOut({
									callbackUrl: '/',
								})
								setLoadingBtn('loading')
							}}
							status={loadingBtn}
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
