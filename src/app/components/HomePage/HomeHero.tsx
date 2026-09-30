import React from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

/**
 * The design frame is 1440px wide (grid = 12 x 120px). On md+ everything is laid out
 * in design pixels and scaled with the hero's real width, so it matches the frame at
 * any desktop size. `u(n)` = n design-px.
 */
const u = (n: number) => `calc(var(--u) * ${n})`;

// Same style goes on the Navbar (height: 8.3333vw) so the grid runs seamlessly across both.
const HERO_BG: React.CSSProperties = {
  backgroundColor: "#003be2",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
  backgroundSize:
    "max(min(8.3333vw, 110px), 60px) max(min(8.3333vw, 110px), 60px)",
};

const LIME = "#cbfc01";

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
    <section className="relative w-full overflow-hidden" style={HERO_BG}>
      {/* 3D ornaments (full-frame 1440 x 906 export). Left half is pinned to the left screen edge and
          right half to the right edge, so on wide screens they keep hugging the edges. */}
      {[
        { side: "left-0", clip: "inset(0 49.5% 0 0)" },
        { side: "right-0", clip: "inset(0 0 0 49.5%)" },
      ].map(({ side, clip }) => (
        <div
          key={side}
          aria-hidden
          className={`pointer-events-none absolute top-0 z-30 hidden select-none md:block ${side}`}
          style={{
            width: "min(100%, 1320px)",
            aspectRatio: "1440 / 906",
            clipPath: clip,
          }}
        >
          <Image
            src="/3d ornament.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* ============ MOBILE (< md): simple stacked layout ============ */}
      <div className="md:hidden px-4 pt-8 text-center">
        <h1 className="text-4xl font-semibold leading-[1.2] text-white">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm text-white/90">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mx-auto mt-6 flex max-w-md items-start gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="h-11 w-full rounded-full bg-white pl-11 pr-4 text-sm text-zinc-900 outline-none placeholder:text-gray-500"
            />
          </div>
          <button className="h-[38px] rounded-full bg-[#cbfc01] px-5 text-sm font-medium text-black">
            Search
          </button>
        </div>
        <div className="relative mx-auto mt-8 h-[300px] w-full overflow-hidden">
          <div className="absolute left-1/2 top-10 aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[#cbfc01]" />
          <div className="absolute inset-x-0 bottom-0 top-0 mx-auto w-[300px]">
            <Image
              src="/home_human.png"
              alt="Student with laptop"
              fill
              priority
              sizes="300px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* ============ DESKTOP (md+): scaled 1440 x 906 canvas ============ */}
      <div className="mx-auto hidden w-full max-w-[1320px] md:block [container-type:inline-size]">
        <div
          className="relative w-full"
          style={
            {
              aspectRatio: "1440 / 906",
              "--u": "calc(100cqw / 1440)",
            } as React.CSSProperties
          }
        >
          {/* Heading */}
          <h1
            className="absolute inset-x-0 text-center font-semibold text-white"
            style={{ top: u(50), fontSize: u(72), lineHeight: 1.2 }}
          >
            Get Access to Hundreds <br /> Courses Available
          </h1>

          {/* Subtitle */}
          <p
            className="absolute inset-x-0 whitespace-nowrap text-center text-white/90"
            style={{ top: u(256), fontSize: u(18), lineHeight: u(27) }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div
            className="absolute z-20 flex items-start"
            style={{ left: u(430), top: u(344), width: u(580), gap: u(17) }}
          >
            <div className="relative flex-none" style={{ width: u(460) }}>
              <Search
                className="absolute top-1/2 -translate-y-1/2 text-gray-500"
                style={{ left: u(27), width: u(18), height: u(18) }}
              />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full rounded-full bg-white text-zinc-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#cbfc01]"
                style={{
                  height: u(52),
                  paddingLeft: u(56),
                  paddingRight: u(20),
                  fontSize: u(17),
                }}
              />
            </div>
            <button
              className="flex-none rounded-full font-medium text-black transition hover:brightness-95 active:scale-95"
              style={{
                background: LIME,
                height: u(46),
                width: u(103),
                fontSize: u(17),
              }}
            >
              Search
            </button>
          </div>

          {/* Lime arch: circle, centre (720, 1037), radius 573.5, clipped by the frame */}
          <div
            className="pointer-events-none absolute rounded-full"
            style={{
              background: LIME,
              left: u(56.5),
              top: u(464),
              width: u(1320),
              height: u(1247),
            }}
          />

        {/* Person */}
<div
  className="pointer-events-none absolute z-10"
   style={{ left: u(423), top: u(360), width: u(700), height: u(546) }}
>
            <Image
              src="/home_human.png"
              alt="Student with laptop"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 300px"
              className="select-none object-contain object-bottom"
            />
          </div>

          {/* Card: UI/UX Design */}
          <div
            className="absolute z-20 flex flex-col justify-center bg-white text-left"
            style={{
              left: u(404),
              top: u(521),
              width: u(208),
              height: u(70),
              paddingLeft: u(18),
              borderRadius: u(14),
            }}
          >
            <h4
              className="font-medium text-zinc-900"
              style={{ fontSize: u(16), lineHeight: u(22) }}
            >
              UI/UX Design
            </h4>
            <p
              className="whitespace-nowrap text-[#8a8a8a]"
              style={{ fontSize: u(12), lineHeight: u(16), marginTop: u(2) }}
            >
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Card: Learning Progress */}
          <div
            className="absolute z-20 bg-white text-left"
            style={{
              left: u(842),
              top: u(533),
              width: u(232),
              height: u(131),
              padding: `${u(16)} ${u(16)} ${u(15)}`,
              borderRadius: u(14),
            }}
          >
            <span
              className="block text-zinc-800"
              style={{ fontSize: u(13), lineHeight: u(20) }}
            >
              Learning Progress
            </span>
            <div
              className="font-semibold text-zinc-900"
              style={{ fontSize: u(48), lineHeight: u(48), marginTop: u(9) }}
            >
              55%
            </div>
            <div
              className="w-full overflow-hidden rounded-full bg-[#f1f1f1]"
              style={{ height: u(8), marginTop: u(14) }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "55%", background: LIME }}
              />
            </div>
          </div>

          {/* Card: Happy Students */}
          <div
            className="absolute z-20 bg-white text-left"
            style={{
              left: u(328),
              top: u(719),
              width: u(258),
              height: u(121),
              paddingTop: u(17),
              paddingLeft: u(16),
              borderRadius: u(14),
            }}
          >
            <h4
              className="font-medium text-zinc-900"
              style={{ fontSize: u(16), lineHeight: u(20) }}
            >
              Happy Students
            </h4>
            <div
              className="flex items-center text-zinc-700"
              style={{ fontSize: u(13), lineHeight: u(16), gap: u(3) }}
            >
              <span>4.5</span>
              <span className="text-gray-400">(240)</span>
              <Star
                style={{
                  width: u(14),
                  height: u(14),
                  fill: "#c9e300",
                  color: "#c9e300",
                }}
              />
            </div>
            <div className="flex items-center" style={{ marginTop: u(9) }}>
              {AVATARS.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="flex-none rounded-full border-2 border-white object-cover"
                  style={{
                    width: u(43),
                    height: u(43),
                    marginLeft: i === 0 ? 0 : u(-12),
                  }}
                />
              ))}
              <div
                className="flex flex-none items-center justify-center rounded-full border-2 border-white font-semibold text-black"
                style={{
                  width: u(43),
                  height: u(43),
                  marginLeft: u(-12),
                  background: LIME,
                  fontSize: u(13),
                }}
              >
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
