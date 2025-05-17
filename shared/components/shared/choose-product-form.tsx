'use client'

import React from 'react'
import { PizzaImage } from '../../components/shared'
import { Ingredients, Variation } from '@prisma/client'
import { Button } from '../ui'

type Props = {
	imageUrl: string
	name: string
	price: number
	desc?: string | null

	productItemId?: number | undefined
	onClickAdd: () => void

	ingredients: Ingredients[]
	className?: string
	variations?: Variation[]
}

export const ChooseProductForm = ({
	imageUrl,
	name,
	price,
	desc,
	// productItemId,
	onClickAdd,
}: Props) => {
	const totalPrice = price
	// const details = `0.4 л, 380 г` // , 380 г

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
				<div className='bg-[#F4F1EE] w-[500px] h-[610px] p-10 flex flex-col justify-between'>
					<div>
						<h4 className='font-extrabold text-[#373737] text-4xl pb-3'>
							{name}
						</h4>
						{/* <p className='text-[#373737] opacity-60 pb-3'>{details}</p> */}
						<p className='pb-6'>{desc}</p>
					</div>
					<div>
						<div>
							<Button
								onClick={onClickAdd}
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
