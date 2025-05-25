import React from 'react'
import { Button } from '../ui'
import { useSession } from 'next-auth/react'
import { CircleUser, User } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/shared/store'

type Props = {
	onClickLogin?: () => void
}

export const ProfileBtn = ({ onClickLogin }: Props) => {
	const { data: session } = useSession()
	const { status } = useCart(state => state)
	return (
		<>
			{session ? (
				<Link href='/profile'>
					<Button
						status={status}
						variant={'outline'}
						className='flex items-center gap-1 w-[120px]'
					>
						<CircleUser size={18} />
						Профиль
					</Button>
				</Link>
			) : (
				<Button
					status={status}
					onClick={onClickLogin}
					variant={'outline'}
					className='flex items-center gap-1 w-[120px]'
				>
					<User size={16} />
					Войти
				</Button>
			)}
		</>
	)
}
