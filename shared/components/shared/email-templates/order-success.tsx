import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import React from 'react'

interface Props {
	orderId: number
	totalAmount: number
	fullName: string
	items: CartItemDTO[]
}

export const OrderSuccessTemplate = ({
	totalAmount,
	fullName,
	items,
}: Props) => (
	<div>
		<h3>Здравствуйте, {fullName}!</h3>
		<p>Благодарим вас за покупку!</p>
		<p>
			Ваш заказ на сумму {totalAmount} ₽ оплачен
		</p>
		<p>Список товаров:</p>

		<ul>
			{items.map(item => (
				<li key={item.id}>
					{item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
					{item.quantity} шт ={' '}
					{(item.productItem.price as number) * item.quantity} ₽
				</li>
			))}
		</ul>
	</div>
)
