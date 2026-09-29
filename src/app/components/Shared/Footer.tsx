'use client'
import React from "react";
import Link from "next/link";

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
    <footer className="w-full bg-white text-zinc-900 border-t border-gray-100 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left Column: Logo & Newsletter */}
          <div className="lg:col-span-6 max-w-lg">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#c6f800] flex items-center justify-center font-black text-black text-lg shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path d="M4 4h7a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4V4zm7 8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4v-8h7z" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                ByteSpace
              </span>
            </Link>

            <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Input + Button */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 mb-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm px-5 py-3 rounded-full border border-gray-300 text-sm outline-none text-gray-800 placeholder:text-gray-400 focus:border-gray-500 transition"
              />
              <button
                type="submit"
                className="bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 text-black font-semibold text-sm px-8 py-3 rounded-full shadow-sm transition-all shrink-0"
              >
                Search
              </button>
            </form>

            <p className="text-[11px] text-gray-400 leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs sm:text-sm">
            {/* Column 1 */}
            <ul className="space-y-4">
              {FOOTER_LINKS.col1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition"
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
                    className="text-gray-600 hover:text-black transition"
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
                    className="text-gray-600 hover:text-black transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-black transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
