import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
	size?: number
}

export const ProductImage = ({ className }: Props) => {
	return (
		<div className={cn('p-9 bg-[#fff7ee] rounded-3xl w-[520px]', className)}>
			<Image
				src='/assets/images/pizza-test.png'
				alt='img'
				width={520}
				height={520}
			/>
		</div>
	)
}
