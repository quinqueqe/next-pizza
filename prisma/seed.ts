import {
	categories,
	ingredients,
	products,

	// pizzas
	pepperoniFresh,
	cheese,
	chorizeFresh,
	hamAndMushrooms,
	doubleChicken,
	hamAndCheese,
	shrimpWithSweetChili,
	beefStroganoff,
	barbecueSausages,
	carbonara,
	burgerPizza,
	barbecueChicken,

	// variants
	pepperoniFreshVariations,
	cheesePizzaVariations,
	chorizeFreshVariations,
	generateProduct,
	promoCodes,
	stories,
	storyItems,
	users,
	cartItem,
	cart,
} from './constants'
import prisma from './prisma'

async function up() {
	await prisma.user.createMany({
		data: users,
	})

	await prisma.category.createMany({
		// все категории из constants
		data: categories,
	})

	await prisma.ingredients.createMany({
		// все ингредиенты из constants
		data: ingredients,
	})

	await prisma.product.createMany({
		// все продукты из constants помимо пицц
		data: products,
	})

	const pepperoniFreshPizza = await prisma.product.create({
		data: pepperoniFresh,
	})
	const cheesePizza = await prisma.product.create({
		data: cheese,
	})
	const chorizeFreshPizza = await prisma.product.create({
		data: chorizeFresh,
	})

	const hamAndMushroomsPizza = await prisma.product.create({
		data: hamAndMushrooms,
	})

	const doubleChickenPizza = await prisma.product.create({
		data: doubleChicken,
	})
	const hamAndCheesePizza = await prisma.product.create({
		data: hamAndCheese,
	})
	const shrimpWithSweetChiliPizza = await prisma.product.create({
		data: shrimpWithSweetChili,
	})
	const beefStroganoffPizza = await prisma.product.create({
		data: beefStroganoff,
	})
	const barbecueSausagesPizza = await prisma.product.create({
		data: barbecueSausages,
	})
	const carbonaraPizza = await prisma.product.create({
		data: carbonara,
	})
	const burgerPizzaPizza = await prisma.product.create({
		data: burgerPizza,
	})
	const barbecueChickenPizza = await prisma.product.create({
		data: barbecueChicken,
	})

	await prisma.variation.createMany({
		data: [
			...pepperoniFreshVariations(pepperoniFreshPizza.id),
			...cheesePizzaVariations(cheesePizza.id),
			...chorizeFreshVariations(chorizeFreshPizza.id),

			// set variants after
			...chorizeFreshVariations(hamAndMushroomsPizza.id),
			...chorizeFreshVariations(doubleChickenPizza.id),
			...chorizeFreshVariations(hamAndCheesePizza.id),
			...chorizeFreshVariations(shrimpWithSweetChiliPizza.id),
			...chorizeFreshVariations(beefStroganoffPizza.id),
			...chorizeFreshVariations(barbecueSausagesPizza.id),
			...chorizeFreshVariations(carbonaraPizza.id),
			...chorizeFreshVariations(burgerPizzaPizza.id),
			...chorizeFreshVariations(barbecueChickenPizza.id),

			// set all Products (coffee, .....)
			...products.map((product, i) =>
				generateProduct({
					productId: i + 1,
					pizzaType: null,
					size: null,
					price: product.price,
				})
			),
		],
	})

	await prisma.cart.createMany({
		data: cart,
	})

	await prisma.cartItem.create({
		data: cartItem,
	})

	await prisma.promo.createMany({
		data: promoCodes,
	})

	await prisma.story.createMany({
		data: stories,
	})
	await prisma.storyItem.createMany({
		data: storyItems,
	})
}
async function down() {
	// await prisma.$executeRaw`TRUNCATE "User" RESTART IDENTITY CASCADE;` // SQL
	await prisma.user.deleteMany() // вместо raw-запроса
	await prisma.cart.deleteMany() // вместо raw-запроса
	await prisma.cartItem.deleteMany() // вместо raw-запроса
	await prisma.ingredients.deleteMany() // вместо raw-запроса
	await prisma.product.deleteMany() // вместо raw-запроса
	await prisma.variation.deleteMany() // вместо raw-запроса
	await prisma.category.deleteMany() // вместо raw-запроса
	await prisma.story.deleteMany() // вместо raw-запроса
	await prisma.storyItem.deleteMany() // вместо raw-запроса
}

async function main() {
	try {
		await down() // очищаем базу данных
		await up() // заполняем базу данных
	} catch (e) {
		console.log(e)
	}
}

main() // Promise
	.then(async () => {
		await prisma.$disconnect
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
