import { create } from 'zustand'

type HeaderType = {
	isOpen: boolean
	scrollPos: number
	setIsOpen: (value: boolean) => void
	setScrollPos: (value: number) => void
}

export const useHeader = create<HeaderType>()(set => ({
	isOpen: false,
	scrollPos: 0,
	setIsOpen: value => set({ isOpen: value }),
	setScrollPos: value => set({ scrollPos: value }),
}))
