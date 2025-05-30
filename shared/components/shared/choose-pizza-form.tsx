'use client'

import { usePizzaOptions } from '@/shared/hooks'
import { Ingredients, Variation } from '@prisma/client'
import {
	PizzaImage,
	PizzaSelector,
	ProductIngredient,
} from '../../components/shared'
import { Button } from '../ui'
import { cn, getPizzaDetails } from '@/shared/lib'

type Props = {
	imageUrl: string
	name: string
	ingredients: Ingredients[]
	price: number
	className?: string
	desc?: string | null
	variations?: Variation[]
	onClickAdd: (productItemId: number, ingredients: number[]) => void
	status: string | boolean
	rightBlockClassName?: string
}

export const ChoosePizzaForm = ({
	imageUrl,
	name,
	ingredients,
	// price,
	variations,
	onClickAdd,
	status,
	rightBlockClassName,
}: Props) => {
	const {
		activeSize,
		activeType,
		setActiveSize,
		setActiveType,
		selectedIds,
		add,
		remove,
		size,
		sizes,
		types,
		productItemId,
	} = usePizzaOptions(variations!)

	const { details, totalPrice } = getPizzaDetails(
		variations!,
		ingredients,
		selectedIds,
		types,
		activeType,
		size
	)

	const handleClickAdd = () => {
		onClickAdd(productItemId, Array.from(selectedIds))
		// console.log(types[activeType].value)
		// console.log({ size, ingredients: selectedIds })
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
				<div className={cn('bg-[#F4F1EE] h-[610px] p-10 flex flex-col justify-center', rightBlockClassName)}>
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

						<ul className='grid grid-cols-3 gap-2 h-[245px] overflow-auto scroll-auto  mb-[20px]'>
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
								status={status}
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
