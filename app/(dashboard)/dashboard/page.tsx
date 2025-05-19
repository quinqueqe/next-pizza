import React from 'react'

type Props = {
	className?: string
}

export default function DashboardPage({ className }: Props) {
	return (
		<div className={className}>
			Dashboard
			<p></p>
		</div>
	)
}
