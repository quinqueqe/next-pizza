'use client'

import React from 'react'
import { Container } from './container'
import { Skeleton } from '../ui'
import { useStoriesInfo } from '@/shared/hooks'
import InstaStories from 'react-insta-stories'
import { X } from 'lucide-react'
import { cn } from '@/shared/lib'

export const Stories = () => {
	const { stories, status, open, setOpen, onClickStory, selectedStory } =
		useStoriesInfo()
	// const skeleton = Array.from({ length: 6 }, () => (
	// 	<Skeleton
	// 		className='w-[200px] h-[240px] rounded-2xl '
	// 		key={Math.random()}
	// 	/>
	// ))

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [open])
	return (
		<Container>
			<ul className='flex gap-4 overflow-x-auto overflow-y-hidden h-[260px] w-full pt-4'>
				{status === 'success' ? (
					stories.map(story => (
						<li
							key={story.id}
							className='cursor-pointer relative flex-shrink-0 w-[200px] h-[240px]'
						>
							<img
								onClick={() => {
									if (story.items.length > 0) {
										onClickStory(story)
										window.scrollTo(0, 0)
									}
								}}
								className={cn('rounded-2xl object-cover w-full h-full')}
								src={story.previewImageUrl}
								alt='img'
							/>
						</li>
					))
				) : status === 'loading' ? (
					<Skeleton className='w-full rounded-2xl' />
				) : (
					status === 'error' && <div>Error</div>
				)}

				{open && (
					<div
						className='absolute left-0 top-0 w-full h-full bg-black/80 flex items-center justify-center z-40'
						onClick={() => setOpen(false)}
					>
						<div className='relative w-[520px]'>
							<button
								className='absolute right-3 top-5 z-1000 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer'
								onClick={() => setOpen(false)}
							>
								<X className='w-6 h-6 text-black' />
							</button>

							<InstaStories
								onAllStoriesEnd={() => setOpen(false)}
								stories={
									selectedStory?.items.map(item => ({ url: item.sourceUrl })) ||
									[]
								}
								defaultInterval={5000}
								width={520}
								height={800}
							/>
						</div>
					</div>
				)}
			</ul>
		</Container>
	)
}
