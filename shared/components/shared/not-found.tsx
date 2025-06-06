import React from 'react'
import { Container, InfoBlock } from '@/shared/components'
import { cn } from '@/shared/lib'

export function NotFound() {
	return (
		<Container
			className={cn(
				'h-full flex justify-center items-center pt-40',
				'max-[830px]:pt-30',
				'max-[640px]:pt-25'
			)}
		>
			<InfoBlock
				title='Страница не найдена'
				text='Проверьте корректность введённого адреса или повторите попытку позже'
				imageUrl='/assets/images/not-found.png'
			/>
		</Container>
	)
}
