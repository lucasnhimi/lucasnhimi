import { AuthObject, redirectToSignIn } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_ID } from '../constants';

export async function AdminMiddleware(
  auth: AuthObject & {
    isPublicRoute: boolean;
    isApiRoute: boolean;
  },
  req: NextRequest
) {
  let isAdmin = false;
  const pathname = req.nextUrl.pathname;

  if (!auth.userId && !auth.isPublicRoute) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  console.log('user', auth.userId);

  isAdmin = auth.userId !== null && auth.userId === ADMIN_ID;

  console.log('isAdmin', isAdmin);

  if (pathname.startsWith('/admin')) {
    if (isAdmin) {
      return NextResponse.next();
    } else {
      const url = req.nextUrl.clone();
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
