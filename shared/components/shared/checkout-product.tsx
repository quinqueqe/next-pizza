import React from 'react'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { CartItemDetailsQuantity } from './cart-item-details'
import { X } from 'lucide-react'

type Props = {
	className?: string
}

export const CheckoutProduct = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex justify-between items-center py-7 border-b-2 border-[#f6f6f6]',
				className
			)}
		>
			<Image
				src={'/assets/images/pizza-test.png'}
				alt='img'
				width={65}
				height={65}
			/>
			<div className='flex flex-col gap-1'>
				<h5 className='font-bold text-[16px]'>Чизбургер-пицца</h5>
				<p className='text-[#a1a1a1]'>Средняя 30 см, традиционное тесто</p>
			</div>
			<p className='text-[16px] font-bold'>965 ₽</p>
			<CartItemDetailsQuantity quantity={1}>
				<button className='pl-1 text-[#b8b8b8] hover:text-[#505050] transition duration-300'>
					<X size={20} />
				</button>
			</CartItemDetailsQuantity>
		</div>
	)
}
