import React from 'react'
import {
	Container,
	ProductFilter,
	PizzaImage,
	ProductIngredient,
} from '@/shared/components/shared'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/prisma'
import Link from 'next/link'

type Props = {
	params: {
		id: string
	}
}

const ProductId = async ({ params }: Props) => {
	const product = await prisma?.product.findUnique({
		where: { id: Number(params.id) },
	}) // поиск продукта по айди

	const ingredients = await prisma.ingredients.findMany({ take: 4 })

	if (!product) {
		// если не найдется продукт, то будет редирект на страницу notFound
		return notFound()
	}
	// const activeIngredient = 0
	const details = '25 см, традиционное тесто 25, 380 г'
	const totalPrice = product.price
	return (
		<Container className='flex flex-col pt-10'>
			<div className='pb-10 flex gap-1.5'>
				<Link href='/' className='text-[#373737]'>
					Главная
				</Link>
				<span className='text-[#e0e0e0]'>/</span>
				<Link href='/#Пиццы' className='text-[#373737]'>
					Пиццы
				</Link>
				<span className='text-[#e0e0e0]'>/</span>
				<p className='text-gray-600 opacity-60'>{product.name}</p>
			</div>
			<div className='flex gap-10 items-center'>
				<div>
					<PizzaImage imageUrl={product.imageUrl} />
				</div>
				<div>
					<h4 className='font-extrabold text-[#373737] text-4xl pb-3.5'>
						{product.name}
					</h4>
					<p className='text-[#373737] opacity-60 pb-6'>{details}</p>
					<ProductFilter disabledType={1} />
					<div>
						<h5 className='text-[#000] text-[18px] font-semibold pb-4'>
							Добавить по вкусу
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
								В корзину за {totalPrice}₽
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default ProductId
