import { create } from 'zustand'

interface ModalType {
	activeSize: number
	activeType: number
	openDrawer: boolean
	setActiveSize: (value: number) => void
	setActiveType: (value: number) => void
	setOpenDrawer: (value: boolean) => void
}

export const useModal = create<ModalType>()(set => ({
	activeSize: 1,
	activeType: 1,
	openDrawer: false,
	setActiveSize: value => set({ activeSize: value }),
	setActiveType: value => set({ activeType: value + 1 }),
	setOpenDrawer: value => set({ openDrawer: value }),
}))
