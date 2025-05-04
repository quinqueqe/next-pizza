import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { Container, SearchInput } from './'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

export const Header = () => {
	return (
		<header className='border border-b'>
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

				<SearchInput/>

				<div className='flex items-center gap-4'>
					<Button variant={'outline'} className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button
							variant={'default'}
							className='group relative bg-orange-500 flex items-center'
						>
							<b>520 ₽</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart size={16} className='relative' strokeWidth={2} />
								<b>3</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
