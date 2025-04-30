import React from 'react'
import { ProductCard, Product } from './product-card'
import { Title } from './title'

type Props = {
	products: Product[]
	title: string
	className: string
	categoryId: number
}

export const ProductsGroupList = ({ products, title, className }: Props) => {
	return (
		<div className={className}>
			<Title text={title} size='lg' className='font-extrabold pb-5' />
			<div className='grid grid-cols-3 gap-[50px]'>
				{products.map((product, i) => (
					<ProductCard {...product} key={i} />
				))}
			</div>
		</div>
	)
}
