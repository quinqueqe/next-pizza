import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'

export async function GET(req: NextRequest) {
	try {
		const code = req.nextUrl.searchParams.get('code')

		if (!code) {
			return NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		const verificationCode = await prisma?.verifiсationCode.findFirst({
			where: {
				code,
			},
		})

		if (!verificationCode) {
			return NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		await prisma?.user.update({
			where: {
				id: verificationCode.userId,
			},
			data: {
				verified: new Date(),
			}
		})

		await prisma?.verifiсationCode.delete({
			where: {
				id: verificationCode.id
			}
		})

		return NextResponse.redirect(new URL('/?verified', req.url))
	} catch (err) {
		console.log('[VERIFY_GET] Server error', err)
	}
}
