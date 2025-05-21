import React from 'react'
import {
	CheckoutAddressInput,
	// CheckoutClearFormBtn,
	CheckoutFormTextarea,
	CheckoutWhiteBlock,
} from '@/shared/components'
import { Controller, useFormContext } from 'react-hook-form'

export const CheckoutAddressForm = () => {
	const { control } = useFormContext()
	return (
		<>
			<CheckoutWhiteBlock title='Адрес доставки'>
				<div className='flex flex-col gap-6 pb-10'>
					<div>
						<Controller
							control={control}
							name='address'
							render={({ field, fieldState }) => (
								<>
									<CheckoutAddressInput
										onChange={field.onChange}
										placeholder='Введите адрес'
									/>
									{fieldState.error?.message && (
										<p className='text-red-500 text-[13px] pt-1'>
											{fieldState.error.message}
										</p>
									)}
									{/* {field.value && (
										<CheckoutClearFormBtn onClick={onClickClear} />
									)} */}
								</>
							)}
						/>
					</div>
					<CheckoutFormTextarea
						placeholder='Комментарий к заказу'
						name='comment'
					/>
				</div>
			</CheckoutWhiteBlock>
		</>
	)
}
