import { z } from 'zod'

export const passwordSchema = z
	.string()
	.min(6, 'Пароль должен быть не менее 6 символов')

export const FormLoginSchema = z.object({
	email: z.string().email('Введите корректную почту'),
	password: passwordSchema,
})

export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>

export const FormRegisterSchema = FormLoginSchema.merge(
	z.object({
		fullName: z.string().min(2, 'Введите имя и фамилию'),
		confirmPassword: passwordSchema,
	})
).refine(data => data.password === data.confirmPassword, {
	message: 'Пароли не совпадают',
	path: ['confirmPassword'],
})

export type FormRegisterSchemaType = z.infer<typeof FormRegisterSchema>