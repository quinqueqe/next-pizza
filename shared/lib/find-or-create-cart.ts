import prisma from '@/prisma/prisma'

/**
 * Функция находит или создает корзину, если ее нет,
 * используя переданный токен, и возвращает найденную/созданную корзину
 * @param token - токен, используемый для поиска/создания корзины
 * @returns обьект корзины (Cart)
 */
export const FindOrCreateCart = async (token: string) => {
	let userCart = await prisma?.cart.findFirst({
		where: {
			token,
		},
	})

	if (!userCart) {
		userCart = await prisma?.cart.create({
			data: { // все содержимое модели Cart
				token,
			},
		})
	}

	return userCart
}

