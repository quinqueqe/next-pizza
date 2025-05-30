import React from 'react'
import { Metadata } from 'next'
import { InfoBlock } from '@/shared/components'

export const metadata: Metadata = {
	title: 'Страница не найдена | Next Pizza',
}

export default function NotFound() {
	return (
		<div className='h-full flex justify-center items-center pt-40'>
			<InfoBlock
				title='Страница не найдена'
				text='Проверьте корректность введённого адреса или повторите попытку позже'
				imageUrl='/assets/images/not-found.png'
			/>
		</div>
	)
}
