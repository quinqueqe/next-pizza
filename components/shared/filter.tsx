import React from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

export const Filter = () => {
	const FilterCheckDb = [
		{
			text: 'Сырный соус',
			value: '3',
		},
		{
			text: 'Моцарелла',
			value: '4',
		},
		{
			text: 'Чеснок',
			value: '5',
		},
		{
			text: 'Солённые огурчики',
			value: '6',
		},
		{
			text: 'Красный лук',
			value: '7',
		},
		{
			text: 'Томаты',
			value: '8',
		},
		{
			text: 'Сырный соус',
			value: '3',
		},
		{
			text: 'Моцарелла',
			value: '4',
		},
		{
			text: 'Чеснок',
			value: '5',
		},
		{
			text: 'Солённые огурчики',
			value: '6',
		},
		{
			text: 'Красный лук',
			value: '7',
		},
		{
			text: 'Томаты',
			value: '8',
		},
	]
	return (
		<div className='w-[280px] filter'>
			<h3>Фильтрация</h3>
			<div className='flex flex-col gap-4 pb-7'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
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
				<CheckboxFiltersGroup
					name='Ингредиенты:'
					items={FilterCheckDb}
					limit={6}
				/>
			</div>
		</div>
	)
}
