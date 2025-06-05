'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { registerUser } from '@/app/actions'
import {
	FormRegisterSchema,
	FormRegisterSchemaType,
} from '../components/shared/modals/auth-modal/forms/schemas'
import { useAuth } from '../store'

// type Props = {
// 	onClose?: () => void
// }

export const useRegisterFormInterface = () => {
	// { onClose }: Props
	const { setType, setConfirmEmail } = useAuth()
	const form = useForm<FormRegisterSchemaType>({
		resolver: zodResolver(FormRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	})
	const onSubmit = async (data: FormRegisterSchemaType) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			toast.success(
				'Регистрация прошла успешно, подтвердите свой аккаунт, код отправили на почту'
			)
			setType('confirm')
			setConfirmEmail(data.email)
			// onClose?.()
		} catch (err: unknown) {
			if (err instanceof Error) {
				if (err.message === 'Пользователь уже существует') {
					toast.error(err.message)
				}
			} else {
				toast.error('Произошла ошибка при регистрации')
				console.log('REGISTER_ERROR', err)
			}
		}
	}

	return {
		form,
		onSubmit,
		setType,
	}
}
