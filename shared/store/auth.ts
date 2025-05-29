import { create } from 'zustand'

type AuthType = {
	openModal: boolean
	type: 'login' | 'register'
	loadingBtn: string
	loadingLoginOrRegisterBtn: string
	setOpenModal: (value: boolean) => void
	setType: (value: 'login' | 'register') => void
	setLoadingBtn: (value: string) => void
	setLoadingLoginOrRegisterBtn: (value: string) => void
}

export const useAuth = create<AuthType>()(set => ({
	openModal: false,
	type: 'login',
	loadingBtn: '',
	loadingLoginOrRegisterBtn: '',
	setOpenModal: (value: boolean) => set({ openModal: value }),
	setType: value => set({ type: value }),
	setLoadingBtn: value => set({ loadingBtn: value }),
	setLoadingLoginOrRegisterBtn: value =>
		set({ loadingLoginOrRegisterBtn: value }),
}))
