import React from 'react'
import { cn } from '@/shared/lib'

type Props = {
	setIsOpen: (isOpen: boolean) => void
	isOpen: boolean
}

export const Burger = ({ setIsOpen, isOpen }: Props) => {
	return (
		<>
			<button
				aria-label='Toggle menu'
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					'relative w-8 h-10 flex items-center justify-center z-1000', // h-12 больше пространства!
					'hidden max-[915px]:block'
				)}
				type='button'
			>
				<span
					className={cn(
						'absolute left-0 w-8 h-1 bg-black rounded transition-all duration-300',
						isOpen ? 'top-1/2 rotate-45 bg-white' : 'top-2'
					)}
				/>
				<span
					className={cn(
						'absolute left-0 w-6 ml-2 h-1 bg-black rounded transition-all duration-300',
						isOpen ? 'opacity-0 bg-white' : 'top-1/2 -translate-y-1/2'
					)}
				/>
				<span
					className={cn(
						'absolute left-0 w-4 ml-4 h-1 bg-black rounded transition-all duration-300',
						isOpen ? 'top-1/2 -rotate-45 ml-0 w-8 bg-white' : 'bottom-2'
					)}
				/>
			</button>
		</>
	)
}
