'use client'

import toast from 'react-hot-toast'
import { ProductWithRelations } from '@/@types/prisma'
import { useCart, useModal } from '@/shared/store'
import { sizes } from '@/shared/constants/pizza'
import { ChoosePizzaForm, ChooseProductForm } from './'

type Props = {
	product: ProductWithRelations
	onCloseModal?: () => void
	rightBlockClassName?: string
}

export const VariantsProduct = ({
	product,
	onCloseModal,
	rightBlockClassName,
}: Props) => {
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
				`Добавлено: ${product.name}${
					firstItem.pizzaType ? `, ${sizes[activeSize].value} см` : ''
				} `
			)
			onCloseModal?.()
		} catch (error) {
			toast.error('Что-то пошло не так')
			console.error(error)
		}
	}

	if (isPizzaForm) {
		return (
			<ChoosePizzaForm
				rightBlockClassName={rightBlockClassName}
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				price={product.price as number}
				desc={product.desc}
				variations={product.variations}
				onClickAdd={onSubmit}
				status={status}
			/>
		)
	} else {
		return (
			<ChooseProductForm
				rightBlockClassName={rightBlockClassName}
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				price={product.price as number}
				desc={product.desc}
				variations={product.variations}
				onClickAdd={onSubmit}
				status={status}
			/>
		)
	}
}
