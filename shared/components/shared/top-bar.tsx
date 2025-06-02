'use client'

import React from 'react'
import { Category } from '@prisma/client'
import { Categories, Container } from '.'
import { cn } from '@/shared/lib'
import { useHeader } from '@/shared/store'

interface Props {
	data: Category[]
}

export const TopBar = ({ data }: Props) => {
	const { scrollPos, setScrollPos } = useHeader()

	React.useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY
			setScrollPos(currentScroll)
		}
		window.addEventListener('scroll', handleScroll)
	}, [])
	return (
		<div
			className={cn(
				'sticky top-0 z-20 bg-white',
				scrollPos > 170 && 'shadow-[0_4px_30px_rgba(6,5,50,0.1)]'
				// 'py-5'
			)}
		>
			<Container
			// className={cn('flex justify-between items-center py-3', 'h-[68px]')}
			// className='py-3'
			>
				<Categories categories={data} scrollPos={scrollPos} />
			</Container>
		</div>
	)
}
