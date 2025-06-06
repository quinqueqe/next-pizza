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
				classNameBtn='w-[132px] max-[470px]:w-[125px] max-[430px]:w-[118px] max-[400px]:w-[112px] max-[382px]:w-[105px] max-[362px]:w-[99px]'
				// classNameBtn='w-[132px] max-[1100px]:w-[159px]'
			/>
			<GroupVariants
				items={pizzaTypes}
				onClick={setActiveType}
				active={activeType - 1}
				classNameBtn='w-[202px] max-[470px]:w-[192px] max-[430px]:w-[182px] max-[400px]:w-[172px] max-[382px]:w-[162px] max-[362px]:w-[152px]'
				// classNameBtn='w-[202px] max-[1100px]:w-[242px]'
			/>
		</>
	)
}
