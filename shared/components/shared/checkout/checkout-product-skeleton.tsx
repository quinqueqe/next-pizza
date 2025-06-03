import React from 'react'
import { Skeleton } from '../../ui'
import { cn } from '@/shared/lib'

export const CheckoutProductSkeleton = () => {
	return (
		<div
			className={cn(
				'flex justify-between py-5 border-b-2 border-[#f6f6f6] items-center'
			)}
		>
			{/* Image placeholder */}
			<Skeleton className='h-[65px] w-[65px] rounded-4xl' />

			{/* Details section */}
			<div className='flex flex-col gap-1 w-[350px] rounded-[10px] max-[786px]:w-[200px]'>
				{/* Title placeholder */}
				<Skeleton className='h-[21px] w-[110px] rounded-[10px]' />

				{/* Description placeholders */}
				<div className='space-y-1 mt-1'>
					<Skeleton className='h-[40px] w-[300px] rounded-[10px]' />
				</div>
			</div>

			{/* Price placeholder */}
			<Skeleton className='h-[24px] w-[60px] rounded-[10px]' />

			{/* Quantity controls placeholder */}
			<Skeleton className='h-[36px] w-[120px] rounded-full' />
		</div>
	)
}
