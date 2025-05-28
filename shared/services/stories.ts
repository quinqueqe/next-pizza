import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'
import { Story } from '@prisma/client'

export const getStories = async (): Promise<Story[]> => {
	return (
		await axiosInstance.get<Story[]>(ApiRoutes.STORIES)
	).data
}
