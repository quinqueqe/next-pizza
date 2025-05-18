'use client'

import React from 'react'

import { ChevronRight } from 'lucide-react'
import { Button } from '../ui'
import {
	CartDrawerInfo,
	CartDrawerItem,
	CartDrawerEmpty,
	CartDrawerPromo,
} from './'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import { useCartFinalPrice, usePromoCodes } from '@/shared/hooks'

type Props = {
	children?: React.ReactNode
}

export const CartDrawer = ({ children }: Props) => {
	const {
		onClickPromoBtn,
		promoStatus,
		discount,
		setInputValue,
		fetchGetPromoCodes,
		inputValue,
	} = usePromoCodes()

	React.useEffect(() => {
		fetchGetPromoCodes()
	}, [inputValue])

	const {
		// states
		fetchCartItems,
		status,
		items,
		totalAmount,
		updateItemQuantity,
		deleteItemCart,

		// price
		totalTax,
		totalPrice,
	} = useCartFinalPrice(discount)

	React.useEffect(() => {
		fetchCartItems()
	}, [])

	// count
	const onClickCountBtn = (id: number, quantity: number) => {
		updateItemQuantity(id, quantity)
	}

	return (
		<>
			<Sheet>
				<SheetTrigger className={status === 'loading' && 'pointer-events-none'}>
					{children}
				</SheetTrigger>
				{items.length > 0 ? (
					<SheetContent className='ml-0 pl-0 mr-0 pr-0 w-[450px ]'>
						<SheetHeader className='ml-0 pl-0 mr-0 pr-0 pt-0 mt-0 pl-4 pt-4 pb-0'>
							<SheetTitle className='flex'>
								<p className='text-[22px] font-normal'>
									{items.length} товаров на{' '}
									<span className='font-bold text-[22px]'>
										{totalAmount + totalTax} ₽
									</span>
								</p>
							</SheetTitle>
						</SheetHeader>

						<>
							<ul className='flex flex-col gap-[10px] overflow-auto'>
								{items.map(item => (
									<CartDrawerItem
										item={item}
										key={item.id}
										imageUrl={item.imageUrl}
										name={item.name}
										size={item.pizzaSize as number}
										type={item.pizzaType as number}
										ingredients={item.ingredients}
										price={item.price}
										quantity={item.quantity}
										onClickMinus={() =>
											onClickCountBtn(item.id, item.quantity - 1)
										}
										onClickPlus={() =>
											onClickCountBtn(item.id, item.quantity + 1)
										}
										onClickDelete={() => deleteItemCart(item.id)}
									/>
								))}
							</ul>

							<SheetFooter className='ml-0 pl-0 mr-0 pr-0  pb-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
								<div className='p-[20px]'>
									<CartDrawerPromo
										promoStatus={promoStatus}
										inputValue={inputValue}
										setInputValue={(value: string) => setInputValue(value)}
										onClickPromoBtn={() => onClickPromoBtn()}
									/>
									<CartDrawerInfo
										items={items}
										totalAmount={totalAmount}
										totalTax={totalTax}
										promoStatus={promoStatus}
										discount={discount}
										totalPrice={totalPrice}
									/>
									<Button
										type='submit'
										className='w-[100%] h-[55px] flex justify-center items-center text-[16px] rounded-4xl relative'
									>
										К оформлению заказа
										<ChevronRight className='absolute right-[10px]' />
									</Button>
								</div>
							</SheetFooter>
						</>
					</SheetContent>
				) : status === 'loading' ? (
					<SheetContent>
						<p>Загрукзо</p>
					</SheetContent>
				) : (
					<SheetContent>
						<CartDrawerEmpty />
					</SheetContent>
				)}
			</Sheet>
		</>
	)
}
