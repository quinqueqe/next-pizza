'use client'

import { useCategory } from '../store'

export const Categories = () => {
	const cats = [
		{ id: 1, name: 'Пиццы' },
		{ id: 2, name: 'Комбо' },
		{ id: 3, name: 'Закуски' },
		{ id: 4, name: 'Коктейли' },
		{ id: 5, name: 'Кофе' },
		{ id: 6, name: 'Напитки' },
		{ id: 7, name: 'Десерты' },
	]
	const { activeId, setAcitveId } = useCategory(state => state)
	return (
		<div className='categories'>
			<ul className='flex gap-1.5'>
				{cats.map(({name, id}, i) => (
					<li key={i}>
						<a href={`/#${name}`}
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
