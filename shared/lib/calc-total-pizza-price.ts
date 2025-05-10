import { Ingredients, Variation } from '@prisma/client'

/**
 * Вычисляет общую стоимость пиццы на основе выбранных вариаций и ингредиентов.
 * 
 * @param variations - Список доступных вариаций пиццы.
 * @param activeType - Тип пиццы, выбранный пользователем.
 * @param size - Размер пиццы, выбранный пользователем.
 * @param ingredients - Список всех возможных ингредиентов пиццы.
 * @param selectedIds - Множество ID ингредиентов, выбранных пользователем.
 * @returns Общая стоимость пиццы, включая выбранные ингредиенты.
 */

export const calcTotalPizzaPrice = (
	variations: Variation[],
	activeType: number,
	size: number,
	ingredients: Ingredients[],
	selectedIds: Set<number>
): number => {
	const pizzaPrice = variations?.find(
		item => item.pizzaType === activeType && item.size === size
	)!.price
	const ingredientsPrice = ingredients
		.filter(ing => selectedIds.has(ing.id))
		.reduce((acc, ing) => acc + ing.price, 0)

	return pizzaPrice + ingredientsPrice
}

