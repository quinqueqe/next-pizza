import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { Ingredients } from '@prisma/client'

export const ingredients = async () : Promise<Ingredients[]> => {
	return (await axiosInstance.get<Ingredients[]>(ApiRoutes.INGREDIENTS)).data
}
