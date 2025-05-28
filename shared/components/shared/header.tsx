'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, SearchInput, CartButton, ProfileBtn, AuthModal } from './'
import { cn } from '@/shared/lib'
import { useSearchParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header = ({
	hasSearch = true,
	hasCart = true,
	className,
}: Props) => {
	const searchParams = useSearchParams()
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

	const [openModal, setOpenModal] = React.useState<boolean>(false)
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex justify-between items-center py-8'>
				<Link href='/' className='flex gap-4 items-center'>
					<Image src={'/logo.png'} alt='img' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercae font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</Link>

				{hasSearch && <SearchInput />}

				<div className='flex items-center gap-4'>
					<AuthModal open={openModal} onClose={() => setOpenModal(false)} />
					<ProfileBtn onClickLogin={() => setOpenModal(true)} />

					{hasCart && <CartButton />}
				</div>
			</Container>
		</header>
	)
}
