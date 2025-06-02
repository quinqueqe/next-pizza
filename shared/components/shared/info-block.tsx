import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Title } from './title'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

interface Props {
	title: string
	text: string
	className?: string
	imageUrl?: string
}

export const InfoBlock: React.FC<Props> = ({
	className,
	title,
	text,
	imageUrl,
}) => {
	return (
		<div
			className={cn(
				className,
				'flex items-center justify-between w-[840px] gap-12',
				'max-[830px]:flex max-[830px]:flex-col-reverse max-[830px]:items-center max-[830px]:justify-center max-[830px]:gap-8'
			)}
		>
			<div
				className={cn(
					'flex flex-col',
					'max-[830px]:items-center max-[830px]:justify-center'
				)}
			>
				<div
					className={cn(
						'w-[445px]',
						'max-[830px]:flex max-[830px]:flex-col max-[830px]:items-center max-[830px]:justify-center',
						'max-[450px]:w-full'
					)}
				>
					<Title
						size='lg'
						text={title}
						className={cn('font-extrabold pb-3', 'max-[640px]:text-[28px]')}
					/>
					<p
						className={cn(
							'text-gray-400 text-lg',
							'max-[830px]:text-center',
							'max-[640px]:text-[16px]'
						)}
					>
						{text}
					</p>
				</div>

				<div className='flex gap-5 mt-6'>
					<Link href='/'>
						<Button variant='outline' className='gap-2'>
							<ArrowLeft />
							На главную
						</Button>
					</Link>
					<Link href=''>
						<Button
							variant='outline'
							className='text-gray-500 border-gray-400 hover:bg-gray-50 hover:text-gray-600'
						>
							Обновить
						</Button>
					</Link>
				</div>
			</div>

			<img
				src={imageUrl}
				alt={title}
				className={cn(
					'w-[300px] h-[300px]'
					// 'max-[460px]:w-[250px] max-[460px]:h-[250px]'
				)}
			/>
		</div>
	)
}
