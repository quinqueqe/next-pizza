'use client'

import { cn } from '@/lib/utils'
import { Dialog, DialogContent } from '../../ui'
import { useRouter } from 'next/navigation'
import { Product } from '@prisma/client'

type Props = {
	className?: string
	product: Product
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	const closeModal = () => {
		router.back()
	}
	return (
		<>
			<Dialog open={Boolean(product)} onOpenChange={() => closeModal()}>
				<DialogContent
					className={cn(
						'p-0 w-[1060px] min-w-[1060px] h-[610px] min-h-[610px] bg-white overflow-hidden',
						className
					)}
				>
					{product?.name}
				</DialogContent>
			</Dialog>
		</>
	)
}
