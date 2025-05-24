import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import React from 'react'

interface Props {
	orderId: number
	totalAmount: number
	paymentUrl: string
	items: CartItemDTO[]
	fullName: string
}

export const PayOrderTemplate = ({
	orderId,
	totalAmount,
	paymentUrl,
	items,
	fullName,
}: Props) => (
	<div>
		<h3>Здравствуйте, {fullName}!</h3>
		<p>
			Благодарим вас за оформление заказа #{orderId} на сумму {totalAmount} ₽
		</p>
		<p>Ваш заказ:</p>

		<ul>
			{items.map(item => (
				<li key={item.id}>
					{item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
					{item.quantity} шт. ={' '}
					{(item.productItem.price as number) * item.quantity}
				</li>
			))}
		</ul>

		<p>
			Для оформления заказа и оплаты, пожалуйста перейдите{' '}
			<a href={paymentUrl}>по этой ссылке</a>
		</p>
		<p>Спасибо, что выбрали нас!</p>
	</div>
)
