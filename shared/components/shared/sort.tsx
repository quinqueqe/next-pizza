import { ArrowDownUp } from 'lucide-react'
import React from 'react'

export const Sort = () => {
	return (
		<div className='sort flex items-center gap-2.5'>
			<ArrowDownUp size={16} />
			<h3>Сортировка:</h3>
			<span>рейтингу</span>
		</div>
	)
}
