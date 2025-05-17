import { ApiRoutes } from './constants'
import { axiosInstance } from './instance'
import { Promo } from '@prisma/client'

export const getPromoCodes = async (): Promise<Promo[]> => {
	return (
		await axiosInstance.get<Promo[]>(ApiRoutes.PROMO_CODES)
	).data
}
