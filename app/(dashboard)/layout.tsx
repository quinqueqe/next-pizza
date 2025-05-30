import { Header } from '@/shared/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard | Next Pizza',
}

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<main className='min-h-screen bg-[#f4f1ee]'>
				<Header
					className='border-[#dedede]'
					hasSearch={false}
					hasCart={false}
					hasProfile={false}
				/>
				{children}
			</main>
		</>
	)
}
