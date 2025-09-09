import { NextResponse, type NextRequest } from 'next/server'

import { PublicPages } from '@/shared/constants/public-pages.constants'
import { token } from '@/shared/lib/token-services'

export function middleware(request: NextRequest) {
  const isLoggedIn = !!request.cookies.get(token.accessToken)

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL(PublicPages.LOGIN, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
