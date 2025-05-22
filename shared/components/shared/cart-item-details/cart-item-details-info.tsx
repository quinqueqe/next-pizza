import React from 'react'
import { types } from '../../../constants/pizza'
import { CartStateItem } from '@/shared/lib/get-cart-details'

type Props = {
	item: CartStateItem
	name: string
	size: number
	type: number
	ingredients: { name: string; price: number }[]
	details?: string | null
}

export const CartItemDetailsInfo = ({
	item,
	name,
	size,
	type,
	ingredients,
}: Props) => {
	const pizzaType = type ? types[type - 1].name : null
	return (
		<div>
			<h4 className='pb-1 text-[14px] font-bold max-w-[220px]'>{name}</h4>
			{item.pizzaType !== null && (
				<>
					<p className='text-[#a1a1a1] text-[12px] '>
						{size} см, {pizzaType} тесто {size}
					</p>
					<div className='flex items-center'>
						{item.ingredients.length > 1 && (
							<p className='text-[#a1a1a1] text-[12px]'>
								<span className='pr-1'>+</span>
								{ingredients
									?.map(item => item.name)
									.join(', ')
									.toLowerCase()}
							</p>
						)}
					</div>
				</>
			)}
		</div>
	)
}
