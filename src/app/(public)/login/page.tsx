"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

/* ------------------------------ Assets ------------------------------ */

// Swap these with your own avatar / course images
const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
];

const DASHBOARD_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80";
const BACK_CARD_IMG =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80";

/* --------------------------- Small components --------------------------- */

function Avatar({ src, size }: { src: string; size: number }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-full object-cover"
    />
  );
}

function CourseCard({
  className = "",
  image,
  imageClassName = "",
  title,
  showRating,
}: {
  className?: string;
  image: string;
  imageClassName?: string;
  title: string;
  showRating?: boolean;
}) {
  return (
    <div
      className={`absolute h-[383px] w-[373px] overflow-hidden rounded-[28px] bg-white p-4 text-zinc-900 shadow-[0_20px_40px_-12px_rgba(0,0,60,0.25)] ${className}`}
    >
      {/* Image + pills */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-[18px] bg-zinc-300">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover ${imageClassName}`}
        />
        <div className="absolute bottom-3 left-3.5 flex gap-2.5">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((p) => (
            <span
              key={p}
              className="flex h-[31px] items-center whitespace-nowrap rounded-full bg-zinc-400/50 px-3 text-[13px] text-zinc-700 backdrop-blur-md"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-[21px] flex items-start justify-between">
        <h4 className="text-[22px] font-medium leading-7 text-zinc-900">
          {title}
        </h4>
        {showRating && (
          <div className="flex items-center gap-1 pr-1 text-lg leading-7 text-zinc-600">
            4.5
            <Star className="h-[18px] w-[18px] fill-[#d4ff1f] text-[#d4ff1f]" />
          </div>
        )}
      </div>
      <p className="mt-0.5 text-[13px] leading-[18px] text-zinc-500">
        by <span className="text-[#0b56fd]">purepearl studio</span>
      </p>

      {/* Level + avatars */}
      <div className="mt-[17px] flex items-center gap-[11px]">
        <span className="flex h-8 items-center gap-1.5 rounded-full bg-zinc-100 px-3.5 text-sm text-zinc-600">
          <BarChart2 className="h-3.5 w-3.5" strokeWidth={2.5} />
          Beginner
        </span>
        <div className="flex items-center -space-x-2">
          {AVATARS.slice(0, 4).map((a, i) => (
            <span key={i} className="rounded-full ring-2 ring-white">
              <Avatar src={a} size={32} />
            </span>
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white ring-2 ring-white">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-2.5 flex items-baseline">
        <span className="text-2xl font-semibold leading-8 text-[#0b56fd]">
          $25
        </span>
        <span className="ml-0.5 text-xs font-light text-zinc-500">
          /lifetime
        </span>
      </div>
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in:", formData);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b56fd] px-6 py-24 text-white selection:bg-[#d4ff1f] selection:text-black lg:py-[120px]">
      {/* Background grid: 120px squares */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "0 118px",
        }}
      />

      {/* Logo (top-left, aligned with content edge) */}
      <div className="absolute inset-x-0 top-[35px] z-10 px-6">
        <div className="mx-auto max-w-[1200px]">
          <Link href="/" aria-label="ByteSpace home" className="inline-block">
            <svg width="30" height="33" viewBox="0 0 30 33" fill="none">
              <path
                d="M3 3.5C3 1.6 4.4 0.5 6 0.5C7.6 0.5 9 1.6 9 3.5V11.5C10.5 10.5 12.3 10 14.2 10C20 10 25 14 25 20.5C25 27 20 32 13.5 32C9.5 32 6.5 30.5 4.6 28.2C3.5 26.9 3 25.3 3 23.5V3.5Z"
                fill="#d4ff1f"
              />
              <circle cx="14" cy="21" r="5" fill="#0b56fd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_579px] lg:gap-0">
        {/* ====================== LEFT COLUMN ====================== */}
        <div>
          <h1 className="text-[22px] font-semibold leading-7 text-white">
            Sign in with ease
          </h1>
          <p className="mt-3 max-w-[460px] text-lg font-light leading-[29px] text-white">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          {/* Collage */}
          <div className="relative mt-[87px] hidden h-[558px] w-[496px] lg:block">
            {/* Back card */}
            <CourseCard
              className="left-0 top-[90px] z-10"
              image={BACK_CARD_IMG}
              imageClassName="grayscale brightness-125 contrast-75"
              title="Build Digital Asset"
            />

            {/* Front card */}
            <CourseCard
              className="left-[111px] top-0 z-20"
              image={DASHBOARD_IMG}
              title="the Power of Big Data"
              showRating
            />

            {/* Lime torus */}
            <div className="pointer-events-none absolute left-[50px] top-[40px] z-30 h-[94px] w-[102px] -rotate-[25deg] rounded-full border-[27px] border-[#d4ff1f] shadow-[0_12px_20px_-6px_rgba(90,130,0,0.45),inset_0_-6px_10px_rgba(120,170,0,0.35)]" />

            {/* Lime pyramid */}
            <svg
              viewBox="0 0 125 140"
              className="pointer-events-none absolute left-0 top-[418px] z-30 h-[140px] w-[125px] drop-shadow-[0_10px_12px_rgba(0,60,0,0.25)]"
            >
              <polygon points="92,0 0,102 78,137" fill="#d8ff2a" />
              <polygon points="92,0 78,137 125,128" fill="#bfeb0c" />
            </svg>

            {/* Happy Students card */}
            <div className="absolute left-[226px] top-[435px] z-20 h-[123px] w-[258px] rounded-2xl bg-[#d4ff1f] px-4 pt-3.5 text-black shadow-[0_16px_30px_-10px_rgba(0,60,0,0.3)]">
              <h5 className="text-base font-medium leading-6">
                Happy Students
              </h5>
              <div className="flex items-center gap-1 text-[11px] leading-4">
                <span className="font-semibold">4.5</span>
                <span className="text-black/50">(240)</span>
                <Star className="h-3.5 w-3.5 fill-[#0b56fd] text-[#0b56fd]" />
              </div>
              <div className="mt-2.5 flex items-center -space-x-1.5">
                {AVATARS.map((a, i) => (
                  <span key={i} className="rounded-full ring-2 ring-[#d4ff1f]">
                    <Avatar src={a} size={38} />
                  </span>
                ))}
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-zinc-900 text-[13px] font-semibold text-white ring-2 ring-[#d4ff1f]">
                  2K+
                </span>
              </div>
            </div>

            {/* White coil */}
            <svg
              viewBox="0 0 100 120"
              fill="none"
              className="pointer-events-none absolute left-[381px] top-[350px] z-30 h-[122px] w-[116px] -rotate-[20deg] drop-shadow-[0_6px_8px_rgba(0,0,60,0.2)]"
            >
              <path
                d="M20,15 C75,10 85,35 50,45 C15,55 20,80 55,80 C85,80 75,110 30,110"
                stroke="#ffffff"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* ====================== LOGIN CARD ====================== */}
        <div className="w-full rounded-[32px] bg-white p-7 text-zinc-900 sm:px-[63px] sm:pb-10 sm:pt-[62px] lg:w-[579px]">
          <span className="block text-lg leading-7 text-[#0b56fd]">
            Sign In
          </span>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:mt-[39px]">
            <div>
              <label className="mb-1.5 block text-sm leading-5 text-zinc-900">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="designer@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-[52px] w-full rounded-[14px] border border-zinc-200 bg-[#fdfdfd] px-6 text-lg font-light text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm leading-5 text-zinc-900">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="********"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="h-[52px] w-full rounded-[14px] border border-zinc-200 bg-[#fdfdfd] px-6 text-lg font-light text-zinc-900 outline-none transition placeholder:text-sm placeholder:text-zinc-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd]"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="h-[46px] w-[104px] cursor-pointer rounded-full bg-[#d4ff1f] text-lg font-medium text-black transition-all hover:bg-[#c6ee00] active:scale-95"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* or divider */}
          <div className="mt-12 flex items-center gap-5 sm:mt-[87px]">
            <span className="h-px flex-1 bg-zinc-300" />
            <span className="text-base leading-6 text-zinc-500">or</span>
            <span className="h-px flex-1 bg-zinc-300" />
          </div>

          {/* Social buttons */}
          <div className="mt-11 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-zinc-300 transition hover:bg-zinc-50 active:scale-95"
            >
              <svg
                className="h-9 w-9 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Sign in with Google"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-zinc-300 transition hover:bg-zinc-50 active:scale-95"
            >
              <svg
                className="h-9 w-9 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>
          </div>

          {/* Register link */}
          <p className="mt-12 text-center text-lg font-light leading-6 text-zinc-500 sm:mt-[75px]">
            New user?{" "}
            <Link href="/register" className="text-[#0b56fd] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
