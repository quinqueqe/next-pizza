import { CartItemDetailsQuantity } from './'

type Props = {
	price: number
	quantity: number
	onClickMinus?: () => void
	onClickPlus?: () => void
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
				<CartItemDetailsQuantity
					quantity={quantity}
					onClickMinus={onClickMinus}
					onClickPlus={onClickPlus}
				/>
			</div>
		</>
	)
}
