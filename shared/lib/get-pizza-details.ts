import { Item } from '../components/shared/group-variants'

/**
 * Функция возвращает описание пиццы, которое включает
 * размер, тип теста. Используется в карточке пиццы
 * @param types - типы теста
 * @param activeType - активный тип теста
 * @param size - размер пиццы
 * @returns строка с описанием пиццы
 */
export const getPizzaDetails = (
	types: Item[],
	activeType: number,
	size: number
) => {
	const detailsType = types[activeType - 1].name
	return `${size} см, ${detailsType} тесто ${size}` // , 380 г
}
