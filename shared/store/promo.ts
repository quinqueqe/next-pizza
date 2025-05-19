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
	iHavePromo: boolean
	promoCheckout: string
	setInputValue: (value: string) => void
	setPromoStatus: (value: string) => void
	setDiscount: (value: number) => void
	setIHavePromo: (value: boolean) => void
	setPromoCheckout: (value: string) => void
	fetchGetPromoCodes: () => void
}

export const usePromo = create<PromoType>()(
	devtools(set => ({
		inputValue: '',
		promoCodes: [],
		promoStatus: PromoStatus.WAITING,
		discount: 0,
		iHavePromo: true,
		promoCheckout: '',
		setInputValue: value => set({ inputValue: value }),
		setPromoStatus: value => set({ promoStatus: value }),
		setDiscount: value => set({ discount: value }),
		setIHavePromo: value => set({ iHavePromo: value }),
		setPromoCheckout: value => set({ promoCheckout: value }),
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
