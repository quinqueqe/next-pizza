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
			<div>Dashboard Header</div>
			<main className='min-h-screen'>{children}</main>
		</>
	)
}
