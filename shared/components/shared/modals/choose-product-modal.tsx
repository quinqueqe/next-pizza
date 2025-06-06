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
						'p-0 h-[610px] min-h-[610px] bg-white overflow-hidden rounded-4xl',
						'w-full min-w-[1060px] max-w-[1060px]',
						'max-[1100px]:w-full max-[1100px]:min-w-full max-[1100px]:max-w-full max-[1100px]:h-full max-[1100px]:min-h-full max-[1100px]:rounded-none',
						'[&>button:last-child]:hidden', // скрыл дефолтный крестик для закрытия окна
						className
					)}
				>
					<VariantsProduct
						rightBlockClassName={cn(
							product.whProduct === 2 ? 'w-[500px] max-[535px]:w-full' : ''
						)}
						product={product}
						onCloseModal={() => router.back()}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
