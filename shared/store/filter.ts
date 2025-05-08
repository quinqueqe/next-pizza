import { Ingredients } from '@prisma/client'
import { create } from 'zustand'

type FilterType = {
	inputValue: string
	showList: boolean
	priceFrom: number
	priceTo: number
	ingredients: Ingredients[]
	loading: boolean
	setInputValue: (value: string) => void
	setShowList: (value: boolean) => void
	setPriceFrom: (value: number) => void
	setPriceTo: (value: number) => void
	setIngredients: (value: Ingredients[]) => void
	setLoading: (value: boolean) => void
}

export const useFilter = create<FilterType>()(set => ({
	inputValue: '',
	showList: false,
	priceFrom: 0,
	priceTo: 1000,
	ingredients: [],
	loading: true,
	setInputValue: value => set({ inputValue: value }),
	setShowList: value => set({ showList: value }),
	setPriceFrom: value => set({ priceFrom: value }),
	setPriceTo: value => set({ priceTo: value }),
	setIngredients: value => set({ ingredients: value }),
	setLoading: value => set({ loading: value }),
}))
