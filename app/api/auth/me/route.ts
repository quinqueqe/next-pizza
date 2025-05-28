import { getUserSession } from '@/shared/lib/get-user-session'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const user = await getUserSession()

		if (!user) {
			return NextResponse.json(
				{ message: 'Вы не зарегестрированы' },
				{ status: 401 }
			)
		}

		const data = await prisma?.user.findFirst({
			where: {
				id: Number(user.id),
			},
			select: {
				email: true,
				fullName: true,
				password: false,
			}
		})

		return NextResponse.json(data)
	} catch (err) {
		console.log(err)
		return NextResponse.json(
			{ message: '[USER_GET] Server error' },
			{ status: 500 }
		)
	}
}
