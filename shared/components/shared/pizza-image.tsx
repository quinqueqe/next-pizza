import React from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'

type Props = {
	className?: string
	size: number
	imageUrl: string
}

export const PizzaImage = ({ className, imageUrl, size }: Props) => {
	return (
		<div
			className={cn(
				// 'rounded-3xl',
				className
			)}
		>
			<Image
				src={imageUrl}
				alt='img'
				width={size === 25 ? 300 : size === 30 ? 400 : size === 35 ? 500 : 500}
				height={size === 25 ? 300 : size === 30 ? 400 : size === 35 ? 500 : 500}
				className={cn('relative left-2 top-2 transition-all z-10 duration-300 pl-6')}
			/>
			{/* <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' /> */}
		</div>
	)
}
