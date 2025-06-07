'use server'

import prisma from '@/prisma/prisma'

import { Prisma } from '@prisma/client'
import { sendEmail } from '@/shared/lib'
import { VerificationUserTemplate } from '@/shared/components'
import { hashSync } from 'bcrypt'



export const registerUser = async (body: Prisma.UserCreateInput) => {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		})

		if (user) {
			// if (!user.verified) {
			// 	throw new Error('Почта не подтверждена')
			// }

			return { error: 'Пользователь уже существует' }
		}

		const createdUser = await prisma.user.create({
			data: {
				email: body.email,
				fullName: body.fullName,
				password: hashSync(body.password as string, 10),
				// password: body.password,
			},
		})

		const code = Math.floor(1000 + Math.random() * 9000).toString() // генерация кода

		// const code = Math.floor(100000 + Math.random() * 900000).toString() // 6

		await prisma.verifiсationCode.create({
			data: {
				code,
				userId: createdUser.id,
			},
		})

		await sendEmail(
			createdUser.email,
			'Next Pizza | Подтверждение почты 🍕',
			VerificationUserTemplate({ code })
		)
		return { success: true }
	} catch (err) {
		return { error: 'Произошла ошибка' }
		console.log('[REGISTER_USER_ERROR]', err)
	}
}
