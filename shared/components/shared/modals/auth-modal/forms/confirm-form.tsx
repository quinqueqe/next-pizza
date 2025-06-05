'use client'

import React from 'react'
import { Button } from '@/shared/components/ui'
import { FormProvider, useForm } from 'react-hook-form'
import { FormConfirmSchema, FormConfirmSchemaType } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { ConfirmFormInput } from '.'
import { confirmUserCode } from '@/app/actions'
import toast from 'react-hot-toast'
import { useAuth } from '@/shared/store'

type Props = {
	onClose?: () => void
}

export const ConfirmForm = ({ onClose }: Props) => {
	const { setType, confirmEmail } = useAuth()
	const form = useForm<FormConfirmSchemaType>({
		resolver: zodResolver(FormConfirmSchema),
		defaultValues: {
			code_1: '',
			code_2: '',
			code_3: '',
			code_4: '',
			code_5: '',
			code_6: '',
		},
	})

	const inputRefs = [
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
		React.useRef<HTMLInputElement>(null),
	]

	const onSubmit = async (data: FormConfirmSchemaType) => {
		try {
			const code = Object.values(data).join('')
			await confirmUserCode(code)

			toast.success('Подтверждение прошло успешно, выполните вход в аккаунт')
			setType('confirm')
			onClose?.()
		} catch (err: unknown) {
			if (err instanceof Error) {
				if (err.message === 'Неверный код') {
					toast.error(err.message)
				} else {
					toast.error('Произошла ошибка при подтверждении кода')
					console.log('VERIFICATION_CODE_ERROR', err)
				}
			}
		}
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<h4 className='text-[24px] pb-3 font-bold text-center'>Введите код</h4>

				<p className='text-[#5C6370] text-[16px] pb-6 text-center'>
					Ваш код подтверджения отправлен на почту ниже: {confirmEmail}
				</p>
				<div className='grid grid-cols-6 gap-3 pb-7'>
					{inputRefs.map((ref, i) => (
						<ConfirmFormInput
							key={i}
							name={`code_${i + 1}`}
							ref={ref}
							nextRef={i < inputRefs.length - 1 ? inputRefs[i + 1] : undefined}
							prevRef={i > 0 ? inputRefs[i - 1] : undefined}
						/>
					))}
				</div>
				<Button variant='default' type='submit' className='w-full'>
					Подтвердить почту
				</Button>
			</form>
		</FormProvider>
	)
}
