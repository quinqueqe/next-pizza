import * as React from 'react'

import { cn } from '../../lib'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot='textarea'
			className={cn(
				'border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				'focus-visible:border-primary border-2 focus-visible:ring-ring/50 transiton duration-200 ease-in-out',
				className
			)}
			{...props}
		/>
	)
}

export { Textarea }
