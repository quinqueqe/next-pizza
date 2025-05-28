import { IStory } from '@/@types/stories'
import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'

export const getStories = async (): Promise<IStory[]> => {
	return (
		await axiosInstance.get<IStory[]>(ApiRoutes.STORIES)
	).data
}
