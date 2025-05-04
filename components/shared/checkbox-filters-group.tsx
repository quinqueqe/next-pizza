'use client'

import React from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Props = {
	items: {
		name: string
		id: number
	}[]
	title: string
	limit: number
	loading: boolean
}

export const CheckboxFiltersGroup = ({
	items,
	title,
	limit,
	loading,
}: Props) => {
	const [inputValue, setInputValue] = React.useState<string>('')
	const [showList, setShowList] = React.useState<boolean>(false)

	const filterItems = items.filter(item =>
		item.name.toLowerCase().includes(inputValue.toLowerCase())
	)
	return (
		<div className='pb-10'>
			<h4>{title}</h4>
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
						? `flex gap-4 flex-col pb-5 h-100%`
						: `flex gap-4 flex-col pb-5 h-[250px] overflow-y-auto`
				}
			>
				{loading ? (
					<>
						{...Array(limit)
							.fill(0)
							.map((_, index) => (
								<Skeleton className='h-7 rounded-[8px] pb-3' key={index} />
							))}
					</>
				) : (
					filterItems.map((item, i) => (
						<FilterCheckbox key={i} value={String(item.id)} name={item.name} />
					))
				)}
			</div>
			{/* {items.length > limit && (  проверка сколько элементов в db*/} 
			<button
				onClick={() => setShowList(!showList)}
				className='text-[16px] font-normal text-orange-500 pt-4'
			>
				{showList ? 'Скрыть' : '+ Показать всё'}
			</button>
			{/* )} */}
		</div>
	)
}
