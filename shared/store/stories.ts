import { create } from 'zustand'
import { Api } from '../services/api-client'
import { IStory } from '@/@types/stories'

type StoriesType = {
	stories: IStory[]
	status: string
	open: boolean
	selectedStory: IStory | null
	setStories: () => void
	setOpen: (value: boolean) => void
	setSelectedStory: (value: IStory) => void
}

export const useStories = create<StoriesType>()(set => ({
	stories: [],
	status: 'loading',
	open: false,
	selectedStory: null,
	setStories: async () => {
		try {
			const data = await Api.stories.getStories()
			set({ stories: data, status: 'success' })
		} catch (err) {
			console.log('[STORIES_GET_API Server error', err)
			set({ stories: [], status: 'error' })
		}
	},
	setOpen: value => set({ open: value }),
	setSelectedStory: value => set({ selectedStory: value }),
}))
