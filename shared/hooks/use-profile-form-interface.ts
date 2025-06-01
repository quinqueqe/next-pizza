'use client'
import toast from 'react-hot-toast'
import { User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateUserInfo } from '@/app/actions'
import { useAuth } from '@/shared/store'
import {
	FormUpdateSchema,
	FormUpdateSchemaType,
} from '../components/shared/modals/auth-modal/forms/schemas'

type Props = {
	user: User
	onCloseModal?: () => void
}

export const useProfileFormInterface = ({ user, onCloseModal }: Props) => {
	const { loadingBtn, setLoadingBtn } = useAuth()
	const form = useForm<FormUpdateSchemaType>({
		resolver: zodResolver(FormUpdateSchema),
		defaultValues: {
			fullName: user.fullName,
			email: user.email,
			password: '',
			confirmPassword: '',
		},
	})
	const onSubmit = async (data: FormUpdateSchemaType) => {
		try {
			await updateUserInfo({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			toast.success('Данные успешно обновлены')
			onCloseModal?.()
		} catch (err) {
			toast.error('Не удалось обновить информацию')
			console.log('[UPDATE_USER_INFO_ERROR]', 'profile', err)
			onCloseModal?.()
		}
	}

	return {
		loadingBtn,
		setLoadingBtn,
		form,
		onSubmit,
	}
}
