import React from 'react'
import { Button } from '../ui'
import { signIn, signOut } from 'next-auth/react'
import { User } from 'lucide-react'

type Props = {
	session: any
}

export const ProfileBtn = ({ session }: Props) => {
	return (
		<>
			{session ? (
				<Button
					onClick={() =>
						signOut()
					}
					variant={'outline'}
					className='flex items-center gap-1'
				>
					<User size={16} />
					Выйти
				</Button>
			) : (
				<Button
					onClick={() =>
						signIn('github', {
							callbackUrl: '/',
							redirect: true,
						})
					}
					variant={'outline'}
					className='flex items-center gap-1'
				>
					<User size={16} />
					Войти
				</Button>
			)}
		</>
	)
}
