import { ingredients } from './ingredients'

export const pepperoniFresh = {
	name: 'Пепперони фреш',
	price: 339,
	imageUrl: '/assets/images/products/pizzas/pepperoni_fresh.avif',
	categoryId: 1,
	desc: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(0, 5), // привязка к этому продукту, первых пяти ингредиентов
	},
	whProduct: 1,
}

export const cheese = {
	name: 'Сырная',
	price: 439,
	imageUrl: '/assets/images/products/pizzas/cheese.avif',
	categoryId: 1,
	desc: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(5, 10), // привязка к этому продукту, 5-10 ингредиентов
	},
	whProduct: 1,
}

export const chorizeFresh = {
	name: 'Чоризо фреш',
	price: 539,
	imageUrl: '/assets/images/products/pizzas/chorize_fresh.avif',
	categoryId: 1,
	desc: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(10, 40), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}

export const hamAndMushrooms = {
	name: 'Ветчина и грибы',
	price: 479,
	imageUrl: '/assets/images/products/pizzas/ham_and_mushrooms.avif',
	categoryId: 1,
	desc: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(5, 9), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const doubleChicken = {
	name: 'Двойной цыпленок 👶',
	price: 419,
	imageUrl: '/assets/images/products/pizzas/double_chicken.avif',
	categoryId: 1,
	desc: 'Цыпленок, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(7, 12), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const hamAndCheese = {
	name: 'Ветчина и сыр',
	price: 419,
	imageUrl: '/assets/images/products/pizzas/ham_and_cheese.avif',
	categoryId: 1,
	desc: 'Ветчина, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(7, 12), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const shrimpWithSweetChili = {
	name: 'Креветки со сладким чили',
	price: 419,
	imageUrl: '/assets/images/products/pizzas/shrimp_with_sweet_chili.avif',
	categoryId: 1,
	desc: 'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(9, 14), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const beefStroganoff = {
	name: 'Бефстроганов',
	price: 499,
	imageUrl: '/assets/images/products/pizzas/beefstroganoff.avif',
	categoryId: 1,
	desc: 'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо',
	ingredients: {
		connect: ingredients.slice(10, 15), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const barbecueSausages = {
	name: 'Колбаски барбекю',
	price: 479,
	imageUrl: '/assets/images/products/pizzas/barbecue_sausages.avif',
	categoryId: 1,
	desc: 'Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(13, 20), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const carbonara = {
	name: 'Карбонара',
	price: 579,
	imageUrl: '/assets/images/products/pizzas/carbonara.avif',
	categoryId: 1,
	desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
	ingredients: {
		connect: ingredients.slice(10, 15), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const burgerPizza = {
	name: 'Бургер-пицца',
	price: 479,
	imageUrl: '/assets/images/products/pizzas/burger_pizza.avif',
	categoryId: 1,
	desc: 'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(11, 16), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
export const barbecueChicken = {
	name: 'Цыпленок барбекю',
	price: 479,
	imageUrl: '/assets/images/products/pizzas/barbecue_chicken.avif',
	categoryId: 1,
	desc: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
	ingredients: {
		connect: ingredients.slice(12, 17), // привязка к этому продукту, с 10-40 ингредиентов
	},
	whProduct: 1,
}
