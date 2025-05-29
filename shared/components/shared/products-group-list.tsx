'use client'

import React from 'react'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useCategory } from '../../store'
import { Product } from '@prisma/client'

type Props = {
	products: Product[]
	title: string
	className: string
	categoryId: number
}

export const ProductsGroupList = ({
	products,
	title,
	className,
	categoryId,
}: Props) => {
	const setCategoryId = useCategory(state => state.setAcitveId)
	const intersectionRef = React.useRef<HTMLDivElement>(null!)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setCategoryId(categoryId - 1)
		}
	}, [intersection?.isIntersecting, categoryId, title])
	return (
		<div className={className} id={title} ref={intersectionRef}>
			<h2 className='font-extrabold pb-8 text-[36px]'>{title}</h2>
			<div className='grid grid-cols-4 gap-[50px] pb-10'>
				{products?.map((product: Product, i: number) => (
					<ProductCard
						product={product}
						id={product.id}
						imageUrl={product.imageUrl}
						name={product.name}
						desc={product.desc}
						price={product.price}
						key={i}
					/>
				))}
			</div>
		</div>
	)
}
