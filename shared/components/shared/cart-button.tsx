'use client'

import React from 'react'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { CartDrawer } from './cart-drawer'
import { useCartFinalPrice, usePromoCodes } from '@/shared/hooks'

export const CartButton = () => {
	const { discount } = usePromoCodes()
	const { items, totalPrice } = useCartFinalPrice(discount)
	const quantityProducts = items.length
	return (
		<CartDrawer>
			<Button
				variant={'default'}
				className='group relative bg-orange-500 flex items-center'
			>
				<b>{totalPrice} ₽</b>
				<span className='h-full w-[1px] bg-white/30 mx-3' />
				<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
					<ShoppingCart size={16} className='relative' strokeWidth={2} />
					<b>{quantityProducts}</b>
				</div>
				<ArrowRight
					size={20}
					className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
				/>
			</Button>
		</CartDrawer>
	)
}
