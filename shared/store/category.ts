import { create } from 'zustand'

interface CategoryType {
	activeId: number
	setActiveId: (value: number) => void
}

export const useCategory = create<CategoryType>()(set => ({
	activeId: 1,
	setActiveId: value => set({ activeId: value + 1 }),
}))
