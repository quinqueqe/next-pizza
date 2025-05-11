import { cn } from '@/shared/lib'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

type Props = {
	type: string
	onClick?: () => void
	classNameBtn?: boolean | string
	classNameIcon?: boolean | string
}

export const CartItemDetailsBtn = ({
	type,
	onClick,
	classNameBtn,
	classNameIcon,
}: Props) => {
	return (
		<button
			className={cn(
				'group border-2 border-solid border-[#fe5f00] w-[30px] h-[30px] flex items-center justify-center rounded-[10px]  hover:bg-primary transition duration-300',
				classNameBtn
			)}
			onClick={onClick}
		>
			{type === 'plus' ? (
				<Plus size={16} className='text-[#fe5f00] group-hover:text-white' />
			) : (
				type === 'minus' && (
					<Minus
						size={16}
						className={cn(
							'text-[#fe5f00] group-hover:text-white',
							classNameIcon
						)}
					/>
				)
			)}
		</button>
	)
}
