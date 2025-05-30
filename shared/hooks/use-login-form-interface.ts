import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { FormLoginSchema, FormLoginSchemaType } from '../components/shared/modals/auth-modal/forms/schemas'

type Props = {
	onClose?: () => void
}

export const useLoginFormInterface = ({ onClose }: Props) => {
	const form = useForm<FormLoginSchemaType>({
		resolver: zodResolver(FormLoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (data: FormLoginSchemaType) => {
		try {
			const res = await signIn('credentials', {
				email: data.email,
				password: data.password,
				redirect: false,
			})

			if (res?.ok) {
				toast.success('Вы успешно вошли в аккаунт')
				onClose?.()
			} else {
				console.log('FIND_LOGIN_ERROR', res?.error)
				toast.error('Неверный логин или пароль')
			}
		} catch (err) {
			console.log('LOGIN_ERROR', err)
		}
	}

	return {
		form,
		onSubmit,
	}
}
