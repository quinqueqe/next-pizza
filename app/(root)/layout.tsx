import type { Metadata } from 'next'
import { Header } from '@/components/shared/header'

export const metadata: Metadata = {
	title: 'Next Pizza | Главная',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='min-h-screen'>{children}</main>
		</>
	)
}
