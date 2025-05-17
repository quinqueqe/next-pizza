import { usePromo } from '../store'

export const usePromoCodes = () => {
	const {
		inputValue,
		promoCodes,
		promoStatus,
		discount,
		setInputValue,
		setPromo,
		setDiscount,
		fetchGetPromoCodes,
	} = usePromo(state => state)

	const onClickPromoBtn = () => {
		const matchedPromo = promoCodes.find(
			promo => promo.name.toLowerCase() === inputValue.toLowerCase()
		)

		setInputValue('')

		if (matchedPromo) {
			setPromo('success')
			setDiscount(matchedPromo.discount)
			// console.log(matchedPromo.name)
			// console.log(matchedPromo.discount)
		} else {
			setPromo('error')
		}
	}

	return { onClickPromoBtn, promoStatus, discount, setInputValue, fetchGetPromoCodes,  inputValue}
}
