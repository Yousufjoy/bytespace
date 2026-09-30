"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  col1: [
    { label: "Featured Courses", href: "#courses" },
    { label: "Featured Categories", href: "#categories" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  col2: [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  col3: [
    { label: "Become a Creator", href: "/join-creator" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white px-6 pb-12 pt-16 text-zinc-900">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Logo & Newsletter */}
          <div className="max-w-lg lg:col-span-6">
            {/* Logo */}
            <Link href="/" className="mb-5 inline-flex items-center">
              <Image
                src="/footer.png"
                alt="ByteSpace"
                width={180}
                height={50}
                className="h-auto w-[180px] object-contain"
                priority
              />
            </Link>

            <p className="mb-6 text-xs leading-relaxed text-gray-600 sm:text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Input + Button */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mb-4 flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm rounded-full border border-gray-300 px-5 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-gray-500"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#c6f800] px-8 py-3 text-sm font-semibold text-black shadow-sm transition-all hover:bg-[#b5e300] active:scale-95"
              >
                Search
              </button>
            </form>

            <p className="text-[11px] leading-normal text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="grid grid-cols-2 gap-8 text-xs sm:grid-cols-3 sm:text-sm lg:col-span-6">
            {/* Column 1 */}
            <ul className="space-y-4">
              {FOOTER_LINKS.col1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              {FOOTER_LINKS.col2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4">
              {FOOTER_LINKS.col3.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200/80 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-black">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-black">
              Terms of Service
            </Link>

            <Link href="/cookies" className="transition hover:text-black">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
