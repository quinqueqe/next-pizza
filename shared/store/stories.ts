import { create } from 'zustand'
import { Api } from '../services/api-client'
import { Story } from '@prisma/client'
import { devtools } from 'zustand/middleware'
import { IStory } from '@/@types/stories'

type StoriesType = {
	items: Story[]
	status: string
	open: boolean
	selectedStory: Story | null
	setItems: () => void
	setOpen: (value: boolean) => void
	setSelectedStory: (value: Story) => void	
}

export const useStories = create<StoriesType>()(
	devtools(set => ({
		items: [],
		status: 'loading',
		open: false,
		selectedStory: null,
		setItems: async () => {
			try {
				const data = await Api.stories.getStories()
				set({ items: data, status: 'success' })
			} catch (err) {
				console.log('[STORIES_GET_API Server error', err)
				set({ items: [], status: 'error' })
			}
		},
		setOpen: value => set({ open: value }),
		setSelectedStory: value => set({ selectedStory: value }),
	}))
)
