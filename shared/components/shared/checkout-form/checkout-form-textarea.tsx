'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from '../../ui/textarea'
import { cn } from '@/shared/lib'
import { CheckoutClearFormBtn } from '../..'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	name: string
	label?: string
	required?: boolean
}

export const CheckoutFormTextarea: React.FC<Props> = ({
	className,
	name,
	label,
	required,
	...props
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClickClear = () => {
		setValue(name, '')
	}

	return (
		<div className={className}>
			<p className='font-medium mb-2'>
				{label} {required && <span className='text-red-500'>*</span>}
			</p>

			<div className='relative'>
				<Textarea
					className={cn('h-12 text-md', 'rounded-2xl h-[100px] pt-3 pl-4')}
					{...register(name)}
					{...props}
				/>

				{value && <CheckoutClearFormBtn onClick={onClickClear} />}
			</div>

			{errorText && <p className='text-red-500 text-sm mt-2'>{errorText}</p>}
		</div>
	)
}
