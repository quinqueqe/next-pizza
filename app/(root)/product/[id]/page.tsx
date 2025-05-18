import React from 'react'
import prisma from '@/prisma/prisma'
import { VariantsProduct } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

type Props = {
	params: {
		id: string
	}
}

export default async function ProductId({ params }: Props) {
	const id = Number(params.id)
	const product = await prisma?.product.findFirst({
		where: {
			id,
		},
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							variations: true,
						},
					},
				},
			},
			variations: true,
		},
	})

	if (!product) return notFound()
	return (
		<div className='flex justify-center items-center py-10'>
			<VariantsProduct product={product} />
		</div>
	)
}
