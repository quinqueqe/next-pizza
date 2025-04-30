'use client'

import { useCategory } from '../store'

export const Categories = () => {
	const cats = [
		{ id: 0, name: 'Пиццы' },
		{ id: 1, name: 'Комбо' },
		{ id: 2, name: 'Закуски' },
		{ id: 3, name: 'Коктейли' },
		{ id: 4, name: 'Кофе' },
		{ id: 5, name: 'Напитки' },
		{ id: 6, name: 'Десерты' },
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
