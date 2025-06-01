'use server'

import { compare } from 'bcrypt'
import prisma from '@/prisma/prisma'
import { Account, Profile, User } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { JWT } from 'next-auth/jwt'

/**
 * Функция авторизации пользователя по учетным данным.
 * @param credentials - учетные данные пользователя.
 * @returns объект пользователя или null, если авторизация не удалась.
 */
export async function authorize(
	credentials: Record<string, string> | undefined
) {
	if (!credentials) return null

	const values = { email: credentials.email }

	const findUser = await prisma.user.findFirst({
		where: values,
	})

	if (!findUser) return null

	await prisma.user.update({
		where: {
			email: credentials.email,
		},
		data: {
			provider: 'credentials',
		},
	}) // при входе через credentials, обновляем провайдер на credentials

	const isPasswordValid = await compare(
		credentials.password,
		findUser.password as string
	)

	if (!isPasswordValid) return null

	if (!findUser.verified) return null

	return {
		id: findUser.id,
		email: findUser.email,
		name: findUser.fullName,
		role: findUser.role,
	}
}

/**
 * Функция входа пользователя.
 * @param user - объект пользователя.
 * @param account - объект аккаунта (может быть null).
 * @returns true, если вход успешен, иначе false.
 */
export async function signIn({
	user,
	account,
}: {
	user: User | AdapterUser
	account: Account | null
}) {
	try {
		if (account?.provider === 'credentials') {
			return true
		}

		if (!user.email) return false

		const findUser = await prisma.user.findFirst({
			where: {
				OR: [
					{
						provider: account?.provider,
						providerId: account?.providerAccountId,
					},
					{
						email: user.email,
					},
				],
			},
		})

		if (findUser) {
			await prisma.user.update({
				where: { id: findUser.id },
				data: {
					provider: account?.provider,
					providerId: account?.providerAccountId,
				},
			})
			return true
		}

		await prisma.user.create({
			data: {
				email: user.email,
				fullName: user.name || `User #${user.id}`,
				verified: new Date(),
				provider: account?.provider,
				providerId: account?.providerAccountId,
			},
		})

		return true
	} catch (err) {
		console.log('[SIGN_IN_ERROR]', err)
		return false
	}
}

/**
 * Функция обновления JWT токена пользователя.
 * @param token - объект токена пользователя.
 * @returns обновленный токен.
 */
export async function jwt(params: {
	token: JWT
	user?: User | AdapterUser
	account?: Account | null
	profile?: Profile
	isNewUser?: boolean
}) {
	const { token } = params
	const findUser = await prisma?.user.findFirst({
		where: {
			email: token.email as string,
		},
	})

	if (findUser) {
		token.id = String(findUser.id)
		token.email = findUser.email
		token.name = findUser.fullName
		token.role = findUser.role
	}

	return token
}
