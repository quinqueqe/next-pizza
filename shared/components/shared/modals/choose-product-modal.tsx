'use client'

import React from 'react'
import { cn } from '../../../lib'
import { useRouter } from 'next/navigation'
import { VariantsProduct } from '../'
import { IProduct } from '@/@types/prisma'
import { useMedia } from 'react-use'
import {
	Dialog,
	DialogContent,
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from '../../ui'
import { useModal } from '@/shared/store'

type Props = {
	className?: string
	product: IProduct
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	const isMobile = useMedia('(max-width: 1100px)')
	const { openDrawer, setOpenDrawer } = useModal()

	React.useEffect(() => {
		setOpenDrawer(Boolean(product))
	}, [product])

	const handleOpenChange = (open: boolean) => {
		setOpenDrawer(open)
		if (!open) {
			router.back()
		}
	}

	const content = (
		<VariantsProduct
			rightBlockClassName={cn(
				product.whProduct === 2 ? 'w-[500px] max-[535px]:w-full' : ''
			)}
			product={product}
			onCloseModal={() => router.back()}
		/>
	)
	return (
		<>
			{isMobile ? (
				<Drawer open={openDrawer} onOpenChange={handleOpenChange}>
					<DrawerTrigger asChild></DrawerTrigger>
					<DrawerContent
						className={cn(
							// 'h-full rounded-none',
							'p-0 h-full min-h-full bg-white overflow-hidden rounded-none w-full',
							className
						)}
					>
						{content}
					</DrawerContent>
				</Drawer>
			) : (
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
						{content}
					</DialogContent>
				</Dialog>
			)}
		</>
	)
}
