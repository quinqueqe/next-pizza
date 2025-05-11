import React from 'react'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'

export const CartItem = () => {
	return (
		<li className='p-4 flex flex-col gap-4 bg-white'>
			<div className='flex items-start gap-6 pb-3 border-b-[1px] border-solid border-[#a1a1a1]'>
				<Image
					src='/assets/images/pizza-test.png'
					alt='img'
					width={65}
					height={65}
				/>
				<div className='flex flex-col'>
					<div>
						<h4 className='pb-1 text-[16px] font-bold'>Чизбургер-пицца</h4>
						<p className='text-[#a1a1a1] text-[14px] '>
							Средняя 30 см, традиционное тесто
						</p>
						<p className='text-[#a1a1a1] text-[14px]'>
							+ моцарелла, шампиньоны
						</p>
					</div>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<p className='font-bold text-[16px]'>965 ₽ </p>
				<div className='flex gap-2 items-center'>
					<button className='border-2 border-solid border-[#fe5f00] w-[30px] h-[30px] flex items-center justify-center rounded-[10px]'>
						<Minus size={16} className='text-[#fe5f00]' />
					</button>
					<p className='font-bold text-[16px]'>2</p>
					<button className='border-2 border-solid border-[#fe5f00] w-[30px] h-[30px] flex items-center justify-center rounded-[10px]'>
						<Plus size={16} className='text-[#fe5f00]' />
					</button>
				</div>
			</div>
		</li>
	)
}
