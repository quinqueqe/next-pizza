import React from 'react'
import { types } from '../../../constants/pizza'
import { CartStateItem } from '@/shared/lib/get-cart-details'

type Props = {
	item: CartStateItem
	name: string
	size: number
	type: number
	ingredients: { name: string; price: number }[]
}

export const CartItemDetailsInfo = ({
	item,
	name,
	size,
	type,
	ingredients,
}: Props) => {
	// const pizzaType = types[type].name
	const pizzaType = 'традиционное'
	return (
		<div>
			<h4 className='pb-1 text-[14px] font-bold'>{name}</h4>
			{item.pizzaType && (
				<>
					<p className='text-[#a1a1a1] text-[12px] '>
						{size} см, {pizzaType} тесто {size}
					</p>
					<div className='flex items-center'>
						{item.ingredients.length > 1 && (
							<p className='text-[#a1a1a1] text-[12px]'>
								<span className='pr-1'>+</span>
								{ingredients?.map(item => item.name).join(', ')}
							</p>
						)}
					</div>
				</>
			)}
		</div>
	)
}
