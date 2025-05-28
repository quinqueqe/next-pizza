'use client'

import React from 'react'
import Image from 'next/image'
import { Container } from './container'
import { Skeleton } from '../ui'
import { useStoriesInfo } from '@/shared/hooks'

export const Stories = () => {
	const { items, status, onClickStory } = useStoriesInfo()
	const skeleton = Array.from({ length: 6 }, () => (
		<Skeleton
			className='w-[190px] h-[240px] rounded-2xl '
			key={Math.random()}
		/>
	))
	return (
		<Container>
			<ul className='flex justify-between pt-10'>
				{status === 'success'
					? items.map(item => (
							<li key={item.id} className='cursor-pointer'>
								<Image
									onClick={() => onClickStory(item)}
									className='rounded-2xl'
									src={item.previewImageUrl}
									alt='img'
									width={190}
									height={190}
								/>
							</li>
						))
					: status === 'loading'
						? skeleton
						: status === 'error' && <div>Error</div>}
			</ul>
		</Container>
	)
}
