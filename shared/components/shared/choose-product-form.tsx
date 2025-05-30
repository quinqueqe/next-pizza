'use client'

import React from 'react'
import { PizzaImage } from '../../components/shared'
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
}: Props) => {
	const totalPrice = price

	return (
		<div>
			<div className='flex justify-between items-center'>
				<div>
					<PizzaImage
						className='w-[550px] h-[500px] flex justify-center items-center'
						imageUrl={imageUrl}
						size={30}
					/>
				</div>
				<div
					className={cn(
						'bg-[#F4F1EE] h-[610px] p-10 flex flex-col justify-between',
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
						<div>
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
			</div>
		</div>
	)
}
