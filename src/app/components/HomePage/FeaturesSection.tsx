import React from "react";
import Image from "next/image";
import { Check, Star,  } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 py-20 md:py-32 overflow-hidden">
      {/* Ambient Blurred Background Glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[420px] h-[420px] bg-[#c6f800]/25 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[420px] h-[420px] bg-[#0b56fd]/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#c6f800]/20 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 md:space-y-44">
        {/* ========================================================================= */}
        {/* ROW 1: Your Path to Professional Growth Starts Here!                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-10 sm:gap-14 mt-10 pt-4">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0b56fd] tracking-tight block">
                  12K
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0b56fd] tracking-tight block">
                  70+
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#0b56fd] tracking-tight block">
                  16
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Collage Visual */}
          <div className="relative w-full max-w-lg mx-auto h-[440px] sm:h-[480px] flex items-center justify-center">
            {/* Background Course Card */}
            <div className="absolute left-0 top-4 w-64 sm:w-72 bg-white rounded-2xl border border-gray-100 p-3 shadow-xl z-0 scale-90 sm:scale-100 origin-top-left opacity-90">
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80"
                  alt="Figma course"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold text-xs text-gray-900">
                Learn Figma from Basic
              </h4>
              <p className="text-[10px] text-blue-500 font-medium">
                by purepearl studio
              </p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-[#0b56fd]">
                  $25{" "}
                  <span className="text-[9px] text-gray-400 font-normal">
                    /lifetime
                  </span>
                </span>
              </div>
            </div>

            {/* Central Student Cutout */}
            <div className="relative z-10 w-[280px] sm:w-[340px] h-[380px] sm:h-[440px] translate-x-4">
              <Image
                src="/home_human.png"
                alt="Student"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Floating Lime Spring Ornament */}
            <div className="absolute right-0 top-6 w-20 h-28 pointer-events-none z-20">
              <svg
                viewBox="0 0 100 140"
                fill="none"
                className="w-full h-full text-[#c6f800] drop-shadow-lg"
              >
                <path
                  d="M20,20 C80,10 90,45 50,55 C10,65 15,95 60,95 C95,95 80,130 30,130"
                  stroke="currentColor"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Learning Progress Card */}
            <div className="absolute right-0 sm:-right-4 bottom-12 z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-gray-100 min-w-[170px] sm:min-w-[190px]">
              <span className="text-[11px] font-semibold text-gray-500 block">
                Learning Progress
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 my-1">
                55%
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden mt-1.5">
                <div
                  className="bg-[#c6f800] h-full rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Create & Manage Courses Easily.                                    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Collage Visual */}
          <div className="relative w-full max-w-lg mx-auto h-[460px] sm:h-[500px] flex items-center justify-center order-last lg:order-first">
            {/* Total Revenue Card (Top Left) */}
            <div className="absolute left-0 sm:left-4 top-4 z-20 bg-[#0b56fd] text-white p-4 rounded-2xl shadow-xl w-40 sm:w-44 border border-blue-400/20">
              <span className="text-[10px] text-blue-200 block font-medium">
                Total Revenue
              </span>
              <span className="text-[9px] text-blue-300 block mb-1">
                July 1-28
              </span>
              <div className="text-lg sm:text-xl font-black mb-2">$120.29</div>
              <div className="w-full bg-blue-900/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#c6f800] h-full rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

            {/* Year to Date Card (Mid Left) */}
            <div className="absolute left-0 sm:left-4 top-36 z-20 bg-[#0b56fd] text-white p-4 rounded-2xl shadow-xl w-40 sm:w-44 border border-blue-400/20">
              <span className="text-[10px] text-blue-200 block font-medium">
                Year to Date
              </span>
              <span className="text-[9px] text-blue-300 block mb-0.5">
                2023
              </span>
              <div className="text-lg sm:text-xl font-black mb-1.5">
                $1,200.38
              </div>
              <span className="bg-[#c6f800] text-black text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                +128
              </span>
            </div>

            {/* Female Creator / Student Photo */}
            <div className="relative z-10 w-[290px] sm:w-[360px] h-[400px] sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Creator with tablet"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Floating Lime Spring Ornament */}
            <div className="absolute right-4 sm:right-10 top-1/3 w-20 h-28 pointer-events-none z-10">
              <svg
                viewBox="0 0 100 140"
                fill="none"
                className="w-full h-full text-[#c6f800] drop-shadow-lg"
              >
                <path
                  d="M20,20 C80,10 90,45 50,55 C10,65 15,95 60,95 C95,95 80,130 30,130"
                  stroke="currentColor"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Happy Students Floating Badge */}
            <div className="absolute right-0 sm:right-2 bottom-6 z-20 bg-white p-3.5 rounded-2xl shadow-2xl border border-gray-100 min-w-[170px]">
              <h4 className="font-bold text-xs text-gray-900">
                Happy Students
              </h4>
              <div className="flex items-center gap-1 text-[11px] text-gray-700 font-semibold my-1">
                <span>4.5</span>
                <span className="text-gray-400 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline -mt-0.5" />
              </div>
              <div className="flex items-center -space-x-1.5 mt-2">
                <img
                  className="w-6 h-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=faces"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces"
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border border-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=faces"
                  alt=""
                />
                <div className="w-6 h-6 rounded-full border border-white bg-[#c6f800] text-black font-bold text-[8px] flex items-center justify-center">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content & Checklist */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6 mb-8">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0b56fd] flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
