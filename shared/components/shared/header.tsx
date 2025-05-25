'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { Container, SearchInput, CartButton, ProfileBtn } from './'
import { User } from 'lucide-react'
import { cn } from '@/shared/lib'
import { useSearchParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useSession, signIn } from 'next-auth/react'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header = ({
	hasSearch = true,
	hasCart = true,
	className,
}: Props) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const session = useSession()
	console.log(session.data)
	React.useEffect(() => {
		if (searchParams.has('paid')) {
			setTimeout(() => {
				toast.success(
					`Ваш заказ был успешно оплачен, чек об оплате отправлен вам на почту Приятного аппетита!`
				)
				router.push('/')
			}, 500)
		}
	}, [])
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex justify-between items-center py-8'>
				<Link href='/' className='flex gap-4 items-center'>
					<Image src={'/logo.png'} alt='img' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercae font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</Link>

				{hasSearch && <SearchInput />}

				<div className='flex items-center gap-4'>
					<ProfileBtn session={session.data} />

					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
