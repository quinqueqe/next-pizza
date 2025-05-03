import { ingredients } from './ingredients'

export const pepperoniFresh = {
	name: 'Пепперони фреш',
	price: 339,
	imageUrl:
		'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
	categoryId: 1,
	ingredients: {
		connect: ingredients.slice(0, 5), // привязка к этому продукту, первых пяти ингредиентов
	},
}

export const cheese = {
	name: 'Сырная',
	price: 439,
	imageUrl:
		'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
	categoryId: 1,
	ingredients: {
		connect: ingredients.slice(5, 10), // привязка к этому продукту, 5-10 ингредиентов
	},
}

export const chorizeFresh = {
	name: 'Чоризо фреш',
	price: 539,
	imageUrl:
		'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
	categoryId: 1,
	ingredients: {
		connect: ingredients.slice(10, 40), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
