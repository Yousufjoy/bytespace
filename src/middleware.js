import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (request) => {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Get NextAuth token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect logged-in users away from login page
  if (pathname === "/login" && token) {
    if (token.role === "admin") return NextResponse.redirect(new URL("/admin", url));
    // fallback for other roles
    return NextResponse.redirect(new URL("/", url));
  }

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) return NextResponse.redirect(new URL("/login", url)); // not logged in
    if (token.role !== "admin") return NextResponse.redirect(new URL("/", url)); // wrong role
  }

  // Allow everything else
  return NextResponse.next();
};

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
