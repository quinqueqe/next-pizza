import type { Metadata } from 'next'
import { Header } from '@/shared/components/shared/header'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Главная | Next Pizza',
}

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<>
			<main className='min-h-screen'>
				<Suspense>
					<Header />
				</Suspense>
				{modal}
				{children}
			</main>
		</>
	)
}
