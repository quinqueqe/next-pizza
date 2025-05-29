import { create } from 'zustand'

type AuthType = {
	loadingBtn: string
	loadingLoginOrRegisterBtn: string
	setLoadingBtn: (value: string) => void
	setLoadingLoginOrRegisterBtn: (value: string) => void
}

export const useAuth = create<AuthType>()(set => ({
	loadingBtn: '',
	loadingLoginOrRegisterBtn: '',
	setLoadingBtn: value => set({ loadingBtn: value }),
	setLoadingLoginOrRegisterBtn: value =>
		set({ loadingLoginOrRegisterBtn: value }),
}))
