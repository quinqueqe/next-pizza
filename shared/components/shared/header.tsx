'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, SearchInput, CartButton, ProfileBtn, AuthModal } from './'
import { cn } from '@/shared/lib'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '@/shared/store'
import { useHeaderInterface } from '@/shared/hooks/use-header-interface'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
	hasProfile?: boolean
}

export const Header = ({
	hasSearch = false,
	hasCart = false,
	hasProfile = false,
	className,
}: Props) => {
	const searchParams = useSearchParams()

	useHeaderInterface({ searchParams })

	const { openModal, setOpenModal } = useAuth()
	return (
		<header className={cn('', className)}>
			<Container className='flex justify-between items-center py-8'>
				<Link href='/' className='flex gap-4 items-center'>
					<Image src='/favicon.ico' alt='img' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercae font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</Link>

				{hasSearch && <SearchInput />}

				<div className='flex items-center gap-4'>
					<AuthModal open={openModal} onClose={() => setOpenModal(false)} />
					{hasProfile && <ProfileBtn onClickLogin={() => setOpenModal(true)} />}

					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
