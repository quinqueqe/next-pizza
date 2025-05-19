import React from 'react'
import { cn } from '@/shared/lib'
import { Button } from '../../ui'
import { CheckoutTotalDetails } from '../checkout-total-details'
import { Package, Percent, Truck } from 'lucide-react'

type Props = {
	totalPrice: number
	totalAmount: number
	totalTax: number
}

export const CheckoutTotalForm = ({
	totalPrice,
	totalAmount,
	totalTax,
}: Props) => {
	return (
		<div
			className={cn(
				'w-[450px] rounded-4xl bg-white p-[40px] sticky top-4 z-10'
				// 'w-[100%] max-w-[752px]'
			)}
		>
			<p className='text-[22px] pb-1'>Итого:</p>
			<h4 className='text-[34px] font-extrabold pb-7 border-b-2 border-[#f3f3f3]'>
				{totalPrice} ₽
			</h4>
			<div className='flex flex-col gap-[15px] py-[30px] border-b-2 border-[#f3f3f3]'>
				<CheckoutTotalDetails
					icon={<Package className='text-[#B9B9B9]' />}
					name='Стоимость товаров:'
					price={totalAmount}
				/>
				<CheckoutTotalDetails
					icon={<Percent className='text-[#B9B9B9]' />}
					name='Налоги:'
					price={totalTax}
				/>
				<CheckoutTotalDetails
					icon={<Truck className='text-[#B9B9B9]' />}
					name='Доставка:'
					price={120}
				/>
			</div>
			<div className='pt-4 pb-[30px]'>
				<p className='text-[18px] text-[#777]'>Промокод</p>
			</div>
			<Button
				variant={'outline'}
				className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
			>
				Перейти к оплате
			</Button>
		</div>
	)
}
