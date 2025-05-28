import prisma from '@/prisma/prisma'
import {  NextResponse } from 'next/server'

export async function GET() {
	return NextResponse.json(await prisma?.story.findMany())
}
