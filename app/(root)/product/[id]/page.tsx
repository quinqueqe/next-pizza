import React from 'react'
import prisma from '@/prisma/prisma'
import { VariantsProduct } from '@/shared/components/shared'
import { notFound } from 'next/navigation'
import { Container } from '../../../../shared/components/shared'

export const generateMetadata = async ({ params }: Props) => {
	const id = Number(params.id)

	const product = await prisma.product.findFirst({
		where: {
			id,
		},
	})

	const name = product?.name
	if (name) {
		if (product.whProduct === 1) {
			return {
				title: `Пицца ${name} | Next Pizza`,
			}
		}
		if (product.whProduct === 2) {
			return {
				title: `${name} | Next Pizza`,
			}
		}
	} else {
		return {
			title: `Продукт не найден | Next Pizza`,
		}
	}
}

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
		<Container>
			<div>
				<VariantsProduct
					product={product}
					rightBlockClassName='w-[700px] rounded-4xl'
				/>
			</div>
		</Container>
	)
}
