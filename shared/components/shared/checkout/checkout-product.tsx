'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { CartItemDetailsQuantity } from '../../'
import { X } from 'lucide-react'
import { types } from '@/shared/constants/pizza'

type Props = {
	className?: string
	imageUrl: string
	name: string
	pizzaSize?: number
	pizzaType?: number
	price: number
	quantity: number
	ingredients: {
		name: string
		price: number
	}[]
	onClickMinus: () => void
	onClickPlus: () => void
	onClickDelete: () => void
	disabled: boolean
	details: string | null
}

export const CheckoutProduct = ({
	className,
	imageUrl,
	name,
	pizzaSize,
	pizzaType,
	price,
	quantity,
	ingredients,

	onClickMinus,
	onClickPlus,
	onClickDelete,
	disabled,
	details,
}: Props) => {
	return (
		<div
			className={cn(
				'flex justify-between py-5 border-b-2 border-[#f6f6f6]  items-center',
				'max-[584px]:flex-col max-[584px]:gap-4 max-[584px]:justify-none max-[584px]:items-start',
				disabled === true &&
					'opacity-40 cursor-not-allowed pointer-events-none',
				className
			)}
		>
			<div className='flex gap-5 items-center max-[584px]:gap-10 max-[482px]:gap-6'>
				<Image src={imageUrl} alt='img' width={65} height={65} />
				<div className='flex flex-col gap-1 w-[350px] max-[786px]:w-[200px]'>
					<h5 className='font-bold text-[17px]'>{name}</h5>
					<div>
						{pizzaSize && pizzaType && (
							<p className='text-[#a1a1a1] text-[14px]'>
								{pizzaSize} см, {types[pizzaType - 1].name} тесто
							</p>
						)}
						{details && <p className='text-[#a1a1a1] text-[14px]'>{details}</p>}
						{ingredients.length > 1 && (
							<p className='text-[#a1a1a1] text-[14px]'>
								+{' '}
								{ingredients
									?.map(item => item.name)
									.join(', ')
									.toLowerCase()}
							</p>
						)}
					</div>
				</div>
			</div>
			<p className='text-[16px] font-bold'>{price} ₽</p>
			<CartItemDetailsQuantity
				quantity={quantity}
				onClickMinus={onClickMinus}
				onClickPlus={onClickPlus}
			>
				<button
					type='button'
					onClick={onClickDelete}
					className='pl-1 text-[#b8b8b8] hover:text-[#505050] transition duration-300'
				>
					<X size={20} />
				</button>
			</CartItemDetailsQuantity>
		</div>
	)
}
