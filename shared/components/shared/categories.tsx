'use client'

import { Category } from '@prisma/client'
import { useCategory } from '../../store'

interface Props {
	categories: Category[]
}

export const Categories = ({ categories }: Props) => {
	const { activeId, setAcitveId } = useCategory(state => state)
	return (
		<div className='categories'>
			<ul className='flex gap-1.5'>
				{categories.map(({ name, id }, i) => (
					<li key={i}>
						<a
							href={`/#${name}`}
							onClick={() => setAcitveId(i)}
							className={activeId === id ? 'cat-btn-active' : 'cat-btn'}
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
