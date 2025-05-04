import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const q = req.nextUrl.searchParams.get('q') || ''
	const products = await prisma?.product.findMany({
		where: {
			name: {
				contains: q,
				mode: 'insensitive', // чувствительность к регистру (теперь не важно с какой буквы)
			},
		},
		take: 5, // будет полученно не более 5 продуктов
	})

	return NextResponse.json(products)
}
