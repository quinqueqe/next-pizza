'use client'

import { User } from 'lucide-react'
import { Dialog, DialogContent } from '../../../ui/dialog'
import { AuthModalBtn } from '../../'

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

				<div className='flex gap-5 items-center'>
					<AuthModalBtn
						provider='github'
						variant='ghost'
						className='w-full'
						text='Войти'
						image={<User size={16} />}
					/>
					<AuthModalBtn
						provider='google'
						variant='ghost'
						className='w-full'
						text='Войти'
						image={<User size={16} />}
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}
