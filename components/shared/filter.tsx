'use client'

import React from 'react'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { Api } from '@/services/api-client'
// import { Ingredients } from '@prisma/client'

import { FilterCheckbox, FilterRange } from './'
import { useFilter } from '../store'
// import { useSet } from 'react-use'

export const Filter = () => {
	const { ingredients, setIngredients, loading, setLoading } = useFilter(
		state => state
	)
	// const [set, { toggle }] = useSet(new Set<string>([]));
	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(false)
				const data = await Api.ingredients.ingredients()
				setIngredients(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchIngredients()
	}, [])
	return (
		<div className='w-[280px] filter'>
			<h3>Фильтрация</h3>
			<div className='flex flex-col gap-4 pb-7'>
				<FilterCheckbox name='Можно собирать' value='111' />
				<FilterCheckbox name='Новинки' value='222' />
			</div>

			<FilterRange />

			<div>
				<CheckboxFiltersGroup
					title='Ингредиенты:'
					loading={loading}
					items={ingredients}
					limit={6}
					onClickCheckbox={id => console.log(id)}
				/>
			</div>
		</div>
	)
}
