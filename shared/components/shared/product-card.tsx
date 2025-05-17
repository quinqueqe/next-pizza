import React from 'react'
import Image from 'next/image'
import { Button } from '../ui'
import Link from 'next/link'
import { Product } from '@prisma/client'
export type ProductType = {
	product: Product
	id: number
	imageUrl: string
	name: string
	desc: string | null
	price: number
}

export const ProductCard = ({
	product,
	id,
	imageUrl,
	name,
	desc,
	price,
}: ProductType) => {
	return (
		// <div className='max-w-[250px]'>
		<Link href={`/product/${id}`}>
			<div className='bg-[#fff7ee] py-6 px-[37px] rounded-2xl'>
				<Image src={imageUrl} alt={name} width={292} height={292} />
			</div>
			<h4 className='pt-[15px] pb-2 text-[20px] font-bold '>{name}</h4>
			<p className='text-[14px] text-[#b1b1b1] h-[100px]'>{desc}</p>
			<div className='flex justify-between items-center'>
				<p className='text-[20px]'>
					{product.whProduct === 1 ? (
						<>
							<span>от</span>
							<span className='text-[20px] font-bold'> {price} ₽</span>
						</>
					) : (
						<span className='text-[20px] font-bold'> {price} ₽</span>
					)}
				</p>

				{product.whProduct === 1 ? (
					<Button variant={'secondary'} className='w-[120px] text-[16px]'>
					Выбрать
				</Button>
				) : <Button variant={'secondary'} className='w-[120px] text-[16px]'>
					В корзину
				</Button>}
			</div>
		</Link>
	)
}
