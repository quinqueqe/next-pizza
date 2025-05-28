import React from 'react'
import { useStories } from '../store'
import { Story } from '@prisma/client'

export const useStoriesInfo = () => {
	const {
		items,
		setItems,
		status,
		open,
		selectedStory,
		setOpen,
		setSelectedStory,
	} = useStories()

	React.useEffect(() => {
		setItems()
	}, [])

	const onClickStory = (story: Story) => {
		setSelectedStory(story)
		setOpen(true)
	}

	return {
		items, onClickStory, status
	}
}
