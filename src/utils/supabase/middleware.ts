import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // This will refresh the session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const url = request.nextUrl.clone()

  // Protect admin routes
  // Also explicitly exclude the forgot-password and update-password routes so they can be accessed!
  const isAuthRoute = request.nextUrl.pathname.startsWith('/admin/login') || 
                      request.nextUrl.pathname.startsWith('/admin/forgot-password') ||
                      request.nextUrl.pathname.startsWith('/admin/update-password')

  if (request.nextUrl.pathname.startsWith('/admin') && !isAuthRoute) {
    if (!user || user.email !== 'vivekp@iamtowork.com') {
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  // Redirect to admin dashboard if already logged in
  if (request.nextUrl.pathname === '/admin/login' && user) {
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
