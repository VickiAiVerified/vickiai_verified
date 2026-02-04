import { clerkMiddleware } from "@clerk/nextjs/server";

// We rename the export to "proxy" to match the new 2026 file convention
export default clerkMiddleware();

export const config = {
  matcher: [
    // This tells the bouncer to skip images and internal files, but check everything else
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
