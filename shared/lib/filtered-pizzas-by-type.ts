import { Variation } from '@prisma/client'
import { Item } from '../components/shared/group-variants'

/**
 * Функция фильтрует пиццы по типу
 * @param variations - массив объектов Variation
 * @param types - массив объектов Item, которые содержат информацию о типах пиц
 * @param activeType - активный тип пиццы
 * @returns массив объектов Variation, отфильтрованных по типу
 */
export const filteredPizzasByType = (
	variations: Variation[],
	types: Item[],
	activeType: number
) => {
	const filteredPizzasByType = variations?.filter(
		item => item.pizzaType === types[activeType - 1].value
	)

	return filteredPizzasByType
}

