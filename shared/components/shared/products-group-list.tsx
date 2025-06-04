'use client'

import React from 'react'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useCategory } from '../../store'
import { Product } from '@prisma/client'
import { cn } from '@/shared/lib'

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
	const setCategoryId = useCategory(state => state.setActiveId)
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
			<h2 className='font-extrabold pb-8 text-[36px] max-[765px]:text-[30px] max-[765px]:pb-6'>
				{title}
			</h2>
			<div
				className={cn(
					'grid grid-cols-4 pb-10',
					'gap-[50px] max-[1250px]:gap-[40px] max-[765px]:gap-[30px] ',
					'max-[1250px]:grid-cols-3 ',
					'max-[1000px]:grid-cols-2 max-[1000px]:pb-3',
					'max-[600px]:grid-cols-1 max-[600px]:pb-6'
				)}
			>
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
