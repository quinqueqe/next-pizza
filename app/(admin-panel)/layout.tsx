import { Header } from '@/shared/components'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Админ панель | Next Pizza',
}

export default function CheckoutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className='min-h-screen bg-[#f4f1ee]'>
				<Suspense>
					<Header
						className='border-[#dedede]'
						hasSearch={false}
						hasCart={false}
						hasProfile={false}
					/>
				</Suspense>
				{children}
			</main>
		</>
	)
}
