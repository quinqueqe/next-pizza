import React from 'react'
import { FilterCheckbox, FilterIngredients } from './'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'

export const Filter = () => {
	return (
		<div className='w-[280px] filter'>
			<h3>Фильтрация</h3>
			<div className='flex flex-col gap-4 pb-7'>
				<FilterCheckbox name='Можно собирать' value='111' />
				<FilterCheckbox name='Новинки' value='222' />
			</div>

			<h4>Цена от и до:</h4>
			<div className='flex gap-4 pb-7'>
				<Input type='number' defaultValue={0} min={0} max={1000} />
				<Input type='number' defaultValue={500} min={100} max={1000} />
			</div>
			<RangeSlider
				className='pb-7'
				min={0}
				max={5000}
				step={10}
				value={[0, 5000]}
			/>

			<div>
				<FilterIngredients/>
			</div>
		</div>
	)
}
