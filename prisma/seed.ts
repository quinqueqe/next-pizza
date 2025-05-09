import { hashSync } from 'bcrypt'
import {
	// pizzas
	categories,
	ingredients,
	products,
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
} from './constants'
import prisma from './prisma'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
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
		],
	})

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 999,
				token: '111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222',
			},
		],
	})

	await prisma.cartItem.create({
		data: {
			cartId: 1, // к корзине 1 будет привязан этот товар
			quantity: 2, // кол-во (count)
			productItemId: 1, // вариация продукта
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }], // обрщается уже к сохраненным данным в ingredients и добавляет их сюда по id
			},
		},
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
