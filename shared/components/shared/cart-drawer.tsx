'use client'

import React from 'react'

import { ChevronRight } from 'lucide-react'
import { Button } from '../ui'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import { CartDrawerItem } from './cart-drawer-item'
import { useCart, usePromo } from '@/shared/store'

type Props = {
	children?: React.ReactNode
}

export const CartDrawer = ({ children }: Props) => {
	// states
	const fetchCartItems = useCart(state => state.fetchCartItems)
	const items = useCart(state => state.items)
	const totalAmount = useCart(state => state.totalAmount)
	const updateItemQuantity = useCart(state => state.updateItemQuantity)
	const deleteItemCart = useCart(state => state.deleteItemCart)

	// налог
	const totalTax = Math.floor(totalAmount * 0.05)
	const totalPrice = totalAmount + totalTax

	// promo
	const { inputValue, promo, setInputValue, setPromo } = usePromo(
		state => state
	)

	const onClickPromoBtn = () => {
		setInputValue('')
		// setPromo('success')
		setPromo('error')
	}

	// count
	const onClickCountBtn = (id: number, quantity: number) => {
		updateItemQuantity(id, quantity)
	}

	React.useEffect(() => {
		fetchCartItems()
		// console.log(items)
	}, [])

	return (
		<>
			<Sheet>
				<SheetTrigger>{children}</SheetTrigger>
				<SheetContent className='ml-0 pl-0 mr-0 pr-0 w-[450px ]'>
					<SheetHeader className='ml-0 pl-0 mr-0 pr-0 pt-0 mt-0 pl-4 pt-4 pb-0'>
						<SheetTitle className='flex'>
							<p className='text-[22px] font-normal'>
								{items.length} товаров на
								<span className='font-bold text-[22px]'> {totalAmount} ₽ </span>
							</p>
						</SheetTitle>
					</SheetHeader>

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
								onClickMinus={() => onClickCountBtn(item.id, item.quantity - 1)}
								onClickPlus={() => onClickCountBtn(item.id, item.quantity + 1)}
								onClickDelete={() => deleteItemCart(item.id)}
							/>
						))}
					</ul>

					<SheetFooter className='ml-0 pl-0 mr-0 pr-0  pb-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
						<div className='p-[20px]'>
							<div className='pb-2 relative'>
								<input
									type='text'
									value={inputValue}
									onChange={e => setInputValue(e.target.value)}
									className='border-b-[1px] border-solid border-[#a1a1a1] w-[100%] pb-5 text-[18px] placeholder:text-[#a1a1a1]'
									placeholder='Введите промокод'
								/>

								{promo === 'error' && (
									<p className='text-[12px] text-red-700 absolute left-0 top-[45%]'>
										Промокод не найден. Попробуйте другой
									</p>
								)}
								{promo === 'success' && (
									<p className='text-[12px] text-green-700 absolute left-0 top-[45%]'>
										Промокод был успешно применен
									</p>
								)}

								{inputValue.length > 0 && (
									<button
										onClick={() => onClickPromoBtn()}
										className='absolute right-0 top-0 text-primary text-[14px]'
									>
										Применить
									</button>
								)}
							</div>
							<div className='pb-3 border-b-[1px] border-solid border-[#dad8d8] flex flex-col gap-1'>
								<div className='flex justify-between items-center '>
									<p className='font-bold text-[14px]'>
										{items.length} товаров
									</p>
									<p className='font-medium text-[16px]'>{totalAmount} ₽</p>
								</div>
								<div className='flex justify-between items-center'>
									<p className='font-bold text-[14px]'>Налог 5%:</p>
									<p className='font-medium text-[16px]'>{totalTax} ₽</p>
								</div>
							</div>
							<div className='flex justify-between items-center py-3'>
								<p className='font-bold text-[14px]'>Сумма заказа</p>
								<p className='font-medium text-[16px]'>{totalPrice} ₽</p>
							</div>
							<Button
								type='submit'
								className='w-[100%] h-[55px] flex justify-center items-center text-[16px] rounded-4xl relative'
							>
								К оформлению заказа
								<ChevronRight className='absolute right-[10px]' />
							</Button>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}
