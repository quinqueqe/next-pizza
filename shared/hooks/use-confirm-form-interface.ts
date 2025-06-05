import React from 'react'
import { useForm } from 'react-hook-form'
import {
	FormConfirmSchema,
	FormConfirmSchemaType,
} from '../components/shared/modals/auth-modal/forms/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../store'
import { confirmUserCode } from '@/app/actions'
import toast from 'react-hot-toast'

type Props = {
	onClose?: () => void
}

export const useConfirmFormInterface = ({ onClose }: Props) => {
	const { setType, confirmEmail, errorConfirmEmail, setErrorConfirmEmail } =
		useAuth()
	const form = useForm<FormConfirmSchemaType>({
		resolver: zodResolver(FormConfirmSchema),
		defaultValues: {
			code_1: '',
			code_2: '',
			code_3: '',
			code_4: '',
		},
	})

	const inputRefs = [
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
	]

	const onSubmit = async (data: FormConfirmSchemaType) => {
		try {
			const code = Object.values(data).join('')
			const result = await confirmUserCode(code)

			if (result.error) {
				if (result.error === 'Неверный код') {
					toast.error(result.error)
					setErrorConfirmEmail(true)
				} else {
					toast.error('Произошла ошибка при подтверждении кода')
					console.log('VERIFICATION_CODE_ERROR', result.error)
				}
			}

			toast.success('Подтверждение прошло успешно, выполните вход в аккаунт')
			setType('login')
			onClose?.()
		} catch (err: unknown) {
			toast.error('Произошла ошибка при подтверждении кода')
			console.log('VERIFICATION_CODE_ERROR', err)
		}
	}

	return {
		form,
		onSubmit,
		confirmEmail,
		inputRefs,
		errorConfirmEmail,
	}
}
