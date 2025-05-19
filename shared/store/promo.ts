import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Api } from '../services/api-client'
import { Promo } from '@prisma/client'

export enum PromoStatus {
	WAITING = 'waiting',
	SUCCESS = 'success',
	ERROR = 'error',
}

type PromoType = {
	inputValue: string
	promoCodes: Promo[]
	promoStatus: string | boolean
	discount: number
	setInputValue: (value: string) => void
	setPromo: (value: string) => void
	setDiscount: (value: number) => void
	fetchGetPromoCodes: () => void
}

export const usePromo = create<PromoType>()(
	devtools(set => ({
		inputValue: '',
		promoCodes: [],
		promoStatus: PromoStatus.WAITING,
		discount: 0,
		setInputValue: value => set({ inputValue: value }),
		setPromo: value => set({ promoStatus: value }),
		setDiscount: value => set({ discount: value }),
		fetchGetPromoCodes: async () => {
			try {
				const data = await Api.promoCodes.getPromoCodes()
				set({ promoCodes: data })
				// console.log(data)
			} catch (err) {
				console.log('Не удалось найти промокоды в базе данных', err)
			}
		},
	}))
)
