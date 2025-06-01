'use client'

import React from 'react'
import { Container, InfoBlock } from '@/shared/components'
import { usePromoCodes } from '@/shared/hooks'
import { useSession } from 'next-auth/react'
import { Promo } from '@prisma/client'
import { X } from 'lucide-react'
import { cn } from '@/shared/lib'
import { useAdmin } from '@/shared/store'

export default function AdminPanelPage() {
	const { data: session, status } = useSession()
	const { role, setRole } = useAdmin()

	React.useEffect(() => {
		if (session?.user.role === 'ADMIN') {
			setRole('ADMIN')
		}
	}, [session])

	console.log(session, status)

	const { promoCodes } = usePromoCodes()

	return (
		<Container>
			{role === 'ADMIN' ? (
				<div className='bg-white rounded-3xl w-full p-8'>
					<h3 className='text-[26px] text-center font-bold pb-3'>
						Админ панель
					</h3>

					<div className='flex flex-col gap-7'>
						<div>
							<h4 className='text-[22px] font-bold'>Ваши данные</h4>
							<p>Имя: {session?.user.name}</p>
						</div>

						<div>
							<h4 className='text-[22px] font-bold'>Промокоды:</h4>
							<div>
								{promoCodes.map((promo: Promo) => (
									<div
										key={promo.id}
										className='flex justify-between items-center w-[350px]'
									>
										<p className='text-[16px] font-semibold'>
											Название - {promo.name} | Cкидка - {promo.discount} %
										</p>
										<button
											className={cn(
												'pl-1 text-[#b8b8b8] hover:text-[#505050] transition duration-300, '
											)}
										>
											<X size={20} />
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col items-center justify-center pt-40'>
					<InfoBlock
						title='Доступ запрещён'
						text='Данную страницу могут просматривать только администраторы проекта'
						imageUrl='/assets/images/lock.png'
					/>
				</div>
			)}
		</Container>
	)
}
