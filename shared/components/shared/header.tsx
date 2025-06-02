'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
	Container,
	SearchInput,
	CartButton,
	ProfileBtn,
	AuthModal,
	Burger,
} from './'
import { useSearchParams } from 'next/navigation'
import { useHeaderInterface } from '@/shared/hooks/use-header-interface'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	hasProfile?: boolean
}

export const Header = ({
	hasSearch = false,
	hasCart = false,
	hasProfile = false,
}: Props) => {
	const searchParams = useSearchParams()
	const { openModal, setOpenModal, isOpen, setIsOpen } = useHeaderInterface({
		searchParams,
	})

	// React.useEffect(() => {
	// 	if (isOpen) {
	// 		document.body.style.overflow = 'hidden'
	// 	} else {
	// 		document.body.style.overflow = 'auto'
	// 	}
	// }, [isOpen])

	return (
		<header>
			<Container className='flex justify-between items-center py-8 max-[915px]:pt-6 max-[915px]:pb-7'>
				<Link href='/' className='flex gap-4 items-center'>
					<Image src='/favicon.ico' alt='img' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercae font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</Link>
				{hasSearch && <SearchInput className='max-[915px]:hidden' />}
				<div className='flex items-center gap-4 max-[915px]:hidden'>
					<AuthModal open={openModal} onClose={() => setOpenModal(false)} />
					{hasProfile && <ProfileBtn onClickLogin={() => setOpenModal(true)} />}

					{hasCart && <CartButton />}
				</div>

				<Burger setIsOpen={setIsOpen} isOpen={isOpen} />
				{isOpen && (
					<div className='absolute top-0 left-0 z-999 flex flex-col items-center justify-center gap-4 w-full h-full bg-black overflow-hidden'>
						<div>
							<div className='absolute top-6 left-4 flex border-b-[1px] border-white/20 border-solid w-full -ml-4 pl-4 pb-4'>
								<Link href='/' className='flex gap-4 items-center'>
									<Image src='/favicon.ico' alt='img' width={35} height={35} />
									<div>
										<h1 className='text-2xl uppercae text-white font-black'>
											Next Pizza
										</h1>
										<p className='text-sm text-gray-400 leading-3'>
											вкусней уже некуда
										</p>
									</div>
								</Link>
							</div>
						</div>
						<div className='absolute w-full top-25 left-[6%] flex gap-4 flex-col'>
							{hasSearch && (
								<SearchInput classNameInput='max-[915px]:w-[100%]-important' />
							)}

							<AuthModal open={openModal} onClose={() => setOpenModal(false)} />
							{hasProfile && (
								<div onClick={() => setIsOpen(false)}>
									<ProfileBtn onClickLogin={() => setOpenModal(true)} />
								</div>
							)}
						</div>
					</div>
				)}
			</Container>
		</header>
	)
}
