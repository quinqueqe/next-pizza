'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { useClickAway, useDebounce } from 'react-use'
import { cn } from '../../lib'
import Link from 'next/link'
import Image from 'next/image'
import { Api } from '../../services/api-client'
import { useSearch } from '../../store'

type Props = {
	className?: string
	classNameInput?: string
	// onClick?: () => void
}

export const SearchInput = ({ className, classNameInput }: Props) => {
	const { focus, setFocus, searchQ, setSearchQ, products, setProducts } =
		useSearch()
	// закрытие окна по клику в пустую область
	const ref = React.useRef<null>(null)
	useClickAway(ref, () => {
		setFocus(false)
		setSearchQ('')
	})
	// -------------------------------------

	useDebounce(
		async () => {
			try {
				const res = await Api.products.search(searchQ)
				setProducts(res)
			} catch (error) {
				console.log(error)
			}
		},
		150, // задержка при поиске продукта
		[searchQ]
	)

	const onClickProduct = () => {
		setFocus(false)
		setSearchQ('')
		setProducts([])
	}
	return (
		<>
			{focus && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />
			)}
			<div ref={ref} className={className}>
				<div
					className={cn(
						'flex relative z-31 items-center pl-5 py-4 rounded-2xl bg-[#f9f9f9]',
						'w-[700px] max-[1280px]:w-[600px] max-[1140px]:w-[500px] max-[1025px]:w-[400px]',
						'max-[915px]:w-full',
						classNameInput
					)}
				>
					<div className='border-r-2 pr-3'>
						<Search size={18} className='text-[#c0c0c0] ' />
					</div>
					<input
						type='text'
						placeholder='Поиск...'
						className={cn(
							'placeholder:text-[#c0c0c0] pl-3',
							'w-[700px] max-[1280px]:w-[600px] max-[1140px]:w-[500px] max-[1025px]:w-[400px] max-[915px]:w-[800px]',
							'max-[915px]:w-full',
							classNameInput
						)}
						onFocus={() => setFocus(true)}
						value={searchQ}
						onChange={e => setSearchQ(e.target.value)}
					/>
				</div>
				{products.length > 0 && (
					<div
						className={cn(
							'absolute bg-white rounded-xl py=2 shadow-md transition-all duration-200 invisible opacity-0 z-31 py-2',
							'w-[764px] max-[1280px]:w-[600px] max-[1140px]:w-[500px] max-[1025px]:w-[400px]',
							'max-[915px]:w-[96%] max-[915px]:mr-4',
							'max-[730px]:w-[95%]',
							'max-[585px]:w-[93%]',
							'max-[470px]:w-[92%]',
							'max-[436px]:w-[91%]',

							focus && 'visible opacity-100 mt-2'
						)}
					>
						{products.map(({ name, id, price, imageUrl }, i) => (
							<Link
								href={`/product/${id}`}
								onClick={() => onClickProduct()}
								key={i}
							>
								<div className='px-3 flex items-center gap-4 py-2 hover:bg-primary/10'>
									<Image src={imageUrl} width={30} height={30} alt='img' />
									<p>{name}</p>
									{price !== null && (
										<p className='text-[14px] text-[#858585]'>{price}₽</p>
									)}
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
