'use client'

import { cn } from '@/shared/lib'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

type Props = {
	onChange?: (data: string) => void
	className?: string
	label?: string
	required?: boolean
	placeholder: string
}

export const CheckoutAddressInput = ({
	onChange,
	className,
	placeholder,
	label,
	required,
}: Props) => {
	return (
		<div>
			{label && (
				<p>
					{label} {required && <span className='text-red-500'>*</span>}
				</p>
			)}
			<AddressSuggestions
				token='50bf9d2a6e1447a3e595942b898aeb89b384f6ff'
				onChange={data => onChange?.(data?.value as string)}
				inputProps={{
					className: cn(
						'border-2 rounded-2xl pl-[18px] py-3 w-full',
						'focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out',
						className
					),
					placeholder: placeholder,
				}}
			/>
		</div>
	)
}
