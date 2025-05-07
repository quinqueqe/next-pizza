'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const ProductFilter = ({ className }: Props) => {
	const sizes = ['25', '30', '35']
	const types = ['традиционное', 'тонкое']

	const [activeSize, setActiveSize] = React.useState(0)
	const [activeType, setActiveType] = React.useState(0)
	return (
		<div className={className}>
			<p className='text-[#373737] opacity-60 pb-6'>
				{sizes[activeSize]} см, {types[activeType]} тесто {sizes[activeSize]},
				380 г
			</p>
			<div className='rounded-[30px] bg-[#ececec] pb-5 w-100% max-w-[438px] h-[42px] flex mb-5'>
				{sizes.map((size, i) => (
					<div key={i} className='p-1'>
						<button
							className={cn(
								'text-[#000] text-center py-[5px] w-[138px] rounded-4xl',
								activeSize === i && 'bg-white'
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
								'text-[#000] text-center py-[5px] w-[207px] rounded-4xl',
								activeType === i && 'bg-white'
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
