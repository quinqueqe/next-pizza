import React from 'react'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/shared/lib/get-user-session'
import { ProfileForm, ProfileModal } from '@/shared/components'

type Props = {
	className?: string
}

export default async function ProfilePage({ className }: Props) {
	const session = await getUserSession()

	if (!session) {
		redirect('/not-auth')
	}

	const user = await prisma?.user.findFirst({
		where: {
			id: Number(session.id),
		},
	})

	return (
		<>
			<ProfileModal user={user}/>
		</>
	)
}
