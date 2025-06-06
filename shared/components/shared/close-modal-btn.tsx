import { cn } from '@/shared/lib'
import { X } from 'lucide-react'
import React from 'react'

type Props = {
	hasHidden?: boolean
	className?: string
	onClick?: () => void
}

export const CloseModalBtn = ({
	hasHidden = true,
	className,
	onClick,
}: Props) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={cn(
				'absolute top-[30px] -right-20 w-11 h-11 rounded-4xl  bg-white flex items-center justify-center',
				'hover:bg-orange-500 transition duration-300',
				hasHidden && 'max-[1100px]:hidden',
				className
			)}
		>
			<X />
		</button>
	)
}
