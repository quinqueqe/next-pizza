'use client'

import React from 'react'
import Link from 'next/link'
import {
	CartDrawerEmpty,
	CheckoutProduct,
	CheckoutProductSkeleton,
	CheckoutWhiteBlock,
	Button,
} from '@/shared/components'
import { useCartInfo, usePromoCodes } from '@/shared/hooks'
import { cn } from '@/shared/lib'

export const CheckoutCartForm = () => {
	const discount = usePromoCodes().discount
	const { status, items, updateItemQuantity, deleteItemCart, disabled } =
		useCartInfo(discount)

	const onClickCountBtn = (id: number, quantity: number) => {
		updateItemQuantity(id, quantity)
	}

	const productSkeleton = Array(items.length)
		.fill(0)
		.map((_, i) => <CheckoutProductSkeleton key={i} />)

	return (
		<>
			<CheckoutWhiteBlock
				title='Корзина'
				// hasClearCartBtn={true}
				className={cn(
					status === 'loading' ? 'opacity-40 pointer-events-none' : '',
					items.length === 0 && 'h-[full]'
				)}
			>
				{status === 'success' ? (
					items.map(item => (
						<CheckoutProduct
							key={item.id}
							imageUrl={item.imageUrl}
							name={item.name}
							pizzaSize={item.pizzaSize as number}
							pizzaType={item.pizzaType as number}
							price={item.price}
							quantity={item.quantity}
							ingredients={item.ingredients}
							onClickMinus={() => onClickCountBtn(item.id, item.quantity - 1)}
							onClickPlus={() => onClickCountBtn(item.id, item.quantity + 1)}
							onClickDelete={() => deleteItemCart(item.id)}
							disabled={disabled}
							details={item.details}
						/>
					))
				) : (
					<div className='max-[786px]:hidden'>{productSkeleton}</div>
				)}
				{items.length === 0 && (
					<div className='py-[35px] flex flex-col justify-center items-center'>
						<CartDrawerEmpty className='pb-3' />
						<Link href='/'>
							<Button
								onClick={() =>
									(document.cookie =
										'cartToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
								}
								type='button'
								variant={'outline'}
								className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[390px]'
							>
								Вернуться на главную страницу
							</Button>
						</Link>
					</div>
				)}
			</CheckoutWhiteBlock>
		</>
	)
}
