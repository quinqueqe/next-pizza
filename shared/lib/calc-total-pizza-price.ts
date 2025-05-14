import { Ingredients, Variation } from '@prisma/client'

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

