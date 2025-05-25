import React from 'react'
import { cn } from '@/shared/lib'
import { Button } from '../ui'
import { signIn } from 'next-auth/react'

type Props = {
	provider?: string
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
	className?: string
	text?: string
	image?: React.ReactNode
}

export const AuthModalBtn = ({ provider, variant, className, text, image }: Props) => {
	return (
		<Button
			onClick={() =>
				signIn(provider, {
					callbackUrl: '/',
					redirect: true,
				})
			}
			variant={variant}
			className={cn('flex items-center gap-1 w-[120px]', className)}
		>
			{image}
			{text}
		</Button>
	)
}
