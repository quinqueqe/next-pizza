'use client'

import React from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Props = {
	items: {
		text: string
		value: string
	}[]
	name: string
	limit: number
}

export const CheckboxFiltersGroup = ({ items, name, limit }: Props) => {
	const [inputValue, setInputValue] = React.useState<string>('')
	const [showList, setShowList] = React.useState<boolean>(false)

	const filterItems = items.filter(item =>
		item.text.toLowerCase().includes(inputValue.toLowerCase())
	)
	return (
		<div className='pb-10'>
			<h4>{name}</h4>
			{showList && (
				<div className='pb-[16px]'>
					<Input
						value={inputValue}
						onChange={e => setInputValue(e.currentTarget.value)}
						type='text'
						placeholder='Поиск...'
					/>
				</div>
			)}
			<div
				className={
					showList
						? `flex gap-4 flex-col pb-5 h-[350px]  overflow-y-auto`
						: `flex gap-4 flex-col pb-5 h-[250px] overflow-y-auto`
				}
			>
				{filterItems.map((item, i) => (
					<FilterCheckbox key={i} value={item.value} text={item.text} />
				))}
			</div>
			{items.length > limit && (
				<button
					onClick={() => setShowList(!showList)}
					className='text-[16px] font-normal text-orange-500 pt-4'
				>
					{showList ? 'Скрыть' : '+ Показать всё'}
				</button>
			)}
		</div>
	)
}
