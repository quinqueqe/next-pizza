import { create } from 'zustand'

type AuthType = {
	loadingBtn: string
	setLoadingBtn: (value: string) => void
}

export const useAuth = create<AuthType>()(set => ({
	loadingBtn: '',
	setLoadingBtn: value => set({ loadingBtn: value }),
}))
