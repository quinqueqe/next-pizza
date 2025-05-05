'use client'

import React from 'react'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { Api } from '@/services/api-client'
import { Ingredients } from '@prisma/client'

export const FilterIngredients = () => {
	const [ingredients, setIngredients] = React.useState<Ingredients[]>([])
	const [loading, setLoading] = React.useState<boolean>(true)
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
		<CheckboxFiltersGroup
			title='Ингредиенты:'
			loading={loading}
			items={ingredients}
			limit={6}
		/>
	)
}
