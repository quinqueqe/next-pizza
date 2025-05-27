'use client'

import React from 'react'
import { Button } from '../ui'
import { signOut, useSession } from 'next-auth/react'
import { CircleUser, User } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/shared/store'
import { usePathname } from 'next/navigation'

type Props = {
	onClickLogin?: () => void
}

export const ProfileBtn = ({ onClickLogin }: Props) => {
	const pathname = usePathname().replace('/', '')
	const { data: session } = useSession()
	const { status } = useCart(state => state)
	// console.log(pathname)
	return (
		<>
			{session && pathname !== 'profile' ? (
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
			) : pathname === 'profile' && session ? (
				<Button
					status={status}
					onClick={() => signOut({
						callbackUrl: '/',
					})}
					variant={'outline'}
					className='flex items-center gap-1 w-[120px]'
				>
					<User size={16} />
					Выйти
				</Button>
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
