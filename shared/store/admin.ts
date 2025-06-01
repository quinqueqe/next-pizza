import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type AdminType = {
	role: string
	setRole: (value: string) => void
}

export const useAdmin = create<AdminType>()(
	devtools(set => ({
		role: 'USER',
		setRole: value => set({ role: value }),
	}))
)
