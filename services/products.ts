import { Product } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const search = async (q: string) => { // : Promise<Product[]>
	return (
		await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: { q }, // получит все то что идет после '?'
		})
	).data
}
