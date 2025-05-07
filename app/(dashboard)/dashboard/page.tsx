import React from 'react'

type Props = {
	className?: string
}

export default function Dashboard({ className }: Props) {
	return (
		<div className={className}>
			Dashboard
			<p></p>
		</div>
	)
}
