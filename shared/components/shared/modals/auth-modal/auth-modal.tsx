'use client'

import { Dialog, DialogContent } from '../../../ui/dialog'
import { AuthModalBtn } from '../../'
import { GithubIcon } from '@/public/assets/images/auth-modal/github'
import { GoogleIcon } from '@/public/assets/images/auth-modal/google'

type Props = {
	open?: boolean
	onClose: () => void
}

export const AuthModal = ({ open, onClose }: Props) => {
	const handleClose = () => {
		onClose()
	}
	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<div>FORM</div>

				<hr />

				<div className='flex gap-5 items-center'>
					<AuthModalBtn
						provider='github'
						variant='ghost'
						className='w-full gap-2'
						text='Войти'
						image={<GithubIcon />}
					/>
					<AuthModalBtn
						provider='google'
						variant='ghost'
						className='w-full gap-2'
						text='Войти'
						image={<GoogleIcon />}
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}
