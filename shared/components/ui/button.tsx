'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'
import { Loader } from 'lucide-react'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: cn('bg-primary text-primary-foreground hover:bg-primary/90'),
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-primary rounded-xl cursor-pointer  text-primary bg-transparent hover:bg-secondary hover:text-primary ',
				secondary: 'bg-[#fffaf4] text-primary hover:bg-secondary/50',
				ghost: 'hover:bg-secondary hover:text-secondary-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-11 px-4 py-3 rounded-2xl cursor-pointer',
				sm: 'h-10 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	status?: string | boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			children,
			disabled,
			status,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				disabled={disabled || status === 'loading'}
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{status === 'loading' ? (
					<Loader className='w-5 h-5 animate-spin' />
				) : (
					children
				)}
			</Comp>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
