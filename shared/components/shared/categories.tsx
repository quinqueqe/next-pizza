'use client'

import { Category } from '@prisma/client'
import { useCategory } from '../../store'
import { cn } from '@/shared/lib'
import { CartButton } from './cart-button'

interface Props {
	categories: Category[]
	scrollPos: number
}

export const Categories = ({ categories, scrollPos }: Props) => {
	const { activeId, setAcitveId } = useCategory()
	return (
		<div className='categories flex justify-between items-center py-3 overflow-x-auto h-[68px]'>
			<ul className='flex gap-1.5 pr-3 max-[915px]:pr-0'>
				{categories.map(({ name, id }, i) => (
					<li key={i}>
						<a
							href={`/#${name}`}
							onClick={() => setAcitveId(i)}
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
			{scrollPos > 170 && (
				<div className='max-[915px]:hidden'>
					<CartButton />
				</div>
			)}
		</div>
	)
}
