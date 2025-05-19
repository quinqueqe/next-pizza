import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { Container, SearchInput, CartButton } from './'
import { User } from 'lucide-react'
import { cn } from '@/shared/lib'

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
					<Button variant={'outline'} className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>

					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
