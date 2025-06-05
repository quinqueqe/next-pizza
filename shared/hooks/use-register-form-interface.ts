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
			const result = await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			if (result.error) {
				if (result.error === 'Пользователь уже существует') {
					toast.error(result.error)
				} else {
					toast.error('Произошла ошибка при регистрации')
					console.log('REGISTER_ERROR', result.error)
				}
				return
			}

			toast.success(
				'Регистрация прошла успешно, подтвердите свой аккаунт, код отправили на почту'
			)
			setType('confirm')
			setConfirmEmail(data.email)
			// onClose?.()
		} catch (err: unknown) {
			toast.error('Произошла ошибка при регистрации')
			console.log('REGISTER_ERROR', err)
		}
	}

	return {
		form,
		onSubmit,
		setType,
	}
}
