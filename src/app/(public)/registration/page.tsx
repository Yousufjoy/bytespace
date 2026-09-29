"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0b56fd] text-white overflow-hidden flex items-center justify-center p-6 sm:p-10 lg:p-16 selection:bg-[#c6f800] selection:text-black">
      {/* 1. Subtle Background Grid Stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Logo, Description & Floating Course Collage                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pt-4">
          {/* Logo & Headline */}
          <div className="max-w-md mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group mb-8"
            >
              <div className="w-8 h-8 rounded-lg bg-[#c6f800] flex items-center justify-center font-black text-black text-lg shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path d="M4 4h7a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4V4zm7 8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4v-8h7z" />
                </svg>
              </div>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              Sign up and come in
            </h1>
            <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          {/* Floating Cards Collage Area */}
          <div className="relative w-full max-w-lg h-[380px] sm:h-[420px] hidden md:block">
            {/* 3D Lime Torus (Top Left) */}
            <div className="absolute left-6 top-0 w-16 h-16 rounded-full border-[10px] border-[#c6f800] rotate-45 shadow-lg z-20 pointer-events-none" />

            {/* 3D Lime Pyramid (Bottom Left) */}
            <div className="absolute left-0 bottom-2 w-20 h-20 pointer-events-none z-30">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                className="w-full h-full text-[#c6f800] drop-shadow-xl"
              >
                <polygon points="50,10 90,85 10,85" fill="currentColor" />
              </svg>
            </div>

            {/* Floating Card 1: Back Left (Build Digital Asset) */}
            <div className="absolute left-2 top-8 w-64 bg-white text-zinc-900 rounded-3xl p-3 shadow-xl z-10 border border-gray-100 opacity-95">
              <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-2.5">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80"
                  alt="Build Digital Asset"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex gap-1.5 text-[9px] text-white">
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-xs text-gray-900">
                Build Digital Asset
              </h4>
              <p className="text-[10px] text-blue-500 font-medium mb-2">
                by purepearl studio
              </p>

              <div className="flex items-center gap-1.5 bg-gray-100 w-fit px-2 py-0.5 rounded-full text-[10px] text-gray-600 mb-2">
                <BarChart2 className="w-2.5 h-2.5" />
                <span>Beginner</span>
              </div>
              <div className="text-xs font-bold text-[#0b56fd] pt-1.5 border-t border-gray-100">
                $25{" "}
                <span className="text-[9px] text-gray-400 font-normal">
                  /lifetime
                </span>
              </div>
            </div>

            {/* Floating Card 2: Front Right (The Power of Big Data) */}
            <div className="absolute right-4 top-4 w-72 bg-white text-zinc-900 rounded-3xl p-3.5 shadow-2xl z-20 border border-gray-100">
              <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-3">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                  alt="Big Data"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] text-white">
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">
                    the Power of Big Data
                  </h4>
                  <p className="text-[10px] text-blue-500 font-medium">
                    by purepearl studio
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-700">
                  <span>4.5</span>
                  <Star className="w-3 h-3 fill-[#c6f800] text-[#c6f800]" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-2.5 mb-2">
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full text-[10px] text-gray-600">
                  <BarChart2 className="w-2.5 h-2.5" />
                  <span>Beginner</span>
                </div>
                <div className="flex items-center -space-x-1.5">
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop"
                    alt=""
                  />
                  <div className="w-5 h-5 rounded-full border border-white bg-black text-white font-bold text-[7px] flex items-center justify-center">
                    26+
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-[#0b56fd] pt-2 border-t border-gray-100">
                $25{" "}
                <span className="text-[9px] text-gray-400 font-normal">
                  /lifetime
                </span>
              </div>
            </div>

            {/* White Floating 3D Coil in Between */}
            <div className="absolute right-24 bottom-14 w-16 h-20 pointer-events-none z-30 opacity-90">
              <svg
                viewBox="0 0 100 120"
                fill="none"
                className="w-full h-full text-white drop-shadow-md"
              >
                <path
                  d="M20,15 C75,10 85,35 50,45 C15,55 20,80 55,80 C85,80 75,110 30,110"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Card 3: Lime Happy Students Badge */}
            <div className="absolute right-12 bottom-0 z-30 bg-[#c6f800] text-black p-3.5 rounded-2xl shadow-xl border border-lime-300 min-w-[180px]">
              <h5 className="font-bold text-[11px] text-black">
                Happy Students
              </h5>
              <div className="flex items-center gap-1 text-[10px] font-semibold my-1 text-black">
                <span>4.5</span>
                <span className="text-black/70">(240)</span>
                <Star className="w-3 h-3 fill-black text-black inline -mt-0.5" />
              </div>
              <div className="flex items-center -space-x-1.5 mt-1.5">
                <img
                  className="w-6 h-6 rounded-full border border-[#c6f800] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border border-[#c6f800] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border border-[#c6f800] object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop"
                  alt=""
                />
                <div className="w-6 h-6 rounded-full border border-[#c6f800] bg-black text-white font-bold text-[8px] flex items-center justify-center">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: White Form Card                                             */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl text-zinc-900">
            {/* Header */}
            <span className="text-xs sm:text-sm font-semibold text-[#0b56fd] block mb-2">
              Create an Account
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-8">
              Welcome to <br /> ByteSpace
            </h2>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd] transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none placeholder:text-gray-400 focus:border-[#0b56fd] focus:ring-1 focus:ring-[#0b56fd] transition tracking-widest"
                />
              </div>

              {/* Continue Button (Aligned Right as in Figma) */}
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 text-black font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-all cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Bottom Login Link */}
            <div className="text-center mt-12 pt-4 text-xs text-gray-500 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#0b56fd] font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
