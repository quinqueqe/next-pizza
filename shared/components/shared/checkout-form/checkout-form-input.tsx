'use client'

import React from 'react'
import { cn } from '@/shared/lib'
import { useFormContext } from 'react-hook-form'
import { CheckoutClearFormBtn } from '../..'

type Props = {
	label?: string
	name: string
	required?: boolean
	placeholder?: string
	className?: string
	valueDefault?: string
	type?: string
}

export const CheckoutFormInput = ({
	label,
	name,
	required,
	placeholder,
	className,
	valueDefault,
	type,
	...props
}: Props) => {
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
		<div className={cn('')}>
			{label && (
				<p>
					{label} {required && <span className='text-red-500'>*</span>}
				</p>
			)}

			<div className='relative'>
				<input
					value={valueDefault ? valueDefault : value}
					placeholder={placeholder}
					className={cn(
						'border-2 rounded-2xl pl-[18px] py-3 w-full',
						'focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out',
						className
					)}
					type={type}
					{...register(name)}
					{...props}
				/>
				{value && <CheckoutClearFormBtn onClick={onClickClear} />}
			</div>

			{errorText && (
				<p className='text-red-500 text-[13px] pt-1'>{errorText}</p>
			)}
		</div>
	)
}
