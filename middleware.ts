import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
	const token = req.cookies.get('cartToken')?.value
	const url = req.nextUrl.clone()

	if (!token) {
		url.pathname = '/'
		return NextResponse.redirect(url);
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/checkout'],
}
