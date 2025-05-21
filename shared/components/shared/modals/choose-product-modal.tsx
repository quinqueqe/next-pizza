'use client'

import { cn } from '../../../lib'
import { Dialog, DialogContent } from '../../ui'
import { useRouter } from 'next/navigation'
// import { useRouter, redirect } from 'next/navigation'
import { VariantsProduct } from '../'
import { IProduct } from '@/@types/prisma'
// import { useCategory } from '@/shared/store'

type Props = {
	className?: string
	product: IProduct
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	// const setAcitveId = useCategory(state => state.setAcitveId)
	// const onCloseModal = async () => {
	// 	await setAcitveId(0)
	// 	redirect('/')
	// }
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
						rightBlockClassName='w-[500px]'
						product={product}
						onCloseModal={() => router.back()}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
