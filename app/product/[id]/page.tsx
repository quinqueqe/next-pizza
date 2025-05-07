import React from 'react'
import { Container, ProductImage, ProductIngredient } from '@/components/shared'
import { notFound } from 'next/navigation'
import prisma from '@/prisma/prisma'
import { cn } from '@/lib/utils'

type Props = {
	params: {
		id: string
	}
}

const ProductId = async ({ params: { id } }: Props) => {
	const product = await prisma?.product.findUnique({
		where: { id: Number(id) },
	}) // поиск продукта по айди

	if (!product) {
		// если не найдется продукт, то будет редирект на страницу notFound
		return notFound()
	}

	const sizes = ['25', '30', '35']
	const types = ['Традиционное', 'Тонкое']
	const activeSize = 0
	const activeType = 0
	const activeIngredient = 0
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
					<p className='text-[#373737] opacity-60 pb-6'>
						25 см, традиционное тесто 25, 380 г
					</p>
					<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[420px] h-[43px] flex mb-5'>
						{sizes.map((size, i) => (
							<div key={i} className='p-1'>
								<button
									className={cn(
										'text-[#000] text-center py-[6px] w-[138px] rounded-4xl',
										activeSize === i && 'bg-white'
									)}
								>
									{size} см
								</button>
							</div>
						))}
					</div>
					<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[420px] h-[43px] flex mb-6'>
						{types.map((type, i) => (
							<div key={i} className='p-1'>
								<button
									className={cn(
										'text-[#000] text-center py-[6px] w-[207px] rounded-4xl',
										activeType === i && 'bg-white'
									)}
								>
									{type}
								</button>
							</div>
						))}
					</div>
					<div>
						<h5 className='text-[#000] text-[18px] font-semibold pb-4'>
							Ингредиенты
						</h5>

						<ul className='flex gap-3.5 pb-[60px]'>
							<ProductIngredient/>
							<ProductIngredient />
							<ProductIngredient />
							<ProductIngredient />
						</ul>
						<div>
							<button className='font-bold text-center text-[16px] py-[16px] px-[35px] text-white rounded-[18px] bg-[#fe5f00]'>
								Добавить в корзину за 799₽
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
export default ProductId
