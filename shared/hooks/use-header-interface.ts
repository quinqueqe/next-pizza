import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { useAuth, useHeader } from '../store'
import { useSearchParams } from 'next/navigation'

export const useHeaderInterface = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const { openModal, setOpenModal } = useAuth()
	const { isOpen, setIsOpen } = useHeader()

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

	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return {
		openModal,
		setOpenModal,
		isOpen,
		setIsOpen,
	}
}
