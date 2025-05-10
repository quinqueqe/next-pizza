'use client'

import React from 'react'
import {
	PizzaImage,
	PizzaSelector,
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
	price: number
	className?: string
	desc?: string | null
	variations?: Variation[]
}

export const ChoosePizzaForm = ({
	imageUrl,
	name,
	ingredients,
	price,
	variations,
}: Props) => {
	// states------------------------------------------------------------------
	const { activeSize, activeType, setActiveSize, setActiveType } = useModal(
		state => state
	)
	const [selectedIds, { add, remove }] = useSet(new Set<number>())
	//--------------------------------------------------------------------------

	// consts-------------------------------------------------------------------
	const size = sizes[activeSize].value
	const detailsType = types[activeType - 1].name
	const details = `${size} см, ${detailsType} тесто ${size}` // , 380 г
	// -------------------------------------------------------------------------

	// фильтр смены цены при ререндере size or type------------------------
	const pizzaPrice =
		variations?.find(
			item => item.pizzaType === activeType + 1 && item.size === size
		)?.price ?? price
	const ingredientsPrice = ingredients
		.filter(ing => selectedIds.has(ing.id))
		.reduce((acc, ing) => acc + ing.price, 0)

	const totalPrice = pizzaPrice + ingredientsPrice

	// Фильтр вариаций на каждый тип----------------------------
	const pizzaVariations = variations?.filter(
		item => item.pizzaType === types[activeType - 1].value
	)

	console.log(pizzaVariations)
	//-----------------------------------------------------------

	const handleClickAdd = () => {
		console.log(types[activeType].value)
		console.log({ size, ingredients: selectedIds })
	}
	return (
		<div>
			<div className='flex justify-between items-center'>
				<div>
					<PizzaImage
						className='w-[550px] h-[500px] flex justify-center items-center'
						imageUrl={imageUrl}
						size={size}
					/>
				</div>
				<div className='bg-[#F4F1EE] w-[500px] h-[610px] p-10 flex flex-col justify-center'>
					<div>
						<h4 className='font-extrabold text-[#373737] text-4xl pb-2'>
							{name}
						</h4>
						<p className='text-[#373737] opacity-60 pb-3'>{details}</p>
						<div className='flex flex-col gap-1 mb-5'>
							<PizzaSelector
								pizzaSizes={sizes}
								pizzaTypes={types}
								setActiveSize={setActiveSize}
								setActiveType={setActiveType}
								activeSize={activeSize}
								activeType={activeType}
							/>
						</div>
					</div>
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
								onClick={() => handleClickAdd()}
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
