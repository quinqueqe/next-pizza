'use client'

import React from 'react'
import { GroupVariants, Item } from './group-variants'

type Props = {
	pizzaSizes: Item[]
	pizzaTypes: Item[]
	setActiveSize: (i: number) => void
	setActiveType: (i: number) => void
	activeSize: number
	activeType: number
}

export const PizzaSelector = ({
	pizzaSizes,
	setActiveSize,
	activeSize,
	pizzaTypes,
	setActiveType,
	activeType,
}: Props) => {
	return (
		<>
			<GroupVariants
				items={pizzaSizes}
				onClick={setActiveSize}
				active={activeSize}
				classNameBtn='w-[132px]'
			/>
			<GroupVariants
				items={pizzaTypes}
				onClick={setActiveType}
				active={activeType - 1}
				classNameBtn='w-[202px]'
			/>
		</>
	)
}
