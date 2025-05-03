import { hashSync } from 'bcrypt'
import {
	categories,
	ingredients,
	products,
	pepperoniFresh,
	cheese,
	chorizeFresh,
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

	await prisma.variantion.createMany({
		data: [
			...pepperoniFreshVariations(pepperoniFreshPizza.id),
			...cheesePizzaVariations(cheesePizza.id),
			...chorizeFreshVariations(chorizeFreshPizza.id),
		],
	})
}
async function down() {
	// await prisma.$executeRaw`TRUNCATE "User" RESTART IDENTITY CASCADE;` // SQL
	await prisma.user.deleteMany() // вместо raw-запроса
	await prisma.category.deleteMany() // вместо raw-запроса
	await prisma.variantion.deleteMany() // вместо raw-запроса
	await prisma.product.deleteMany() // вместо raw-запроса
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
