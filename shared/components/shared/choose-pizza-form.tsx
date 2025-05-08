'use client'

import { PizzaImage, ProductIngredient } from '../../components/shared'
import { Ingredients, Variation } from '@prisma/client'

type Props = {
	imageUrl: string
	name: string
	ingredients: Ingredients[]
	price: number | null
	className?: string
	desc: string | null
	variation?: Variation[]
}

export const ChoosePizzaForm = ({
	imageUrl,
	name,
	ingredients,
	price,
	desc,
	variation
}: Props) => {
	const details = '25 см, традиционное тесто 25, 380 г'
	const totalPrice = price
	return (
		<div className=''>
			<div className='flex justify-between items-center'>
				<div className='pl-20 flex items-center justify-center'>
					<PizzaImage imageUrl={imageUrl} />
				</div>
				<div className='bg-[#F4F1EE] w-[490px] h-[610px] p-10 flex flex-col justify-center'>
					<h4 className='font-extrabold text-[#373737] text-4xl pb-2'>
						{name}
					</h4>
					<p className='text-[#373737] opacity-60 pb-3'>{details}</p>
					<p className='pb-6'>{desc}</p>
					<div>
						<h5 className='text-[#000] text-[18px] font-semibold pb-4'>
							Добавить по вкусу
						</h5>

						<ul className='flex flex-wrap gap-3.5 pb-[60px]'>
							{/* {ingredients.map((ing, i) => (
								<ProductIngredient
									key={i}
									imageUrl={ing.imageUrl}
									name={ing.name}
									price={ing.price}
								/>
							))} */}
						</ul>
						<div>
							<button className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00]'>
								В корзину за {totalPrice}₽
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
