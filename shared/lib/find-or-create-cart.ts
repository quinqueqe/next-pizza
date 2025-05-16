import prisma from '@/prisma/prisma'

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
