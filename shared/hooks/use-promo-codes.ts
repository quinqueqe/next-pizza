import React from 'react'
import { usePromo } from '../store'

/**
 * Хук, который позволяет получать список промокодов, и если пользователь
 * вводит промокод, то хук проверяет, является ли он корректным, и если
 * является, то хук изменяет состояние на "success" и устанавливает скидку
 * на сумму, которую указана в промокоде.
 *
 * @param {void}
 * @returns {Object} Объект, который содержит следующие поля:
 *  - onClickPromoBtn - функция, которая вызывается, когда пользователь
 *    вводит промокод и нажимает на кнопку "Применить";
 *  - promoStatus - строка, которая может иметь следующие значения: "waiting",
 *    "success" или "error";
 *  - discount - скидка, если промокод является корректным;
 *  - setInputValue - функция, которая изменяет значение поля ввода;
 *  - fetchGetPromoCodes - функция, которая загружает список промокодов;
 *  - inputValue - значение поля ввода;
 */
export const usePromoCodes = () => {
	const {
		inputValue,
		promoCodes,
		promoStatus,
		discount,
		iHavePromo,
		promoCheckout,
		setInputValue,
		setPromoStatus,
		setDiscount,
		setIHavePromo,
		setPromoCheckout,
		fetchGetPromoCodes,
	} = usePromo()

	React.useEffect(() => {
		fetchGetPromoCodes()
	}, [])

	const onClickPromoBtn = () => {
		const matchedPromo = promoCodes.find(
			promo => promo.name.toLowerCase() === inputValue.toLowerCase()
		)

		if (matchedPromo) {
			setPromoStatus('success')
			setDiscount(matchedPromo.discount)
			setPromoCheckout(inputValue)
			// console.log(matchedPromo.name)
			// console.log(matchedPromo.discount)
		} else {
			setPromoStatus('error')
			setInputValue('')
		}
	}

	return {
		onClickPromoBtn,
		promoStatus,
		discount,
		iHavePromo,
		promoCheckout,
		setInputValue,
		inputValue,
		setIHavePromo,
		promoCodes,
	}
}
