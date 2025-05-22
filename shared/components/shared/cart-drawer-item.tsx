import React from 'react'
import {
	CartItemDelete,
	CartItemDetailsImage,
	CartItemDetailsInfo,
	CartItemDetailsPrice,
} from './cart-item-details'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { cn } from '@/shared/lib'

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
	disabled: boolean
	details?: string | null
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
	disabled,
}: Props) => {
	return (
		<li
			className={cn(
				'p-4 flex flex-col gap-4 bg-white relative',
				disabled === true && 'opacity-40 cursor-not-allowed pointer-events-none'
			)}
		>
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
			<CartItemDelete onClickDelete={onClickDelete} />
		</li>
	)
}
