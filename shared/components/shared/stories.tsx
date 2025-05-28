'use client'

import React from 'react'
import { useStories } from '@/shared/store'
import Image from 'next/image'

export const Stories = () => {
	const { items, setItems } = useStories()

	React.useEffect(() => {
		setItems()
	}, [])
	return (
		<ul className=''>
			{items.map(item => (
				<li key={item.id}>
					<Image src={item.previewImageUrl} alt='img' width={50} height={50} />
				</li>
			))}
		</ul>
	)
}
