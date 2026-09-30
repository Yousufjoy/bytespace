"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Star, BarChart2 } from "lucide-react";

/* ------------------------------ Assets ------------------------------ */

// Swap these with your own avatar / course images
const AVATARS = [
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_wgiqjl.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_2_n3zxi4.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_3_s43kst.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_1_dzz8sn.png",
];

const DASHBOARD_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80";
const BACK_CARD_IMG =
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766311/Frame_11_pr9ug5.png";

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

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1. Create the account
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed. Please try again.");
        return;
      }

      // 2. Sign the user in automatically
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        // Account exists but auto sign-in failed: send to login
        router.push("/login");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-[52px] w-full rounded-[14px] border border-zinc-200 bg-[#fdfdfd] px-6 text-lg font-light text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd]";

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
        <div className="relative">
          <h1 className="text-[22px] font-semibold leading-7 text-white">
            Sign up and come in
          </h1>
          <p className="mt-3 max-w-[480px] text-lg font-light leading-[29px] text-white">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          {/* Collage (absolute, so paragraph wrapping never moves it) */}
          <div className="absolute -left-[9px] top-[278px] hidden h-[525px] w-[578px] lg:block">
            {/* Back card */}
            <CourseCard
              className="left-0 top-[56px] z-10"
              image={BACK_CARD_IMG}
              imageClassName="grayscale brightness-125 contrast-75"
              title="Build Digital Asset"
            />

            {/* Front card */}
            <CourseCard
              className="left-[206px] top-0 z-20"
              image={DASHBOARD_IMG}
              title="the Power of Big Data"
              showRating
            />

            {/* Lime torus */}
            <div className="pointer-events-none absolute left-[32px] top-[10px] z-30 h-[94px] w-[102px] -rotate-[25deg] rounded-full border-[27px] border-[#d4ff1f] shadow-[0_12px_20px_-6px_rgba(90,130,0,0.45),inset_0_-6px_10px_rgba(120,170,0,0.35)]" />

            {/* Lime pyramid */}
            <svg
              viewBox="0 0 125 140"
              className="pointer-events-none absolute left-0 top-[386px] z-30 h-[140px] w-[125px] drop-shadow-[0_10px_12px_rgba(0,60,0,0.25)]"
            >
              <polygon points="92,0 0,102 78,137" fill="#d8ff2a" />
              <polygon points="92,0 78,137 125,128" fill="#bfeb0c" />
            </svg>

            {/* Happy Students card */}
            <div className="absolute left-[226px] top-[402px] z-20 h-[123px] w-[258px] rounded-2xl bg-[#d4ff1f] px-4 pt-3.5 text-black shadow-[0_16px_30px_-10px_rgba(0,60,0,0.3)]">
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
              className="pointer-events-none absolute left-[382px] top-[317px] z-30 h-[122px] w-[116px] -rotate-[20deg] drop-shadow-[0_6px_8px_rgba(0,0,60,0.2)]"
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

        {/* ====================== REGISTER CARD ====================== */}
        <div className="flex w-full flex-col rounded-[32px] bg-white p-7 text-zinc-900 sm:px-[63px] sm:pb-[51px] sm:pt-[62px] lg:min-h-[784px] lg:w-[579px]">
          <span className="block text-lg leading-7 text-[#0b56fd]">
            Create an Account
          </span>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
            Welcome to <br /> ByteSpace
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 sm:mt-[39px]">
            <div>
              <label className="mb-1.5 block text-sm leading-5 text-zinc-900">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Jamie Davis"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className={inputClass}
              />
            </div>

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
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm leading-5 text-zinc-900">
                Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                placeholder="********"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`${inputClass} placeholder:text-sm`}
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="h-[46px] w-[123px] cursor-pointer rounded-full bg-[#d4ff1f] text-lg font-medium text-black transition-all hover:bg-[#c6ee00] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating..." : "Continue"}
              </button>
            </div>
          </form>

          {/* Login link pinned to the bottom of the card */}
          <p className="mt-12 text-center text-lg font-light leading-6 text-zinc-500 lg:mt-auto">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0b56fd] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
