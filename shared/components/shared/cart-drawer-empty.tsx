import { cn } from '@/shared/lib'
import Image from 'next/image'

type Props = {
	children?: React.ReactNode
	className?: string
}

export const CartDrawerEmpty = ({ children, className }: Props) => {
	return (
		<>
			{children}
			<div
				className={cn(
					'flex flex-col justify-center items-center h-[100%] text-center gap-4',
					className
				)}
			>
				<Image
					src={'/assets/images/dog-with-box.svg'}
					alt='img'
					width={315}
					height={200}
				/>
				<div className='text-center flex flex-col justify-center items-center gap-1'>
					<p className='text-[22px] font-semibold'>Пока тут пусто</p>
					<p className='text-[14px] opacity-70 w-[70%]'>
						Добавьте пиццу. Или две! А мы доставим ваш заказ в течение часа
					</p>
				</div>
			</div>
		</>
	)
}
