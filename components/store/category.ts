import { create } from 'zustand'

type CategoryType = {
	activeId: number
	setAcitveId: (value: number) => void
}

export const useCategory = create<CategoryType>()(set => ({
	activeId: 1,
	setAcitveId: value => set({ activeId: value + 1 }),
}))
