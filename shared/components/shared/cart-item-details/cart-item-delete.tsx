import React from 'react'
import { X } from 'lucide-react'

type Props = {
	onClickDelete?: () => void
}

export const CartItemDelete = ({ onClickDelete }: Props) => {
	return (
		<button onClick={onClickDelete} className='absolute top-4 right-4'>
			<X size={18} />
		</button>
	)
}
