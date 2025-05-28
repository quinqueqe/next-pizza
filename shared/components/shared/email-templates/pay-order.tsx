import { CartItemDTO } from '@/shared/services/dto/cart.dto'
import React from 'react'

interface Props {
	paymentUrl: string
	items: CartItemDTO[]
	fullName: string
	totalAmount: number
	totalPrice: number
	deliveryPrice: number
	discount: number
	promoCheckout: string
}

export const PayOrderTemplate = ({
	paymentUrl,
	items,
	fullName,
	totalAmount,
	totalPrice,
	deliveryPrice,
	discount,
	promoCheckout,
}: Props) => (
	<div>
		<h3>Здравствуйте, {fullName}!</h3>
		<p>
			Благодарим вас за оформление заказа на сумму {totalPrice} ₽ +{' '}
			{deliveryPrice} ₽ = {totalAmount} ₽
		</p>
		{discount > 0 ? (
			<>
				<p>
					Применен промокод: {promoCheckout} (-{discount}%)
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
