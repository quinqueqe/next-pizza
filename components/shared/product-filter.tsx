'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
	active?: number
	disabledSize?: number
	disabledType?: number
}

export const ProductFilter = ({
	className,
	disabledSize,
	disabledType,
}: Props) => {
	const sizes = ['25', '30', '35']
	const types = ['традиционное', 'тонкое']

	const [activeSize, setActiveSize] = React.useState(0)
	const [activeType, setActiveType] = React.useState(0)
	return (
		<div className={className}>
			<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[438px] h-[42px] flex mb-5'>
				{sizes.map((size, i) => (
					<div key={i} className='p-1'>
						<button
							className={cn(
								'text-[#000] text-center py-[5px] w-[138px] rounded-4xl select-none transition-all duration-400',
								activeSize === i && 'bg-white',
								disabledSize === i &&
									'text-gray-500 opacity-50 pointer-events-none'
							)}
							onClick={() => setActiveSize(i)}
						>
							{size} см
						</button>
					</div>
				))}
			</div>
			<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[430px] h-[42px] flex mb-6'>
				{types.map((type, i) => (
					<div key={i} className='p-1'>
						<button
							className={cn(
								'text-[#000] text-center py-[5px] w-[207px] rounded-4xl select-none transition-all duration-400',
								activeType === i && 'bg-white',
								disabledType === i &&
									'text-gray-500 opacity-50 pointer-events-none'
							)}
							onClick={() => setActiveType(i)}
						>
							{type}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
