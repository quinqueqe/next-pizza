import React from 'react'

type Props = {
	params: {
		id: string
	}
}

const ProductId = ({ params: { id } }: Props) => {
	return (
		<div>
			<p>{id}</p>
		</div>
	)
}
export default ProductId