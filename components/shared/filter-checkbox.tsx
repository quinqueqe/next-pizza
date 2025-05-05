'use client'

import { Checkbox } from '@/components/ui/checkbox'

type Props = {
	name: string
	value: string
	onCheckedChange?: (checked: string) => void
	checked?: boolean
}

export function FilterCheckbox({
	name,
	value,
	onCheckedChange,
	checked,
}: Props) {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				id={`checkbox-${String(value)}`}
				checked={checked}
				value={value}
				onCheckedChange={onCheckedChange}
				className='rounded-[8px] w-6 h-6'
			/>
			<label
				htmlFor={`checkbox-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{name}
			</label>
		</div>
	)
}
