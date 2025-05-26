import React from 'react'
import { cn } from '@/shared/lib'
import { redirect } from 'next/navigation'

type Props = {
	className?: string
}

export default function ProfilePage({ className }: Props) {
	
	return (
		<>
			{session ? (
				<div className={cn('', className)}></div>
			) : (
				redirect('/not-auth')
			)}
		</>
	)
}
