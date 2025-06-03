'use client'

import React from 'react'
import { CartButtonMobileImg } from '@/public/assets/images/cart-button-mobile-image'
import { CartDrawer } from './cart-drawer'
import { useCart } from '@/shared/store'

export const CartButtonMobile = () => {
	const items = useCart(state => state.items)
	return (
		<>
			{items.length > 0 && (
				<CartDrawer>
					<div className='fixed bottom-4 right-4 z-2 hidden max-[915px]:block'>
						<button className='w-[60px] h-[60px] rounded-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-center flex items-center justify-center relative'>
							<p className='absolute top-0 right-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center'>
								{items.length}
							</p>
							<CartButtonMobileImg />
						</button>
					</div>
				</CartDrawer>
			)}
		</>
	)
}
