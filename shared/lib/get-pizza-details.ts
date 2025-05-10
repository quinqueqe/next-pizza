import { Ingredients, Variation } from '@prisma/client'
import { Item } from '../components/shared/group-variants'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'

/**
 * Функция возвращает описание пиццы, которое включает
 * размер, тип теста. Используется в карточке пиццы
 * @param types - типы теста
 * @param activeType - активный тип теста
 * @param size - размер пиццы
 * @returns строка с описанием пиццы
 */
export const getPizzaDetails = (
	variations: Variation[],
	ingredients: Ingredients[],
	selectedIds: Set<number>,

	types: Item[],
	activeType: number,
	size: number
) => {
	const detailsType = types[activeType - 1].name
	const totalPrice = calcTotalPizzaPrice(
		variations,
		activeType,
		size,
		ingredients,
		selectedIds
	)
	const details = `${size} см, ${detailsType} тесто ${size}` // , 380 г
	return { totalPrice, details }
}
