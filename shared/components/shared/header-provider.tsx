import React from 'react'
import { Header } from './header'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	hasProfile?: boolean
}

export const HeaderProvider = ({
	hasSearch = false,
	hasCart = false,
	hasProfile = false,
}: Props) => {
	return (
		<Header hasSearch={hasSearch} hasCart={hasCart} hasProfile={hasProfile} />
	)
}
