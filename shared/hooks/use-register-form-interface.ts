import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { registerUser } from '@/app/actions'
import {
	FormRegisterSchema,
	FormRegisterSchemaType,
} from '../components/shared/modals/auth-modal/forms/schemas'

type Props = {
	onClose?: () => void
}

export const useRegisterFormInterface = ({ onClose }: Props) => {
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

			toast.success('Регистрация прошла успешно, подтвердите свою почту')
			onClose?.()
		} catch (err) {
			toast.error('Произошла ошибка при регистрации')
			console.log('REGISTER_ERROR', err)
		}
	}

	return {
		form,
		onSubmit,
	}
}
