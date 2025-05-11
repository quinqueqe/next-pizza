import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

/**
 * Маршрут обрабатывает GET-запросы для получения корзины пользователя на основе токена корзины, хранящегося в cookie.
 * Он ищет токен 'cartToken' в cookie запроса. Если токен не найден, возвращает пустой массив элементов.
 * Если токен присутствует, он запрашивает базу данных для получения корзины, связанной с токеном.
 * Корзина извлекается вместе с ее элементами, каждый из которых включает в себя связанные с ним подробные сведения о продукте и ингредиенты.
 * Ответ возвращается в формате JSON.
 */
export async function GET(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await prisma?.cart.findFirst({
			where: {
				OR: [
					{
						token,
					},
				],
			},
			include: {
				items: {
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})

		return NextResponse.json(userCart)
	} catch (err) {
		console.log(err)
	}
}
