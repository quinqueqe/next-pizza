'use client'

import { cn } from '../../../lib'
import { Dialog, DialogContent } from '../../ui'
import { useRouter } from 'next/navigation'
import { VariantsProduct } from '../'
import { IProduct } from '@/@types/prisma'

type Props = {
	className?: string
	product: IProduct
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	return (
		<>
			<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
				<DialogContent
					className={cn(
						'p-0 w-[1060px] min-w-[1060px] h-[610px] min-h-[610px] bg-white overflow-hidden rounded-4xl',
						className
					)}
				>
					<VariantsProduct
						product={product}
						onCloseModal={() => router.back()}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
