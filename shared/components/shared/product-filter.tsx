'use client'

import React from 'react'
import { cn } from '../../lib/utils'

type Props = {
	className?: string
	disabledSize?: number
	disabledType?: number
	active: {
		activeSize: number
		activeType: number
	}
	onClick: {
		setActiveSize: (i: number) => void
		setActiveType: (i: number) => void
	}
	sizes: {
		size: string
		value: string
	}[]
	types: string[]
}

export const ProductFilter = ({
	className,
	disabledSize,
	disabledType,
	active,
	onClick,
	sizes,
	types,
}: Props) => {
	return (
		<div className={cn('flex flex-col gap-1 mb-5', className)}>
			<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[438px] h-[42px] flex'>
				{sizes.map((size, i) => (
					<div key={i} className='p-1'>
						<button
							className={cn(
								'text-[#000] text-center py-[5px] w-[138px] rounded-4xl select-none transition-all duration-400',
								active.activeSize === i && 'bg-white',
								disabledSize === i &&
									'text-gray-500 opacity-50 pointer-events-none'
							)}
							onClick={() => onClick.setActiveSize(i)}
						>
							{size.value}
						</button>
					</div>
				))}
			</div>
			<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[430px] h-[42px] flex'>
				{types.map((type, i) => (
					<div key={i} className='p-1'>
						<button
							className={cn(
								'text-[#000] text-center py-[5px] w-[207px] rounded-4xl select-none transition-all duration-400',
								active.activeType === i && 'bg-white',
								disabledType === i &&
									'text-gray-500 opacity-50 pointer-events-none'
							)}
							onClick={() => onClick.setActiveType(i)}
						>
							{type}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
