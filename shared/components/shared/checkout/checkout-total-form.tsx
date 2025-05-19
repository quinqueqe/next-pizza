'use client'

import React from 'react'
import { cn } from '@/shared/lib'
import { Button } from '../../ui'
import { CheckoutTotalDetails } from '../checkout-total-details'
import { Package, Percent, Truck } from 'lucide-react'
import { CartDrawerPromo } from '../cart-drawer-promo'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'

export const CheckoutTotalForm = () => {
	const {
		onClickPromoBtn,
		promoStatus,
		discount,
		setInputValue,
		inputValue,
		iHavePromo,
		promoCheckout,
		setIHavePromo,
	} = usePromoCodes()

	const { totalAmount, totalTax, deliveryPrice, fullPriceWithDelivery } =
		useCartInfo(discount)

	return (
		<div
			className={cn(
				'w-[450px] rounded-4xl bg-white p-[40px] sticky top-4 z-10'
				// 'w-[100%] max-w-[752px]'
			)}
		>
			<div className='flex flex-col gap-[15px] pb-[20px]'>
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
					price={deliveryPrice}
				/>
			</div>

			{/* // promo-start-------------------------------------------- */}
			{iHavePromo === true && (
				<button
					onClick={() => setIHavePromo(false)}
					className='text-[18px] text-[#777]'
				>
					У меня есть промокод
				</button>
			)}
			{iHavePromo === false && promoCheckout.length === 0 && (
				<div className='pt-4'>
					<CartDrawerPromo
						promoStatus={promoStatus}
						inputValue={inputValue}
						setInputValue={setInputValue}
						onClickPromoBtn={onClickPromoBtn}
					/>
				</div>
			)}
			{promoCheckout.length > 0 && (
				<div className='flex justify-between items-center pt-2'>
					<p className='text-[18px]'>Ваш промокод:</p>
					<p className='text-[18px] font-bold'>
						{/* {promo.charAt(0).toUpperCase() + promo.slice(1).toLowerCase()}{' '} */}
						{`${promoCheckout} (-${discount}%)`}
					</p>
				</div>
			)}
			<div className='flex justify-between items-center pt-4 pb-5 border-b-[1px] border-solid border-[#a1a1a1]'>
				<p className='text-[22px] font-bold pb-1'>Итого:</p>
				<h4 className='text-[24px] font-extrabold '>
					{fullPriceWithDelivery} ₽
				</h4>
			</div>
			{/* // promo-end------------------------------------------- */}

			<div className='pt-7'>
				<Button
					variant={'outline'}
					className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
				>
					Перейти к оплате
				</Button>
			</div>
		</div>
	)
}
