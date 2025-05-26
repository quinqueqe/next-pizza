import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare, hashSync } from 'bcrypt'
import { UserRole } from '@prisma/client'
import { pid } from 'process'

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
			profile(profile) {
				return {
					id: profile.id,
					name: profile.name || profile.login, // получаем имя или логин именно пользователя с гитхаба
					email: profile.email,
					image: profile.avatar_url,
					role: 'USER' as UserRole,
				}
			},
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				// поля которые принимает
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) return null

				const values = {
					email: credentials.email,
				}

				const findUser = await prisma?.user.findFirst({
					where: values,
				})

				if (!findUser) return null

				const isPasswordValid = await compare(
					credentials.password,
					findUser.password
				) // сравнения пароля  пользователя и хешированного пароля из prisma

				if (!isPasswordValid) return null

				if (!findUser.verified) return null

				return {
					id: String(findUser.id),

					email: findUser.email,
					name: findUser.fullName,
					role: findUser.role,
				}
			},
		}),
	],

	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async signIn({ user, account }) {
			// GITHUB
			try {
				if (account?.provider === 'credentials') {
					return true
				}

				if (!user.email) return false

				const findUser = await prisma?.user.findFirst({
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
					await prisma?.user.update({
						where: {
							id: findUser.id,
						},
						data: {
							provider: account?.provider,
							providerId: account?.providerAccountId,
						},
					})

					return true
				}

				await prisma?.user.create({
					data: {
						email: user.email,
						fullName: user.name || `User #${user.id}`,
						password: hashSync(user.id.toString(), 10), // не желательно делать в виде айди
						verified: new Date(),
						provider: account?.provider,
						providerId: account?.providerAccountId,
					},
				})
			} catch (err) {
				console.log('[SIGN_IN_ERROR]', err)
				return false
			}
		},
		async jwt({ token }) {
			// credentials
			const findUser = await prisma?.user.findFirst({
				where: {
					email: token.email,
				},
			})

			if (findUser) {
				token.id = String(findUser.id)
				token.email = findUser.email
				token.name = findUser.fullName
				token.role = findUser.role
			}

			return token
		},
		session({ session, token }) {
			if (session.user) {
				session.user.id = token.id
				session.user.role = token.role
			}

			return session
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
