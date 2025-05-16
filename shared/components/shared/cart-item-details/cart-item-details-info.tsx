import React from 'react'
import {types} from '../../../constants/pizza'

type Props = {
	name: string
	size: number
	type: number
	ingredients: { name: string; price: number }[]
}

export const CartItemDetailsInfo = ({
	name,
	size,
	type,
	ingredients,
}: Props) => {
	// const pizzaType = types[type].name
	const pizzaType = 'традиционное'
	return (
		<div>
			<h4 className='pb-1 text-[16px] font-bold'>{name}</h4>
			<p className='text-[#a1a1a1] text-[14px] '>
				{size} см, {pizzaType} тесто {size}
			</p>
			<div className='flex items-center'>
				<p className='text-[#a1a1a1] text-[14px]'>
					<span className='pr-1'>+</span>
					{ingredients?.map(item => item.name).join(', ')}
				</p>
			</div>
		</div>
	)
}
