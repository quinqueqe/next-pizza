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
import { useCart } from '@/shared/store'

type Props = {
	children?: React.ReactNode
}

export const CartDrawer = ({ children }: Props) => {
	const fetchCartItems = useCart(state => state.fetchCartItems)
	const { items, totalAmount } = useCart(state => state)

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
								11 товаров на
								<span className='font-bold text-[22px]'> 2245 ₽ </span>
							</p>
						</SheetTitle>
					</SheetHeader>

<<<<<<< HEAD
					<ul className='flex flex-col gap-[10px]'>
						{items.map((item) => (<CartDrawerItem key={item.id}
							imageUrl={item.imageUrl}
							name={item.name}
							size={item.pizzaSize as number}
							type={item.pizzaType as number}
							ingredients={item.ingredients}
							price={item.price}
							quantity={item.quantity}
						/>))}
=======
					<ul className='flex flex-col gap-[10px] overflow-auto'>
						<CartDrawerItem
							imageUrl='http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A233x233%2F11EE7D61304FAF5A98A6958F2BB2D260.webp&w=384&q=75'
							name='Пепперони фреш'
							size={30}
							type='Трационное'
							ingredients={[
								{
									name: 'моцарелла',
								},
								{
									name: 'шампиньоны',
								},
							]}
							price={666}
							quantity={1}
						/>
						<CartDrawerItem
							imageUrl='http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.dodostatic.net%2Fimage%2Fr%3A233x233%2F11EE7D610CF7E265B7C72BE5AE757CA7.webp&w=384&q=75'
							name='Чизбургер-пицца'
							size={25}
							type='Тонкое'
							ingredients={[
								{
									name: 'краб',
								},
								{
									name: 'да',
								},
							]}
							price={555}
							quantity={33}
						/>
>>>>>>> ddbe41e855890ee9245eb41715d18640f9c3c0eb
					</ul>

					<SheetFooter className='ml-0 pl-0 mr-0 pr-0  pb-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
						<div className='p-[20px]'>
							<div className='pb-2 relative'>
								<input
									type='text'
									className='border-b-[1px] border-solid border-[#a1a1a1] w-[100%] pb-3 text-[18px] placeholder:text-[#a1a1a1]'
									placeholder='Введите промокод'
								/>

								{/* <p className='text-[12px] text-red-700 absolute left-0 top-[45%]'>
									Промокод не найден. Попробуйте другой
								</p> */}
								{/* <button className='absolute right-0 top-0 text-primary text-[14px]'>
									Применить
								</button> */}
							</div>
							<div className='pb-3 border-b-[1px] border-solid border-[#dad8d8] flex flex-col gap-1'>
								<div className='flex justify-between items-center '>
									<p className='font-bold text-[14px]'>11 товаров</p>
									<p className='font-medium text-[16px]'>2245 ₽</p>
								</div>
								<div className='flex justify-between items-center'>
									<p className='font-bold text-[14px]'>Налог 5%:</p>
									<p className='font-medium text-[16px]'>112 ₽</p>
								</div>
							</div>
							<div className='flex justify-between items-center py-3'>
								<p className='font-bold text-[14px]'>Сумма заказа</p>
								<p className='font-medium text-[16px]'>{totalAmount} ₽</p>
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
