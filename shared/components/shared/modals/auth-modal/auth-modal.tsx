'use client'

import React from 'react'
import { Dialog, DialogContent } from '../../../ui/dialog'
import { AuthModalBtn, LoginForm, RegisterForm, ConfirmForm } from '../../'
import { GithubIcon } from '@/public/assets/images/auth-modal/github'
import { GoogleIcon } from '@/public/assets/images/auth-modal/google'
import { Button } from '@/shared/components/ui'
import { useAuth } from '@/shared/store'
import { cn } from '@/shared/lib'

type Props = {
	open?: boolean
	onClose: () => void
}

export const AuthModal = ({ open, onClose }: Props) => {
	const handleClose = () => {
		onClose()
		setType('login')
	}
	const { type, setType } = useAuth()
	const onSwitchType = () => {
		setType(type === 'login' ? 'register' : 'login')
	}

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent
				className={cn(
					'w-[450px] rounded-4xl px-[40px] py-[45px]',
					'max-[495px]:w-full',
					'[&>button:last-child]:hidden' // скрыл дефолтный крестик для закрытия окна
				)}
			>
				<div>
					{type === 'login' ? (
						<LoginForm onClose={onClose} />
					) : type === 'register' ? (
						<RegisterForm onClose={onClose} />
					) : (
						// onClose={onClose}
						type === 'confirm' && <ConfirmForm onClose={onClose} />
					)}
				</div>

				{type !== 'confirm' && (
					<>
						<div className='flex justify-center items-center'>
							<hr className='h-[1px] bg-gray-700 w-full' />
							<span className='bg-white px-2 text-gray-700'>или</span>
							<hr className='h-[1px] bg-gray-700 w-full' />
						</div>

						<div className='flex gap-5 items-center'>
							<AuthModalBtn
								provider='github'
								variant='ghost'
								className='w-full gap-2'
								text='GitHub'
								image={<GithubIcon />}
							/>
							<AuthModalBtn
								provider='google'
								variant='ghost'
								className='w-full gap-2'
								text='Google'
								image={<GoogleIcon />}
							/>
						</div>

						<div>
							<Button
								onClick={() => onSwitchType()}
								variant='outline'
								type='button'
								className='w-full'
							>
								{type === 'login'
									? 'Регистрация'
									: type === 'register' && 'Войти'}
							</Button>
						</div>
					</>
				)}
			</DialogContent>
		</Dialog>
	)
}
