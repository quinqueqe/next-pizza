'use client'

import React from 'react'
import { Button } from '@/shared/components/ui'
import { FormProvider } from 'react-hook-form'
import { ConfirmFormInput } from '.'
import { useConfirmFormInterface } from '@/shared/hooks/use-confirm-form-interface'

type Props = {
	onClose?: () => void
}

export const ConfirmForm = ({ onClose }: Props) => {
	const { form, onSubmit, confirmEmail, inputRefs } = useConfirmFormInterface({
		onClose,
	})
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
