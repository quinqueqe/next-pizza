import { create } from 'zustand'

type CheckoutType = {
	submitting: boolean
	setSubmitting: (value: boolean) => void
}

export const useCheckout = create<CheckoutType>()(set => ({
	submitting: false,
	setSubmitting: value => set({ submitting: value }),
}))
