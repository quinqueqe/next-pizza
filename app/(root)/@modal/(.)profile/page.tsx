import React from 'react'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/shared/lib/get-user-session'
import { ProfileModal } from '@/shared/components'
import prisma from '@/prisma/prisma'

export default async function ProfilePage() {
	const session = await getUserSession()

	if (!session) {
		redirect('/not-auth')
	}

	const user = await prisma?.user.findFirst({
		where: {
			id: Number(session.id),
		},
	})

	if (!user) {
		redirect('/not-auth')
	}

	return (
		<>
			<ProfileModal user={user} />
		</>
	)
}
