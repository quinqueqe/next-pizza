'use client';

import React from 'react'
import { Category } from '@prisma/client'
import { Categories, Container, CartButton } from '.'
import { cn } from '@/shared/lib'

interface Props {
	data: Category[]
}

export const TopBar = ({ data }: Props) => {
	const scroll = window.scrollY
	return (
		<div
			className={cn(
				'sticky top-0 z-20 py-5 bg-white',
				scroll > 170 && 'shadow-[0_4px_30px_rgba(6,5,50,0.1)]'
			)}
		>
			<Container className='flex justify-between items-center py-3'>
				<Categories categories={data} />
				{/* <CartButton /> */}
			</Container>
		</div>
	)
}
