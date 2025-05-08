import { ChooseProductModal } from '@/components/shared'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: {
		id: string
	}
}

const Modal = async ({ params: { id } }: Props) => {
	const product = await prisma?.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			ingredients: true, // включил в product все его ингредиенты
			variantions: true, // включил в product все его вариации
		},
	})

	if (!product) {
		return notFound()
	}
	return (
		<div>
			<ChooseProductModal product={product}/>
		</div>
	)
}

export default Modal
