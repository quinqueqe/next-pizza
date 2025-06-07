'use server'

import prisma from '@/prisma/prisma'

import { Prisma } from '@prisma/client'
import { getUserSession } from '@/shared/lib/get-user-session'
import { hashSync } from 'bcrypt'

export const updateUserInfo = async (body: Prisma.UserUpdateInput) => {
	try {
		const currentUser = await getUserSession()

		if (!currentUser) {
			throw new Error('Пользователь не найден')
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(currentUser.id),
			},
		})

		await prisma.user.update({
			where: {
				id: Number(currentUser.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password
					? hashSync(body.password as string, 10)
					: findUser?.password,
				// password: body.password,
			},
		})
	} catch (err) {
		console.log('[UPDATE_USER_INFO_ERROR]', err)
	}
}