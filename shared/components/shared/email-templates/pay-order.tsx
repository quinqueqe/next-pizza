import React from 'react'

interface Props {
	orderId: number
	totalAmount: number
	paymentUrl: string
	product: string[]
	fullName: string
}

export const PayOrderTemplate = ({
	orderId,
	totalAmount,
	paymentUrl,
	product,
	fullName,
}: Props) => (
	// <div>
	// 	<h1>Заказ #{orderId}</h1>

	// 	<p>
	// 		Оплатите заказ на сумму <b>{totalAmount} ₽</b>. Перейдите{' '}
	// 		<a href={paymentUrl}>по этой ссылке</a> для оплаты заказа.
	// 	</p>
	// </div>

	<div>
		<h3>Здравствуйте, {fullName}!</h3>
		<p>
			Благодарим вас за оформление заказа #{orderId} на сумму {totalAmount} ₽
		</p>
		<p>Ваш заказ: {product.join(', ')}</p>

		<p>
			Для оформления заказа и оплаты, пожалуйста перейдите
			<a href={paymentUrl}>по этой ссылке</a>
		</p>
		<p>Спасибо, что выбрали нас!</p>
	</div>
)
