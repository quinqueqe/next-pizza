import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import { Order } from '@prisma/client'
import React from 'react'

interface Props {
	items: CartItemDTO[]
	order: Order
}

export const OrderSuccessTemplate = ({
	items,
	order,
}: Props) => (
	<div>
		{order.discount !== null && order.discount > 0 ? (
			<>
				<h3>Здравствуйте, {order.fullName}!</h3>
				<p>Благодарим вас за покупку!</p>
				<p>Ваш заказ на сумму {order.totalAmount} ₽ оплачен</p>
				<p>
					Применен промокод: {order.promo} (-{order.discount}%)
				</p>
				<p>Ваш заказ:</p>

				<ul>
					{items.map(item => (
						<li key={item.id}>
							{item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
							{item.quantity} шт ={' '}
							{(item.productItem.price as number) * item.quantity} ₽
						</li>
					))}
				</ul>
				<p>Спасибо, что выбрали нас!</p>
			</>
		) : (
			<>
				<h3>Здравствуйте, {order.fullName}!</h3>
				<p>Благодарим вас за покупку!</p>
				<p>Ваш заказ на сумму {order.totalAmount} ₽ оплачен</p>
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
				<p>Спасибо, что выбрали нас!</p>
			</>
		)}
	</div>
)
