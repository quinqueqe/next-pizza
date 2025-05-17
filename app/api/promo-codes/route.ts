import prisma from '@/prisma/prisma'
import {  NextResponse } from 'next/server'

export async function GET() {
	
	const promoCodes = await prisma?.promo.findMany()
	return NextResponse.json(promoCodes)
}
