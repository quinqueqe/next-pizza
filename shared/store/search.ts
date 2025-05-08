import { Product } from '@prisma/client'
import { create } from 'zustand'

interface SearchType {
	focus: boolean
	searchQ: string
	products: Product[]
	setFocus: (value: boolean) => void
	setSearchQ: (value: string) => void
	setProducts: (value: Product[]) => void
}

export const useSearch = create<SearchType>()(set => ({
	focus: false,
	searchQ: '',
	products: [],
	setFocus: value => set({ focus: value }),
	setSearchQ: value => set({ searchQ: value }),
	setProducts: value => set({ products: value }),
}))
