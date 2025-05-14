import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const userId = Number(params.id)

	const userCart = await prisma?.cart.findFirst({
		where: {
			userId,
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
