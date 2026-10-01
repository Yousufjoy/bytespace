"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Menu, ShoppingBag, X, ChevronRight } from "lucide-react";

const NAV_BG: React.CSSProperties = {
  backgroundColor: "#003be2",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
  backgroundSize: "max(min(8.3333vw,110px),60px) max(min(8.3333vw,110px),60px)",
};

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const firstName = session?.user?.name?.trim().split(" ")[0] ?? "Account";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full text-white" style={NAV_BG}>
      {/* ================= DESKTOP / MOBILE HEADER ================= */}
      <div className="mx-auto flex h-[72px] w-full items-center justify-between px-4 sm:px-6 md:h-[min(8.3333vw,110px)] xl:w-[83.333%] xl:max-w-[1700px] xl:px-0">
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/Header_Logo.png"
            alt="ByteSpace"
            width={168}
            height={33}
            priority
            className="h-auto w-[130px] sm:w-[145px] md:w-[clamp(145px,12vw,175px)]"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-[clamp(32px,3.5vw,56px)] md:flex">
          <Link
            href="/"
            className="text-[16px] font-medium text-white transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-[16px] font-medium text-white/90 transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Courses
          </Link>

          <Link
            href="/coursemaker"
            className="text-[16px] font-medium text-white/90 transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Creators
          </Link>
        </nav>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden items-center gap-[clamp(24px,2.5vw,40px)] md:flex">
          {status === "loading" ? (
            <span className="h-6 w-[120px]" aria-hidden />
          ) : session ? (
            <>
              <span
                className="max-w-[140px] truncate text-[16px] font-medium text-[#cbfc01] lg:text-[18px]"
                title={session.user?.name ?? undefined}
              >
                Hi, {firstName}
              </span>

              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="cursor-pointer whitespace-nowrap text-[16px] font-medium transition-colors hover:text-[#cbfc01] lg:text-[18px]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="whitespace-nowrap text-[16px] font-medium transition-colors hover:text-[#cbfc01] lg:text-[18px]"
              >
                Sign In
              </Link>

              <Link
                href="/registration"
                className="whitespace-nowrap text-[16px] font-medium transition-colors hover:text-[#cbfc01] lg:text-[18px]"
              >
                Join Us
              </Link>
            </>
          )}

          <button
            type="button"
            aria-label="Cart"
            className="rounded transition-colors hover:text-[#cbfc01]"
          >
            <ShoppingBag
              className="h-[21px] w-[21px] lg:h-[23px] lg:w-[23px]"
              strokeWidth={1.6}
            />
          </button>
        </div>

        {/* ================= MOBILE ACTIONS ================= */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart */}
          <button
            type="button"
            aria-label="Cart"
            className="rounded p-1 transition-colors hover:text-[#cbfc01]"
          >
            <ShoppingBag
              className="h-[21px] w-[21px] sm:h-[23px] sm:w-[23px]"
              strokeWidth={1.6}
            />
          </button>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-white/10 hover:text-[#cbfc01]"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.8} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/*                       MOBILE MENU                         */}
      {/* ========================================================= */}

      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-white/20 bg-[#003be2] shadow-xl transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "visible max-h-[600px] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-3 sm:px-8">
          {/* Navigation Links */}
          <nav>
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-white/15 py-4"
            >
              <span className="text-[17px] font-medium">Home</span>

              <ChevronRight className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-[#cbfc01]" />
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-white/15 py-4"
            >
              <span className="text-[17px] font-medium">Courses</span>

              <ChevronRight className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-[#cbfc01]" />
            </Link>

            <Link
              href="/coursemaker"
              onClick={closeMenu}
              className="group flex items-center justify-between border-b border-white/15 py-4"
            >
              <span className="text-[17px] font-medium">Creators</span>

              <ChevronRight className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-[#cbfc01]" />
            </Link>
          </nav>

          {/* Account Section */}
          <div className="mt-5">
            {status === "loading" ? (
              <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
            ) : session ? (
              <div className="flex flex-col gap-4">
                <div className="text-[15px] font-medium text-[#cbfc01]">
                  Hi, {firstName}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    signOut({ callbackUrl: "/" });
                  }}
                  className="w-fit text-[16px] font-medium transition-colors hover:text-[#cbfc01]"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="text-[16px] font-medium transition-colors hover:text-[#cbfc01]"
                >
                  Sign In
                </Link>

                <Link
                  href="/registration"
                  onClick={closeMenu}
                  className="rounded-md bg-[#cbfc01] px-5 py-2.5 text-[15px] font-semibold text-[#003be2] transition-transform hover:scale-[1.02]"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
