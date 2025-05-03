// const randomPrice = (min: number, max: number) => {
// 	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10 // рандомайзер
// }

type generatePizzaType = {
	productId: number
	pizzaType: 1 | 2
	size: 25 | 30 | 35
	price: number
}

const generateProduct = ({
	productId,
	pizzaType,
	size,
	price,
}: generatePizzaType) => {
	return {
		productId,
		price,
		pizzaType,
		size,
	}
}

export const pepperoniFreshVariations = (productId: number) => [
	generateProduct({
		productId,
		pizzaType: 1,
		size: 25,
		price: 339,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 30,
		price: 539,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 35,
		price: 669,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 30,
		price: 539,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 35,
		price: 669,
	}),
]

export const cheesePizzaVariations = (productId: number) => [
	generateProduct({
		productId,
		pizzaType: 1,
		size: 25,
		price: 339,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 30,
		price: 569,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 35,
		price: 699,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 30,
		price: 569,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 35,
		price: 699,
	}),
]

export const chorizeFreshVariations = (productId: number) => [
	generateProduct({
		productId,
		pizzaType: 1,
		size: 25,
		price: 339,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 30,
		price: 559,
	}),
	generateProduct({
		productId,
		pizzaType: 1,
		size: 35,
		price: 699,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 30,
		price: 559,
	}),
	generateProduct({
		productId,
		pizzaType: 2,
		size: 35,
		price: 699,
	}),
]
