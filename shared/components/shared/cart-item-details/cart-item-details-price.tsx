import { CartItemDetailsBtn } from './cart-item-details-btn'

type Props = {
	price: number
	quantity: number
	onClickMinus: () => void
	onClickPlus: () => void
}

export const CartItemDetailsPrice = ({
	price,
	quantity,
	onClickMinus,
	onClickPlus,
}: Props) => {
	return (
		<>
			<p className='font-bold text-[16px]'>{price} ₽ </p>
			<div className='flex gap-2 items-center'>
				<CartItemDetailsBtn
					type='minus'
					onClick={onClickMinus}
					classNameBtn={quantity === 1 && 'group cursor-not-allowed border-[#d6d5d4] pointer-events-none'}
					classNameIcon={quantity === 1 && 'cursor-not-allowed text-[#d6d5d4]'}
				/>
				<p className='font-bold text-[16px]'>{quantity}</p>
				<CartItemDetailsBtn
					type='plus'
					onClick={onClickPlus}
				/>
			</div>
		</>
	)
}
