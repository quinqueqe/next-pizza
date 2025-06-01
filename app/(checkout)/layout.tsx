import {HeaderProvider } from '@/shared/components/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Оформление заказа | Next Pizza',
}

export default function CheckoutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className='min-h-screen bg-[#f4f1ee]'>
				<HeaderProvider/>
				{children}
			</main>
		</>
	)
}
