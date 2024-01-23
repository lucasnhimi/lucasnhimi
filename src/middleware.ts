import { authMiddleware } from '@clerk/nextjs';
import { AdminMiddleware } from './lib/middleware/admin';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req, evt) {
    return AdminMiddleware(auth, req);
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
