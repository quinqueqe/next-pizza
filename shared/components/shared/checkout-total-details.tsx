import React from 'react'

type Props = {
	icon?: React.ReactNode
	name: string
	price: number
}

export const CheckoutTotalDetails = ({ icon, name, price }: Props) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center'>
				{icon} <p className='text-[18px] pl-[14px]'>{name}</p>
			</div>
			<h4 className='text-[18px] font-bold'>{price} ₽</h4>
		</div>
	)
}
