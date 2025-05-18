import { CartStateItem } from '@/shared/lib/get-cart-details'
import React from 'react'

type Props = {
	items: CartStateItem[]
	totalAmount: number
	totalTax: number
	promoStatus: string | boolean
	discount: number
	totalPrice: number
	goods: string
}

export const CartDrawerInfo = ({
	items,
	totalAmount,
	totalTax,
	promoStatus,
	discount,
	totalPrice,
	goods,
}: Props) => {
	return (
		<>
			<div className='pb-3 border-b-[1px] border-solid border-[#dad8d8] flex flex-col gap-1'>
				<div className='flex justify-between items-center '>
					<p className='font-bold text-[14px]'>
						{items.length} {goods}
					</p>
					<p className='font-medium text-[16px]'>{totalAmount} ₽</p>
				</div>
				<div className='flex justify-between items-center'>
					<p className='font-bold text-[14px]'>Налог 5%:</p>
					<p className='font-medium text-[16px]'>{totalTax} ₽</p>
				</div>
				<div className='flex justify-between items-center'>
					<p className='font-bold text-[14px]'>Скидка:</p>
					<p className='font-medium text-[16px]'>
						{promoStatus === 'success' ? discount : 0} %
					</p>
				</div>
			</div>
			<div className='flex justify-between items-center py-3'>
				<p className='font-bold text-[14px]'>Сумма заказа</p>
				<p className='font-medium text-[16px]'>{totalPrice} ₽</p>
			</div>
		</>
	)
}
