import { ingredients } from './ingredients'

export const pepperoniFresh = {
	name: 'Пепперони фреш',
	price: 339,
	imageUrl:
		'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
	categoryId: 1,
	desc: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
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
	desc: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
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
	desc: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(10, 40), // привязка к этому продукту, с 10-40 ингредиентов
	},
}

export const hamAndMushrooms = {
	name: 'Ветчина и грибы',
	price: 479,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif',
	categoryId: 1,
	desc: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(5, 9), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const doubleChicken = {
	name: 'Двойной цыпленок 👶',
	price: 419,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
	categoryId: 1,
	desc: 'Цыпленок, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(7, 12), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const hamAndCheese = {
	name: 'Ветчина и сыр',
	price: 419,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
	categoryId: 1,
	desc: 'Ветчина, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(7, 12), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const shrimpWithSweetChili = {
	name: 'Креветки со сладким чили',
	price: 419,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/0194d4fd39bb7352bfa5de2219e88b9b.avif',
	categoryId: 1,
	desc: 'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(9, 14), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const beefStroganoff = {
	name: 'Бефстроганов',
	price: 499,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/01953ced168c758399984df8561623a3.avif',
	categoryId: 1,
	desc: 'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(10, 15), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const barbecueSausages = {
	name: 'Колбаски барбекю',
	price: 479,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ee7d6150d498419e133df19945a00d.avif',
	categoryId: 1,
	desc: 'Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(13, 20), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const carbonara = {
	name: 'Карбонара',
	price: 579,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.avif',
	categoryId: 1,
	desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
	ingredients: {
		connect: ingredients.slice(10, 15), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const burgerPizza = {
	name: 'Бургер-пицца',
	price: 479,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif',
	categoryId: 1,
	desc: 'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(11, 16), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
export const barbecueChicken = {
	name: 'Цыпленок барбекю',
	price: 479,
	imageUrl:
		'https://media.dodostatic.net/image/r:292x292/11ee7d6110059795842d40396bcf1e73.avif',
	categoryId: 1,
	desc: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(12, 17), // привязка к этому продукту, с 10-40 ингредиентов
	},
}
