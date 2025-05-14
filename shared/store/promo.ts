import { create } from 'zustand'

export enum PromoStatus {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

type PromoType = {
	inputValue: string
	promo: string | boolean
	setInputValue: (value: string) => void
	setPromo: (value: string) => void
}

export const usePromo = create<PromoType>()(set => ({
	inputValue: '',
	promo: PromoStatus.LOADING,
	setInputValue: value => set({ inputValue: value }),
	setPromo: (value) => set({ promo: value }),
}))
