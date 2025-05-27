import React from 'react'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/shared/lib/get-user-session'
import { Container, ProfileForm } from '@/shared/components'

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

	return (
		<Container>
			<ProfileForm user={user!} titleClassName='text-[36px]' />
		</Container>
	)
}
