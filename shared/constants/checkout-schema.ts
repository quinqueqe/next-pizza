import { z } from 'zod'

export const CheckoutSchema = z.object({
	email: z.string().email('Введите корректную почту'),
	firstName: z.string().min(2, 'Имя должно содержать не менее 2-х символов'),
	lastName: z.string().min(2, 'Фамилия должно содержать не менее 2-х символов'),
	phone: z.string().min(10, 'Введите корректный номер телефона'),
	address: z.string().min(5, 'Введите корректный адрес'),
	comment: z.string().optional(),
})

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>
