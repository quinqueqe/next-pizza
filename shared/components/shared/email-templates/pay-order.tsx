import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import { Order } from '@prisma/client'
import React from 'react'

interface Props {
	paymentUrl: string
	items: CartItemDTO[]
	order: Order
}

export const PayOrderTemplate = ({
	paymentUrl,
	items,
	order,
}: Props) => (
	<div style={{color: '#333'}}>
		{order.discount !== null && order.discount > 0 ? (
			<>
				<h3>Здравствуйте, {order.fullName}!</h3>
				<p>
					Благодарим вас за оформление заказа на сумму {order.totalPrice} ₽ +{' '}
					{order.deliveryPrice} ₽ = {order.totalAmount} ₽
				</p>
				<p>
					Применен промокод: {order.promo} (-{order.discount}%)
				</p>

				<p>Ваш заказ:</p>

				{items.map(item => (
					<li key={item.id}>
						{item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
						{item.quantity} шт ={' '}
						{(item.productItem.price as number) * item.quantity} ₽
					</li>
				))}

				<p>
					Для оформления заказа и оплаты, пожалуйста перейдите{' '}
					<a href={paymentUrl}>по этой ссылке</a>
				</p>
				<p>Спасибо, что выбрали нас!</p>
			</>
		) : (
			<div>
				<h3>Здравствуйте, {order.fullName}!</h3>
				<p>
					Благодарим вас за оформление заказа на сумму {order.totalPrice} ₽ +{' '}
					{order.deliveryPrice} ₽ = {order.totalAmount} ₽
				</p>
				<p>Ваш заказ:</p>

				{items.map(item => (
					<li key={item.id}>
						{item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
						{item.quantity} шт ={' '}
						{(item.productItem.price as number) * item.quantity} ₽
					</li>
				))}

				<p>
					Для оформления заказа и оплаты, пожалуйста перейдите{' '}
					<a href={paymentUrl}>по этой ссылке</a>
				</p>
				<p>Спасибо, что выбрали нас!</p>
			</div>
		)}
	</div>
)
