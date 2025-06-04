'use client'

import { Category } from '@prisma/client'
import { useCategory } from '../../store'
import { cn } from '@/shared/lib'
import { CartButton } from './cart-button'
import Image from 'next/image'

interface Props {
	categories: Category[]
	scrollPos: number
}

export const Categories = ({ categories, scrollPos }: Props) => {
	const { activeId, setActiveId } = useCategory()
	return (
		<div className='categories flex justify-between items-center py-3 overflow-x-auto h-[68px]'>
			<div className='flex items-center gap-3 '>
				{scrollPos > 170 && (
					<div className='animate-slide-in-left max-[780px]:hidden'>
						<Image src='/favicon.ico' alt='logo' width={40} height={40} />
					</div>
				)}
				<ul className='flex gap-1.5 pr-3 max-[915px]:pr-0'>
					{categories.map(({ name, id }, i) => (
						<li key={i}>
							<a
								href={`/#${name}`}
								onClick={() => setActiveId(i)}
								className={cn(
									'py-[10px] px-4 font-medium text-[16px] text-center text-[#202020] font-bold shadow-[0_4px_4px_0_rgba(139,139,139,0.096)] rounded-[15px] opacity-0.8 cursor-pointer',
									activeId === id && 'text-[#fe5f00]'
								)}
							>
								{name}
							</a>
						</li>
					))}
				</ul>
			</div>
			{scrollPos > 170 && (
				<div className='max-[915px]:hidden'>
					{/* <div className='max-[915px]:hidden animate-slide-in-right'> */}
					<CartButton />
				</div>
			)}
		</div>
	)
}
