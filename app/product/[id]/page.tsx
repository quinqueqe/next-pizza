import React from 'react'
import {
	Container,
	ProductFilter,
	ProductImage,
	ProductIngredient,
} from '@/components/shared'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/prisma'

type Props = {
	params: {
		id: string
	}
}

const ProductId = async ({ params: { id } }: Props) => {
	const product = await prisma?.product.findUnique({
		where: { id: Number(id) },
	}) // поиск продукта по айди

	const ingredients = await prisma.ingredients.findMany({ take: 4 })

	if (!product) {
		// если не найдется продукт, то будет редирект на страницу notFound
		return notFound()
	}
	// const activeIngredient = 0

	return (
		<Container className='flex flex-col pt-10'>
			<div className='pb-10'>Главная / Пиццы / Пепперони фреш</div>
			<div className='flex gap-10 items-center'>
				<div>
					<ProductImage />
				</div>
				<div>
					<h4 className='font-extrabold text-[#373737] text-4xl pb-3.5'>
						{product.name}
					</h4>
					<ProductFilter />
					<div>
						<h5 className='text-[#000] text-[18px] font-semibold pb-4'>
							Ингредиенты
						</h5>

						<ul className='flex flex-wrap gap-3.5 pb-[60px]'>
							{ingredients.map((ing, i) => (
								<ProductIngredient
									key={i}
									imageUrl={ing.imageUrl}
									name={ing.name}
									price={ing.price}
								/>
							))}
						</ul>
						<div>
							<button className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00]'>
								Добавить в корзину за {product.price}₽
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default ProductId
