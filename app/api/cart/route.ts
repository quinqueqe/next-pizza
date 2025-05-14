import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	// const userId = 1
	const token = req.cookies.get('cartToken')?.value

	if (!token) {
		return NextResponse.json({ totalAmount: 0, items: [] })
	}
	const userCart = await prisma?.cart.findFirst({
		where: {
			OR: [
				// {
				// 	userId,
				// },
				{
					token,
				},
			],
		},
		include: {
			items: {
				include: {
					productItem: {
						include: {
							product: true,
						},
					},
					ingredients: true,
				},
			},
		},
	})

	return NextResponse.json(userCart)
}
