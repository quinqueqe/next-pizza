'use client'

import { cn } from '../../../lib'
import { Dialog, DialogContent } from '../../ui'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm } from '../'
import { IProduct } from '@/@types/prisma'
import { useCart } from '@/shared/store'

type Props = {
	className?: string
	product: IProduct
}

export const ChooseProductModal = ({ className, product }: Props) => {
	const router = useRouter()
	const closeModal = () => {
		router.back()
	}
	const firstItem = product.variations[0]
	const isPizzaForm = Boolean(firstItem.pizzaType) // если у продукта есть pizzaType значит это пицца, если нет, то что-то другое

	const addCartItem = useCart(state => state.addCartItem)

	const onClickAddProduct = () => {
		addCartItem({
			productItemId: firstItem.id!,
		})
		closeModal()
	}
	const onClickAddPizza = (productItemId: number, ingredients: number[]) => {
		addCartItem({
			productItemId,
			ingredients,
		})
		closeModal()
	}
	return (
		<>
			<Dialog open={Boolean(product)} onOpenChange={() => closeModal()}>
				<DialogContent
					className={cn(
						'p-0 w-[1060px] min-w-[1060px] h-[610px] min-h-[610px] bg-white overflow-hidden rounded-4xl',
						className
					)}
				>
					{isPizzaForm ? (
						<ChoosePizzaForm
							onClickAdd={onClickAddPizza}
							imageUrl={product.imageUrl}
							name={product.name}
							ingredients={product.ingredients}
							price={product.price as number}
							desc={product.desc}
							variations={product.variations}
						/>
					) : (
						<ChooseProductForm
							onClickAdd={() => onClickAddProduct()}
							imageUrl={product.imageUrl}
							name={product.name}
							ingredients={product.ingredients}
							price={product.price as number}
							desc={product.desc}
							variations={product.variations}
						/>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}
