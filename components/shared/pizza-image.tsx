import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
	size?: number
	imageUrl: string
}

export const PizzaImage = ({ className, imageUrl }: Props) => {
	return (
		<div
			className={cn(
				'p-9  rounded-3xl ',
				'flex items-center justify-center flex-1  relative w-full',
				className
			)}
		>
			<Image src={imageUrl} alt='img' width={400} height={400} />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' />
		</div>
	)
}
