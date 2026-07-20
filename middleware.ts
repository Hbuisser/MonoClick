import { NextRequest, NextResponse } from 'next/server'

// Basic Auth gate for the internal dashboard + its mutation endpoint.
// Credentials come from DASHBOARD_USER / DASHBOARD_PASS env vars.
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*', '/api/booking-outcome', '/api/booking-outcome/:path*'],
}

export function middleware(req: NextRequest) {
  const user = process.env.DASHBOARD_USER
  const pass = process.env.DASHBOARD_PASS

  // Never expose the dashboard if credentials are not configured.
  if (!user || !pass) {
    return new NextResponse('Dashboard not configured', { status: 503 })
  }

  const auth = req.headers.get('authorization') || ''
  if (auth.startsWith('Basic ')) {
    const decoded = atob(auth.slice(6))
    const idx = decoded.indexOf(':')
    if (decoded.slice(0, idx) === user && decoded.slice(idx + 1) === pass) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="MonoClick Dashboard"' },
  })
}
