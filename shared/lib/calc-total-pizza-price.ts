import { Ingredients, Variation } from '@prisma/client'

/**
 * Функция расчета общей стоимости пиццы
 * @param variations - массив объектов Variation, которые содержат информацию о типах пиц
 * @param activeType - активный тип пиццы
 * @param size - размер пиццы
 * @param ingredients - массив объектов Ingredients, которые содержат информацию о ингредиентах
 * @param selectedIds - Set<number>, который содержит id выбранных ингредиентов
 * @returns общая стоимость пиццы
 */
export const calcTotalPizzaPrice = (
	variations: Variation[],
	activeType: number,
	size: number,
	ingredients: Ingredients[],
	selectedIds: Set<number>
) => {
	const pizzaPrice = variations?.find(
		item => item.pizzaType === activeType && item.size === size
	)!.price
	const ingredientsPrice = ingredients
		.filter(ing => selectedIds.has(ing.id))
		.reduce((acc, ing) => acc + ing.price, 0)

	if (pizzaPrice) {
		return pizzaPrice + ingredientsPrice
	} else {
		console.log('[CALC_TOTAL_PIZZA_PRICE, ERROR, пицца не найдена')
	}
}
