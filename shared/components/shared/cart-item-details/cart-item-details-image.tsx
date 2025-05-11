import React from 'react'
import Image from 'next/image'

type Props = {
	imageUrl: string
}

export const CartItemDetailsImage = ({ imageUrl }: Props) => {
	return <Image alt='img' src={imageUrl} width={65} height={65} />
}
