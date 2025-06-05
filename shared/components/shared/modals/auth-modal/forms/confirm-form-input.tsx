'use client';

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/shared/lib'
import { useAuth } from '@/shared/store'

type Props = {
	valueDefault?: string
	name: string
	nextRef?: React.RefObject<HTMLInputElement | null>
	prevRef?: React.RefObject<HTMLInputElement | null>
	className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const ConfirmFormInput = React.forwardRef<HTMLInputElement, Props>(
	({ valueDefault, name, nextRef, prevRef, className, ...props }, ref) => {
		const { register, setValue, watch } = useFormContext()
		const value = watch(name) ?? ''

		const { setErrorConfirmEmail } = useAuth()

		const {
			ref: registerRef,
			onChange: registerOnChange,
			...restRegister
		} = register(name)

		const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value
			if (!/^\d?$/.test(val)) return // разрешаем только цифру или пустоту

			setValue(name, val)
			setErrorConfirmEmail(false)

			if (val && nextRef?.current) {
				nextRef.current.focus()
			}

			registerOnChange(e)
		}

		const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Backspace' && !value && prevRef?.current) {
				e.preventDefault() // предотвращаем удаление, тк поле пустое
				prevRef.current.focus()
				// Можно очистить предыдущий input, если нужно:
				// setValue(prevName, '') — тогда нужно передавать имя prev input
			}
		}

		const combinedRef = (element: HTMLInputElement | null) => {
			registerRef(element)
			if (typeof ref === 'function') {
				ref(element)
			} else if (ref) {
				;(ref as React.MutableRefObject<HTMLInputElement | null>).current =
					element
			}
		}

		return (
			<input
				{...restRegister}
				ref={combinedRef}
				value={valueDefault ?? value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				type='text'
				maxLength={1}
				className={cn(
					'w-[55px] h-[60px] text-center text-[36px] border rounded font-extrabold',
					'border-2 rounded-2xl',
					'focus-visible:border-primary focus-visible:ring-ring/50 transition duration-200 ease-in-out',
					'flex items-center justify-center text-center',
					className
				)}
				inputMode='numeric'
				autoComplete='one-time-code'
				{...props}
			/>
		)
	}
)

ConfirmFormInput.displayName = 'ConfirmFormInput'
