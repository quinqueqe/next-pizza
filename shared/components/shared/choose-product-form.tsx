'use client'

import React from 'react'
import { CloseProductModalBtn, PizzaImage } from '../../components/shared'
import { Ingredients, Variation } from '@prisma/client'
import { Button } from '../ui'
import { cn } from '@/shared/lib'

type Props = {
	imageUrl: string
	name: string
	price: number
	desc?: string | null

	productItemId?: number | undefined
	onClickAdd: VoidFunction
	status: string | boolean

	ingredients: Ingredients[]
	className?: string
	variations?: Variation[]
	rightBlockClassName?: string
	details: string | null
	onCloseModal?: () => void
}

export const ChooseProductForm = ({
	imageUrl,
	name,
	price,
	desc,
	onClickAdd,
	status,
	rightBlockClassName,
	details,
	onCloseModal,
}: Props) => {
	const totalPrice = price

	return (
		<div className='flex justify-between relative items-center max-[1100px]:flex-col max-[1100px]:px-4 max-[1100px]:pt-13 max-[1100px]:overflow-auto max-[1100px]:h-[100vh] max-[1100px]:justify-center max-[1100px]:scroll-auto max-[1100px]:relative max-[1100px]:gap-[20px]'>
			<div className='max-[1100px]:bg-[rgb(255,255,255)]'>
				<PizzaImage
					className='w-[550px] h-[500px] max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1100px]:w-full max-[1100px]:h-full flex justify-center items-center'
					imageUrl={imageUrl}
					size={30}
				/>
			</div>
			<div
				className={cn(
					'bg-[#F4F1EE] h-[610px] p-10 flex flex-col justify-between',
					'max-[1100px]:p-0 bg-white max-[1100px]:justify-between gap-15 max-[1100px]:h-full',
					rightBlockClassName
				)}
			>
				<div>
					<h4 className='font-extrabold text-[#373737] text-4xl pb-3'>
						{name}
					</h4>
					<p className='text-[#373737] opacity-60 pb-3'>{details}</p>
					<p className='pb-6'>{desc}</p>
				</div>
				<div>
					<div className='max-[1100px]:pb-4 max-[1100px]:sticky max-[1100px]:bottom-0 max-[1100px]:left-0 max-[1100px]:py-3 max-[1100px]:px-4 max-[1100px]:bg-white max-[1100px]:z-8 max-[1100px]:-mx-4 max-[470px]:shadow-[0_4px_30px_rgba(6,5,50,0.1)]'>
						{' '}
						<Button
							status={status}
							onClick={() => onClickAdd()}
							variant={'outline'}
							className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00] h-[50px] w-[100%]'
						>
							В корзину за {totalPrice}₽
						</Button>
					</div>
				</div>
			</div>
			<CloseProductModalBtn onClick={onCloseModal} />
		</div>
	)
}
