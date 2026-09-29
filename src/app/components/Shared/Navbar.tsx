import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="relative z-50 mx-auto flex h-20 max-w-5xl items-center justify-between px-4 text-sm text-white md:grid md:h-[106px] md:grid-cols-[1fr_auto_1fr] bg-[#0038e0]"
      style={{
        // subtle 100px grid from the design
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
        backgroundPosition: "center top",
      }}
    >
      {/* Brand */}
      <Link href="/" className="flex items-center gap-2 justify-self-start">
        <svg
          viewBox="0 0 26 28"
          className="h-7 w-[26px]"
          fill="#c6f800"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M0 4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8.2A9 9 0 0 1 26 19a9 9 0 0 1-9 9H4a4 4 0 0 1-4-4V4zM9 15.5v7l6-3.5-6-3.5z"
          />
        </svg>

        <span className="text-xl font-bold tracking-tight">ByteSpace</span>
      </Link>

      {/* Center links */}
      <nav className="hidden items-center gap-5 md:flex">
        <Link href="/" aria-current="page" className="text-white">
          Home
        </Link>

        <Link
          href="#courses"
          className="text-white/85 transition-colors hover:text-white"
        >
          Courses
        </Link>

        <Link
          href="#creators"
          className="text-white/85 transition-colors hover:text-white"
        >
          Creators
        </Link>
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-5 justify-self-end">
        <Link href="/signin" className="transition-colors hover:text-[#c6f800]">
          Sign In
        </Link>

        <Link href="/join" className="transition-colors hover:text-[#c6f800]">
          Join Us
        </Link>

        <button
          aria-label="Cart"
          className="rounded p-0.5 transition-colors hover:text-[#c6f800] focus-visible:outline-2 focus-visible:outline-[#c6f800]"
        >
          <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
