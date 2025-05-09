'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import { CircleCheck } from 'lucide-react'

type Props = {
	className?: string
	key: number
	imageUrl: string
	name: string
	price: number
	active?: boolean
	onClick: () => void
}

export const ProductIngredient = ({
	className,
	key,
	imageUrl,
	name,
	price,
	active,
	onClick,
}: Props) => {
	return (
		<li
			key={key}
			className={cn(
				'p-2.5 rounded-2xl bg-[#fff] flex items-center justify-between flex-col w-100% max-w-[150px] border-2 border-solid border-white cursor-pointer relative',
				active && 'border-primary',
				className
			)}
			onClick={onClick}
		>
			{active && (
				<CircleCheck className="absolute top-2 right-2 text-primary" />
			)}
			<div>
				<Image
					src={imageUrl}
					alt='img'
					width={110}
					height={110}
					className='mb-1.5'
				/>
				<h4 className='text-center pb-2'>{name}</h4>
			</div>
			<p className='font-semibold'>{price} ₽</p>
		</li>
	)
}
