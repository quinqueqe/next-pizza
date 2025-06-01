import { create } from 'zustand'

type AdminType = {
	role: string
	setRole: (value: string) => void
}

export const useAdmin = create<AdminType>()(set => ({
	role: 'USER',
	setRole: value => set({ role: value }),
}))
