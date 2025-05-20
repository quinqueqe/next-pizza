import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/shared/components/shared/header'

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
				<Header />
				{modal}
				{children}
			</main>
			<Toaster />
		</>
	)
}
