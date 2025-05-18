'use client'

import { cn } from '../../../lib'
import { Dialog, DialogContent } from '../../ui'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm } from '../'
import { IProduct } from '@/@types/prisma'
import { useCart, useModal } from '@/shared/store'
import toast from 'react-hot-toast'
import { sizes } from '@/shared/constants/pizza'

type Props = {
	className?: string
	product: IProduct
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	const firstItem = product.variations[0]
	const isPizzaForm = Boolean(firstItem.pizzaType) // если у продукта есть pizzaType значит это пицца, если нет, то что-то другое

	const { addCartItem, status } = useCart(state => state)
	const activeSize = useModal(state => state.activeSize)

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id
			await addCartItem({
				productItemId: itemId,
				ingredients,
			})
			toast.success(
				`Добавлено: ${product.name} ${
					firstItem.pizzaType ? `, ${sizes[activeSize].value} см` : ''
				} `
			)
			router.back()
		} catch (error) {
			toast.error('Что-то пошло не так')
			console.error(error)
		}
	}
	return (
		<>
			<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
				<DialogContent
					className={cn(
						'p-0 w-[1060px] min-w-[1060px] h-[610px] min-h-[610px] bg-white overflow-hidden rounded-4xl',
						className
					)}
				>
					{isPizzaForm ? (
						<ChoosePizzaForm
							imageUrl={product.imageUrl}
							name={product.name}
							ingredients={product.ingredients}
							price={product.price as number}
							desc={product.desc}
							variations={product.variations}
							onClickAdd={onSubmit}
							status={status}
						/>
					) : (
						<ChooseProductForm
							imageUrl={product.imageUrl}
							name={product.name}
							ingredients={product.ingredients}
							price={product.price as number}
							desc={product.desc}
							variations={product.variations}
							onClickAdd={onSubmit}
							status={status}
						/>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}
