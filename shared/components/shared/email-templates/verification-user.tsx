import React from 'react'

interface Props {
	code: string
}

export const VerificationUserTemplate = ({ code }: Props) => (
	<div>
		<p>Введите код подтверждения или перейдите по ссылке ниже:</p>
		<h2>{code}</h2>

		<a href={`${process.env.NEXT_URL}/api/auth/verify?code=${code}`}>
			Подтвердить регистрацию
		</a>
	</div>
)
