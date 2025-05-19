import { cn } from '@/shared/lib'
import React from 'react'

type Props = {
	label: string
	placeholder: string
	type?: string
}

export const CheckoutInputBlock = ({
	label,
	placeholder,
	type = 'text',
}: Props) => {
	return (
		<div>
			<p className='font-bold text-[14px] pb-1'>{label}</p>
			<input
				type={type}
				name={label}
				placeholder={placeholder}
				className={cn(
					'border-2 rounded-2xl pl-[18px] py-3 w-full',
					'focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out'
				)}
			/>
		</div>
	)
}
