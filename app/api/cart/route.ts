import prisma from '@/prisma/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const cart = await prisma?.cart.findMany()
  return NextResponse.json(cart)
}