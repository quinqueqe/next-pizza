import { hashSync } from 'bcrypt'
import { UserRole } from '@prisma/client'

export const users = [
	{
		fullName: 'User',
		email: 'user@test.ru',
		password: hashSync('R9VXB3', 10),
		// password: '111111',
		verified: new Date(),
		role: UserRole.USER,
	},
	{
		fullName: 'Admin',
		email: 'admin@test.ru',
		password: hashSync('PL7SWQ', 10),
		// password: '111111',
		verified: new Date(),
		role: UserRole.ADMIN,
	},
	{
		fullName: 'Asecer',
		email: 'asecer@admin.ru',
		password: hashSync('A7F9X2', 10),
		// password: '111111',
		verified: new Date(),
		role: UserRole.ADMIN,
	},
	{
		fullName: 'Quinque',
		email: 'quinque@admin.ru',
		password: hashSync('MT4ZQ8', 10),
		// password: '111111',
		verified: new Date(),
		role: UserRole.ADMIN,
	},
]
