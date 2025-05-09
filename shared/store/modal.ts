import { create } from 'zustand'

interface ModalType {
	activeSize: number
	activeType: number
	setActiveSize: (value: number) => void
	setActiveType: (value: number) => void
}

export const useModal = create<ModalType>()(set => ({
	activeSize: 1,
	activeType: 0,
	setActiveSize: value => set({ activeSize: value }),
	setActiveType: value => set({ activeType: value }),
}))
