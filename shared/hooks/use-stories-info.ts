import React from 'react'
import { useStories } from '../store'
import { IStory } from '@/@types/stories'

export const useStoriesInfo = () => {
	const {
		stories,
		setStories,
		status,
		open,
		selectedStory,
		setOpen,
		setSelectedStory,
	} = useStories()

	React.useEffect(() => {
		setStories()
	}, [])

	const onClickStory = (story: IStory) => {
		setSelectedStory(story)
		setOpen(true)
	}

	return {
		stories,
		status,
		open,
		setOpen,
		onClickStory,
		selectedStory
	}
}
