'use client'

import React from 'react'
import { ProfileForm } from './profile-form'
import { User } from '@prisma/client'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { cn } from '@/shared/lib'

type Props = {
	user: User
	className?: string
}

export const ProfileModal = ({ user, className }: Props) => {
	const router = useRouter()
	const onCloseModal = () => {
		router.back()
	}
	return (
		<Dialog open={Boolean(user)} onOpenChange={() => onCloseModal()}>
			<DialogContent
				className={cn(
					'p-0 w-[800px] min-w-[800px] h-[445px] min-h-[445px] bg-white overflow-hidden rounded-4xl',
					className
				)}
			>
				<ProfileForm user={user} onCloseModal={onCloseModal}/>
			</DialogContent>
		</Dialog>
	)
}
