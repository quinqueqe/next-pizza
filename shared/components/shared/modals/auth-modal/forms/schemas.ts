import { z } from 'zod'

// login
export const passwordSchema = z
	.string()
	.min(6, 'Пароль должен быть не менее 6 символов')

export const FormLoginSchema = z.object({
	email: z.string().email('Введите корректную почту'),
	password: passwordSchema,
})

export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>

// register
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

// update
export const passwordOptionalSchema = z.string().optional()

export const FormUpdateInfoSchema = z.object({
	email: z.string().email('Введите корректную почту'),
	password: passwordOptionalSchema,
})

export const FormUpdateSchema = FormUpdateInfoSchema.merge(
	z.object({
		fullName: z.string().min(2, 'Введите имя и фамилию'),
		confirmPassword: passwordOptionalSchema,
	})
).refine(data => data.password === data.confirmPassword, {
	message: 'Пароли не совпадают',
	path: ['confirmPassword'],
})

export type FormUpdateSchemaType = z.infer<typeof FormUpdateSchema>
