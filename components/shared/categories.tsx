import React from 'react'

export const Categories = () => {
	const cats = [
		'Пиццы',
		'Комбо',
		'Закуски',
		'Коктейли',
		'Кофе',
		'Напитки',
		'Десерты',
	]
	const activeCat = 0
	return (
		<div className='categories'>
			<ul className='flex gap-1.5'>
				{cats.map((item, i) => (
					<li key={i}>
						<button
							className={
								activeCat === i ? 'cat-btn-active' : 'cat-btn'
							}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
