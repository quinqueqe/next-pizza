import { cn } from '@/shared/lib'
import Image from 'next/image'

type Props = {
	className?: string
}

export const CartDrawerEmpty = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center h-[100%] text-center gap-4',
				className
			)}
		>
			<Image
				src={
					'https://cdn.dodostatic.net/pizza-site/dist/assets/5aa5dac99a832c62f3ef..svg'
				}
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
	)
}
