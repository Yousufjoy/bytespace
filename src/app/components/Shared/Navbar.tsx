import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const NAV_BG: React.CSSProperties = {
  backgroundColor: "#003be2",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
  backgroundSize: "max(min(8.3333vw,110px),60px) max(min(8.3333vw,110px),60px)",
};

export default function Navbar() {
  return (
    <header
      className="relative z-50 h-[72px] w-full text-white md:h-[min(8.3333vw,110px)]"
      style={NAV_BG}
    >
      {/* Same width rule as the page content: 83.333% of the viewport (1200px at 1440px), max 1700px */}
      <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] xl:w-[83.333%] xl:max-w-[1700px] xl:px-0">
        {/* LOGO */}
        <Link href="/" className="block justify-self-start">
          <Image
            src="/Header_Logo.png"
            alt="ByteSpace"
            width={168}
            height={33}
            priority
            className="h-auto w-[145px] md:w-[clamp(145px,12vw,175px)]"
          />
        </Link>

        {/* CENTER NAVIGATION */}
        <nav className="hidden items-center md:flex md:gap-[clamp(32px,3.5vw,56px)]">
          <Link
            href="/"
            aria-current="page"
            className="text-[16px] font-medium text-white transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-[16px] font-medium text-white/90 transition-colors hover:text-white lg:text-[18px]"
          >
            Courses
          </Link>

          <Link
            href="/coursemaker"
            className="text-[16px] font-medium text-white/90 transition-colors hover:text-white lg:text-[18px]"
          >
            Creators
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6 justify-self-end md:gap-[clamp(24px,2.5vw,40px)]">
          <Link
            href="/login"
            className="text-[16px] font-medium transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="text-[16px] font-medium transition-colors hover:text-[#cbfc01] lg:text-[18px]"
          >
            Join Us
          </Link>

          <button
            aria-label="Cart"
            className="rounded transition-colors hover:text-[#cbfc01] focus-visible:outline-2 focus-visible:outline-[#cbfc01]"
          >
            <ShoppingBag
              className="h-[21px] w-[21px] lg:h-[23px] lg:w-[23px]"
              strokeWidth={1.6}
            />
          </button>
        </div>
      </div>
    </header>
  );
}