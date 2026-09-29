import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

// Replace with your own avatar assets if you have them
const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=47",
];

export default function HeroPage() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#0038e0]"
      style={{
        // subtle 100px grid from the design
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
        backgroundPosition: "center top",
      }}
    >
      {/* 3D ornaments: z-30 so they sit above the lime arch (ring + spring overlap it in the design) */}
      <div className="pointer-events-none select-none absolute inset-0 z-30">
        <Image
          src="/3d ornament.png"
          alt=""
          aria-hidden
          fill
          priority
          className="object-contain md:object-cover"
        />
      </div>

      <main className="relative z-20 max-w-6xl mx-auto px-4 pt-10 md:pt-16 pb-0 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.2] text-white mb-6">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="text-[15px] leading-6 text-white/90 max-w-3xl mb-10 md:mb-12">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search bar (button is slightly shorter and top-aligned, as in the design) */}
        <div className="w-full max-w-[490px] mb-8 flex items-start gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full h-11 pl-11 pr-4 bg-white text-zinc-900 rounded-full text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#c6f800]"
            />
          </div>
          <button className="h-[37px] px-5 rounded-full bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 transition text-black text-sm font-medium">
            Search
          </button>
        </div>

        {/* Hero graphic */}
        <div className="relative w-full max-w-7xl h-[300px] sm:h-[340px] md:h-[394px] overflow-hidden flex justify-center items-end">
          {/* Lime arch: a big circle clipped by the container */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 md:top-[30px] aspect-square w-[560px] sm:w-[720px] md:w-[965px] rounded-full bg-[#c6f800]" />

          {/* Person cutout */}
          <div className="relative z-10 h-full w-[300px] sm:w-[340px] md:w-[620px]">
            <Image
              src="/home_human.png"
              alt="Student with laptop"
              fill
              priority
              sizes="420px"
              className="object-contain object-bottom select-none pointer-events-none"
            />
          </div>

          {/* Floating cards: anchored to the container's center so they hold their place at any width */}

          {/* UI/UX Design */}
          <div className="hidden md:block absolute z-20 left-1/2 -ml-[263px] top-[76px] rounded-xl bg-white p-3.5 text-left shadow-lg shadow-black/5">
            <h4 className="text-sm font-medium text-zinc-900">UI/UX Design</h4>
            <p className="mt-0.5 whitespace-nowrap text-[10px] text-gray-400">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Learning Progress */}
          <div className="hidden md:block absolute z-20 left-1/2 ml-[104px] top-[86px] w-[194px] rounded-xl bg-white p-3.5 text-left shadow-lg shadow-black/5">
            <span className="block text-[11px] text-zinc-700">
              Learning Progress
            </span>
            <div className="my-1 text-[40px] font-semibold leading-tight text-zinc-900">
              55%
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#c6f800]" />
            </div>
          </div>

          {/* Happy Students */}
          <div className="hidden md:block absolute z-20 left-1/2 -ml-[326px] top-[242px] rounded-xl bg-white p-3 text-left shadow-lg shadow-black/5">
            <h4 className="text-[13px] font-medium text-zinc-900">
              Happy Students
            </h4>
            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
              <span>4.5</span>
              <span className="text-gray-400">(240)</span>
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-2 flex items-center -space-x-2.5">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#c6f800] text-[10px] font-semibold text-black">
                2K+
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
