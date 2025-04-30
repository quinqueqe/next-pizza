'use client'

import { Checkbox } from '@/components/ui/checkbox'

type Props = {
	text: string
	value: string
}

export function FilterCheckbox({ text, value }: Props) {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				id={`checkbox-${String(value)}`}
				value={value}
				className='rounded-[8px] w-6 h-6'
			/>
			<label
				htmlFor={`checkbox-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
		</div>
	)
}
