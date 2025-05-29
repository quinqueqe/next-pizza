'use client'

import { Category } from '@prisma/client'
import { useCategory } from '../../store'
import { cn } from '@/shared/lib'

interface Props {
	categories: Category[]
}

export const Categories = ({ categories }: Props) => {
	const { activeId, setAcitveId } = useCategory()
	return (
		<div className='categories'>
			<ul className='flex gap-1.5'>
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
		</div>
	)
}
