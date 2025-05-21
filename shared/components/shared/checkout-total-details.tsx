import React from 'react'
import { Skeleton } from '../ui'
import { cn } from '@/shared/lib'

type Props = {
	icon?: React.ReactNode
	name: string
	price: number
	status: string
	className?: string
}

export const CheckoutTotalDetails = ({
	icon,
	name,
	price,
	status,
	className,
}: Props) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center'>
				{icon} <p className='text-[18px] pl-[14px]'>{name}</p>
			</div>
			{status === 'success' ? (
				<h4 className='text-[18px] font-bold'>{price} ₽</h4>
			) : (
				<Skeleton
					className={cn('w-[50px] h-[27px] rounded-[10px]', className)}
				/>
			)}
		</div>
	)
}
