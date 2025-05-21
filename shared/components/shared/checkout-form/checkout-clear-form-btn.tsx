import React from 'react'
import { cn } from '@/shared/lib'
import { X } from 'lucide-react'

type Props = {
	className?: string
	onClick?: () => void
}

export const CheckoutClearFormBtn = ({ className, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'pl-1 text-[#b8b8b8] hover:text-[#505050] transition duration-300, absolute top-4 right-3',
				className
			)}
		>
			<X size={20} />
		</button>
	)
}
