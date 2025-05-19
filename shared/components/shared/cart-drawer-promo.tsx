import { cn } from '@/shared/lib'
import React from 'react'

type Props = {
	promoStatus: string | boolean
	inputValue: string
	setInputValue: (value: string) => void
	onClickPromoBtn: () => void
}

export const CartDrawerPromo = ({
	promoStatus,
	inputValue,
	setInputValue,
	onClickPromoBtn,
}: Props) => {
	return (
		<div
			className={cn(
				'pb-2 relative',
				promoStatus === 'success' && 'cursor-not-allowed pointer-events-none'
			)}
		>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				className={cn(
					'border-b-[1px] border-solid border-[#d6d6d6] w-[100%] pb-5 text-[18px] placeholder:text-[#a1a1a1]',
					promoStatus === 'success' && 'cursor-not-allowed pointer-events-none'
				)}
				placeholder='Введите промокод'
			/>

			{promoStatus === 'error' && (
				<p className='text-[12px] text-red-700 absolute left-0 top-[45%]'>
					Промокод не найден. Попробуйте другой
				</p>
			)}
			{promoStatus === 'success' && (
				<p className='text-[12px] text-green-700 absolute left-0 top-[45%]'>
					Промокод был успешно применен
				</p>
			)}

			{inputValue.length > 0 && (
				<button
					onClick={onClickPromoBtn}
					className='absolute right-0 top-0 text-primary text-[14px]'
				>
					Применить
				</button>
			)}
		</div>
	)
}
