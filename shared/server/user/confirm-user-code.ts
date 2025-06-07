'use server'

import prisma from '@/prisma/prisma'

export const confirmUserCode = async (code: string) => {
	try {
		const findUser = await prisma.verifiсationCode.findFirst({
			where: {
				code,
			},
			include: {
				user: true,
			},
		})

		if (!findUser) {
			return { error: 'Неверный код' }
		}

		await prisma.user.update({
			where: {
				id: findUser.userId,
			},
			data: {
				verified: new Date(),
			},
		})

		await prisma.verifiсationCode.delete({
			where: {
				id: findUser.id,
			},
		})

		return { success: true }
	} catch (err) {
		return { error: 'Произошла ошибка' }
		console.log('[CONFIRM_USER_CODE_ERRROR]', err)
	}
}
