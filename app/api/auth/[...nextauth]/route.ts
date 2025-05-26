import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
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
		async jwt({ token }) {
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
