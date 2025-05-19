import React from 'react'
import { cn } from '@/shared/lib'
import { Trash2 } from 'lucide-react'

type Props = {
	className?: string
	children?: React.ReactNode
}

export const CheckoutWhiteBlock = ({ className, children }: Props) => {
	return (
		<div
			className={cn(
				'w-[752px] rounded-4xl bg-white p-[35px] pb-3',
				// 'w-[100%] max-w-[752px]',
				className
			)}
		>
			<div className='flex justify-between items-center pb-6 border-b-2 border-[#f6f6f6] '>
				<h4 className='text-[24px] font-bold'>1. Корзина</h4>
				<button className='text-[16px] text-[#000] opacity-40 flex items-center gap-2'>
					<Trash2 size={16} />
					Очистить корзину
				</button>
			</div>
			<div>{children}</div>
		</div>
	)
}
