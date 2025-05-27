import React from 'react'

interface Props {
	code: string
}

export const VerificationUserTemplate = ({ code }: Props) => (
	<div>
		<p>
			Код подтверждения: <h1>{code}</h1>
		</p>

		<a href={`${process.env.NEXT_URL}/checkout`}>Подтвердить регистрацию</a>
	</div>
)
