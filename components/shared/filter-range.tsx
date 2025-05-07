'use client'

import React from 'react'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'

// type PriceProps = {
// 	priceFrom: number
// 	priceTo: number
// }

export const FilterRange = () => {
	const [priceFrom, setPriceFrom] = React.useState<number>(0)
	const [priceTo, setPriceTo] = React.useState<number>(1000)

	const updatePrice = (value: number, set: (value: number) => void) => {
		set(value)
	}
	return (
		<>
			<h4>Цена от и до:</h4>
			<div className='flex gap-4 pb-7'>
				<Input
					type='number'
					value={String(priceFrom)}
					onChange={e => updatePrice(Number(e.target.value), setPriceFrom)}
					min={0}
					max={1000}
				/>
				<Input
					type='number'
					value={String(priceTo)}
					onChange={e => updatePrice(Number(e.target.value), setPriceTo)}
					min={100}
					max={1000}
				/>
			</div>
			<RangeSlider
				className='pb-7'
				min={0}
				max={1000}
				step={10}
				value={[priceFrom, priceTo]}
				onValueChange={([from, to]) => {
					setPriceFrom(from)
					setPriceTo(to)
				}}
			/>
		</>
	)
}
