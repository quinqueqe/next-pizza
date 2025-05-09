'use client'

import React from 'react'
import {
	PizzaImage,
	ProductFilter,
	ProductIngredient,
} from '../../components/shared'
import { Ingredients, Variation } from '@prisma/client'
import { useSet } from 'react-use'
import { sizes, types } from '@/shared/constants/pizza'
import { useModal } from '@/shared/store'
import { Button } from '../ui'

type Props = {
	imageUrl: string
	name: string
	ingredients: Ingredients[]
	price: number | null
	className?: string
	desc?: string | null
	variation?: Variation[]
}

export const ChoosePizzaForm = ({
	imageUrl,
	name,
	ingredients,
	price,
}: // desc,
// variation,
Props) => {
	const totalPrice = price
	const { activeSize, activeType, setActiveSize, setActiveType } = useModal(
		state => state
	)
	const [selectedIds, { add, remove }] = useSet(new Set<number>())
	const details = `${sizes[activeSize].size} см, ${types[activeType]} тесто ${sizes[activeSize].size}` // , 380 г
	return (
		<div>
			<div className='flex justify-between items-center'>
				<div>
					<PizzaImage
						className='w-[550px] h-[500px] flex justify-center items-center'
						imageUrl={imageUrl}
						size={Number(sizes[activeSize].size)}
					/>
				</div>
				<div className='bg-[#F4F1EE] w-[500px] h-[610px] p-10 flex flex-col justify-center'>
					<h4 className='font-extrabold text-[#373737] text-4xl pb-2'>
						{name}
					</h4>
					<p className='text-[#373737] opacity-60 pb-3'>{details}</p>
					<ProductFilter
						active={{ activeSize, activeType }}
						onClick={{ setActiveSize, setActiveType }}
						sizes={sizes}
						types={types}
					/>
					{/* <p className='pb-6'>{desc}</p> */}
					<div>
						<h5 className='text-[#000] text-[18px] font-semibold pb-2'>
							Добавить по вкусу
						</h5>

						<ul className='grid grid-cols-3 gap-2 h-[220px] overflow-auto scroll-auto  mb-[20px]'>
							{ingredients.map((ing, i) => (
								<ProductIngredient
									key={i}
									imageUrl={ing.imageUrl}
									name={ing.name}
									price={ing.price}
									active={selectedIds.has(ing.id)}
									onClick={() => {
										if (selectedIds.has(ing.id)) {
											remove(ing.id)
										} else {
											add(ing.id)
										}
									}} // Используем add, remove вместо toggle
								/>
							))}
						</ul>
						<div>
							<Button
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
