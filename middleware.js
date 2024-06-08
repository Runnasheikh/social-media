import { clerkMiddleware } from '@clerk/nextjs/server';

export default function customClerkMiddleware(req, res, next) {
  // Exclude specific routes from the Clerk middleware
  const excludedRoutes = ['/api/webhook'];

  if (excludedRoutes.some(route => req.url.startsWith(route))) {
    return next(); // Skip Clerk middleware for excluded routes
  }

  return clerkMiddleware()(req, res, next);
}

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};
