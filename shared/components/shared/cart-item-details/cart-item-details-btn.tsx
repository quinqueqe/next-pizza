import { Minus, Plus } from 'lucide-react'
import React from 'react'

type Props = {
	type: string
	onClick?: () => void
}

export const CartItemDetailsBtn = ({ type, onClick }: Props) => {
	return (
		<button
			className='group border-2 border-solid border-[#fe5f00] w-[30px] h-[30px] flex items-center justify-center rounded-[10px] hover:bg-primary transition duration-300'
			onClick={onClick}
		>
			{type === 'plus' ? (
				<Plus size={16} className='text-[#fe5f00] group-hover:text-white' />
			) : (
				type === 'minus' && (
					<Minus size={16} className='text-[#fe5f00] group-hover:text-white' />
				)
			)}
		</button>
	)
}
