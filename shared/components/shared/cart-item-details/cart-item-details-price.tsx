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
				<CartItemDetailsBtn type='minus' onClick={onClickMinus} />
				<p className='font-bold text-[16px]'>{quantity}</p>
				<CartItemDetailsBtn type='plus' onClick={onClickPlus} />
			</div>
		</>
	)
}
