import { ArrowDownUp } from 'lucide-react'
import React from 'react'

export const Sort = () => {
	return (
		<div className='py-5 px-5 rounded-2xl bg-[#fafafa] flex items-center gap-2.5'>
			<ArrowDownUp size={16} />
			<h3 className='font-bold text-[16px] text-center text-[#202020]'>Сортировка:</h3>
			<span className='text-[16px] font-bold text-center cursor-pointer text-[#fe5f00]'>рейтингу</span>
		</div>
	)
}
