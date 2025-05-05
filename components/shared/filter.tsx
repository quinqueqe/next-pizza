import React from 'react'
import { FilterCheckbox, FilterIngredients, FilterRange } from './'

export const Filter = () => {
	return (
		<div className='w-[280px] filter'>
			<h3>Фильтрация</h3>
			<div className='flex flex-col gap-4 pb-7'>
				<FilterCheckbox name='Можно собирать' value='111' />
				<FilterCheckbox name='Новинки' value='222' />
			</div>

			<h4>Цена от и до:</h4>
			<FilterRange />

			<div>
				<FilterIngredients />
			</div>
		</div>
	)
}
