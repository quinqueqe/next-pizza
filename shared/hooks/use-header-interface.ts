import { ReadonlyURLSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

type Props = {
	searchParams: ReadonlyURLSearchParams
}

export const useHeaderInterface = ({ searchParams }: Props) => {
	const router = useRouter()
	React.useEffect(() => {
		let toastMessage = ''
		if (searchParams.has('paid')) {
			toastMessage =
				'Ваш заказ был успешно оплачен, чек об оплате отправлен вам на почту. Приятного аппетита!'
		}
		if (searchParams.has('verified')) {
			toastMessage = 'Почта успешно подтверждена'
		}

		if (toastMessage) {
			setTimeout(() => {
				toast.success(toastMessage, {
					duration: 3000,
				})
				router.replace('/')
			}, 500)
		}
	}, [])
}
