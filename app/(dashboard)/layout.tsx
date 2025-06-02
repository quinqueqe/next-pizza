import type { Metadata } from 'next'
import { HeaderProvider } from '@/shared/components'

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
				<HeaderProvider />
				{children}
			</main>
		</>
	)
}
