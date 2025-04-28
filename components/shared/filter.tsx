import React from 'react'
import { Categories, Sort } from './'

export const Filter = () => {
	return (
		<div className='flex items-center justify-between pt-5 sticky top-0'>
			<Categories />
			<Sort />
		</div>
	)
}
