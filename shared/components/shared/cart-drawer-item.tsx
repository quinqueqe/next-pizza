import React from 'react'
import {
	CartItemDetailsImage,
	CartItemDetailsInfo,
	CartItemDetailsPrice,
} from './cart-item-details'
import { X } from 'lucide-react'
import { CartStateItem } from '@/shared/lib/get-cart-details'

type Props = {
	item: CartStateItem
	imageUrl: string
	name: string
	size: number
	type: number
	ingredients: { name: string; price: number }[]
	price: number
	quantity: number
	onClickMinus?: () => void
	onClickPlus?: () => void
	onClickDelete?: () => void
}

export const CartDrawerItem = ({
	item,
	imageUrl,
	name,
	size,
	type,
	ingredients,
	price,
	quantity,
	onClickMinus,
	onClickPlus,
	onClickDelete,
}: Props) => {
	return (
		<li className='p-4 flex flex-col gap-4 bg-white relative'>
			<div className='flex items-start gap-6 pb-3 border-b-[1px] border-solid border-[#a1a1a1]'>
				<CartItemDetailsImage imageUrl={imageUrl} />
				<div className='flex flex-col'>
					<CartItemDetailsInfo
						item={item}
						name={name}
						size={size}
						type={type}
						ingredients={ingredients}
					/>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<CartItemDetailsPrice
					price={price}
					quantity={quantity}
					onClickMinus={onClickMinus}
					onClickPlus={onClickPlus}
				/>
			</div>
			<button onClick={onClickDelete} className='absolute top-4 right-4'>
				<X size={18} />
			</button>
		</li>
	)
}
