import React from 'react'
import {
	CheckoutInputBlock,
	CheckoutWhiteBlock,
} from '@/shared/components/shared'

export const CheckoutPersonalForm = () => {
	return (
		<>
			<CheckoutWhiteBlock title='Персональная информация'>
				<div className='grid grid-cols-2 gap-6 pb-10 pt-[30px]'>
					<CheckoutInputBlock label='Имя' placeholder='Введите ваше имя' />
					<CheckoutInputBlock
						label='Фамилия'
						placeholder='Введите вашу фамилию'
					/>
					<CheckoutInputBlock
						label='E-Mail'
						placeholder='Введите вашу почту'
						type='email'
					/>
					<CheckoutInputBlock
						label='Номер телефона'
						placeholder='Введите ваш номер телефона'
						type='tel'
					/>
				</div>
			</CheckoutWhiteBlock>
		</>
	)
}
