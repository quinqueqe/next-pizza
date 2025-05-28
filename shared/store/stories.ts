import { create } from 'zustand'
import { Api } from '../services/api-client'
import { Story } from '@prisma/client'
import { devtools } from 'zustand/middleware'

type StoriesType = {
	items: Story[]
	status: string
	setItems: () => void
}

export const useStories = create<StoriesType>()(
	devtools(set => ({
		items: [],
		status: 'loading',
		setItems: async () => {
			try {
				const data = await Api.stories.getStories()
				set({ items: data, status: 'success' })
			} catch (err) {
				console.log('[STORIES_GET_API Server error', err)
				set({ items: [], status: 'error' })
			}
		},
	}))
)
