import React from 'react'
import { cn } from '@/shared/lib'
import { ChevronLeft } from 'lucide-react'

type Props = {
	onClick?: () => void
}

export const CloseProfileModalBtn = ({ onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={cn(
				'w-[45px] h-[45px] bg-white hidden items-center justify-center',
				'hover:bg-orange-500 transition duration-300',
				'max-[820px]:flex',
				'shadow-[0_0_12px_rgba(0,0,0,0.12)]'
			)}
		>
			<ChevronLeft />
		</button>
	)
}
