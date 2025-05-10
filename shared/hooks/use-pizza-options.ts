import { useSet } from 'react-use'
import { calcTotalPizzaPrice, filteredPizzasByType, getPizzaDetails } from '../lib'
import { useModal } from '../store'
import { sizes, types } from '../constants/pizza'
import { Ingredients, Variation } from '@prisma/client'

/**
 * Этот хук предоставляет опции и детали для выбора пиццы.
 *
 * @param variations - Массив доступных вариаций пиццы.
 * @param ingredients - Массив всех возможных ингредиентов пиццы.
 * @returns Объект, содержащий активные выбранные значения, обработчики и вычисленные детали.
 * /** */
export const usePizzaOptions = (
	variations: Variation[],
	ingredients: Ingredients[]
) => {
	const { activeSize, activeType, setActiveSize, setActiveType } = useModal(
		state => state
	)
	const [selectedIds, { add, remove }] = useSet(new Set<number>())
	const size = sizes[activeSize].value

	const details = getPizzaDetails(types, activeType, size)
	const totalPrice = calcTotalPizzaPrice(
		variations!,
		activeType,
		size,
		ingredients,
		selectedIds
	)
	filteredPizzasByType(variations!, types, activeType)

	return {
		activeSize,
		activeType,
		setActiveSize,
		setActiveType,
		selectedIds,
		add,
		remove,
		size,
		details,
		totalPrice,
		sizes,types
	}
}
