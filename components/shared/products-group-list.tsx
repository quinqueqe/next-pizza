'use client'

import React from 'react'
import { ProductCard, Product } from './product-card'
import { Title } from './title'
// import { useIntersection } from 'react-use'
// import { useCategory } from '../store'

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
}: // categoryId,
Props) => {
	// const setCategoryId = useCategory(state => state.setAcitveId)
	// const intersectionRef = React.useRef<HTMLDivElement>(null!)
	// const intersection = useIntersection(intersectionRef, {
	// 	threshold: 0.4,
	// })

	// React.useEffect(() => {
	// 	if (intersection?.isIntersecting) {
	// 		setCategoryId(categoryId)
	// 	}
	// }, [intersection?.isIntersecting, categoryId, title])
	return (
		<div className={className} id={title}>
			<Title text={title} size='xl' className='font-extrabold pb-8' />
			<div className='grid grid-cols-4 gap-[50px] pb-10'>
				{products?.map(
					(product: Product, i: number) =>
						<ProductCard {...product} key={i} />
				)}
			</div>
		</div>
	)
}
