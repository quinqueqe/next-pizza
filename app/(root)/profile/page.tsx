import React from 'react'
import { cn } from '@/shared/lib'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/shared/lib/get-user-session'

type Props = {
	className?: string
}

export default async function ProfilePage({ className }: Props) {
	const session = await getUserSession()

	if (!session) {
		redirect('/not-auth')
	}

	return (
		<>
			<div className={cn('', className)}></div>
		</>
	)
}
