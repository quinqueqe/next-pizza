import React from 'react'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { CartItemDetailsQuantity } from './cart-item-details'
import { X } from 'lucide-react'

type Props = {
	className?: string
	imageUrl: string
	name: string
	price: number
	quantity: number
}

export const CheckoutProduct = ({
	className,
	imageUrl,
	name,
	price,
	quantity,
}: Props) => {
	return (
		<div
			className={cn(
				'flex justify-between items-center py-7 border-b-2 border-[#f6f6f6]',
				className
			)}
		>
			<Image src={imageUrl} alt='img' width={65} height={65} />
			<div className='flex flex-col gap-1'>
				<h5 className='font-bold text-[16px]'>{name}</h5>
				<p className='text-[#a1a1a1]'>Средняя 30 см, традиционное тесто</p>
			</div>
			<p className='text-[16px] font-bold'>{price} ₽</p>
			<CartItemDetailsQuantity quantity={quantity}>
				<button className='pl-1 text-[#b8b8b8] hover:text-[#505050] transition duration-300'>
					<X size={20} />
				</button>
			</CartItemDetailsQuantity>
		</div>
	)
}
