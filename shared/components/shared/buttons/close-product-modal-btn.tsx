import React from 'react'
import { cn } from '@/shared/lib'
import { ChevronDown } from 'lucide-react'

export const CloseProductModalBtn = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={cn(
				'absolute top-4 left-4 w-[50px] h-[50px] rounded-4xl  bg-white flex items-center justify-center',
				'hover:bg-orange-500 transition duration-300',
				'shadow-[0_0_12px_rgba(0,0,0,0.12)]',
				
				'hidden max-[1100px]:flex'
			)}
		>
			<ChevronDown width={32} height={32} />
		</button>
	)
}
