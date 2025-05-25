'use client';

import React from 'react'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'

type Props = {
	children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
	return (
		<>
			<SessionProvider>{children}</SessionProvider>
			<Toaster />
			<NextTopLoader />
		</>
	)
}
