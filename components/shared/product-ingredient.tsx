'use client';

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const ProductIngredient = ({ className }: Props) => {
	return (
		<li className={cn('p-2.5 rounded-2xl bg-[#fff] flex items-center flex-col w-100% max-w-[150px] border-2 border-solid border-white border-[#fe5f00]', className)}>
			<Image
				src='/assets/images/syrniy-bortik-test.png'
				alt='img'
				width={110}
				height={110}
				className='mb-1.5'
			/>
			<h4 className=' pb-2'>Сырный бортик</h4>
			<p className='font-semibold'>179 ₽</p>
		</li>
	)
}
