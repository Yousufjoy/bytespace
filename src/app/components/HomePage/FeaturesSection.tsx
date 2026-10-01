import React from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Assets                                                                     */
/* -------------------------------------------------------------------------- */

const THUMBNAIL =
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766312/Frame_9_d2kkz1.png";

const AVATARS = [
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_wgiqjl.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_2_n3zxi4.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766548/Ellipse_3_s43kst.png",
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_1_dzz8sn.png",
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

// 1 design-px = var(--u). Stage sets --u = 100cqw / stageWidth, so everything scales together.
const u = (n: number) => `calc(var(--u) * ${n})`;

const box = (l: number, t: number, w?: number, h?: number): React.CSSProperties => ({
  position: "absolute",
  left: u(l),
  top: u(t),
  ...(w !== undefined && { width: u(w) }),
  ...(h !== undefined && { height: u(h) }),
});

function Stage({
  w,
  h,
  className = "",
  children,
}: {
  w: number;
  h: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${w} / ${h}`, containerType: "inline-size" }}
    >
      <div
        className="absolute inset-0"
        style={{ ["--u" as string]: `calc(100cqw / ${w})` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

const CARD_SHADOW = "0 12px 32px rgba(15, 23, 42, 0.07)";

/* -------------------------------------------------------------------------- */
/* Lime 3D coil                                                               */
/* -------------------------------------------------------------------------- */

type Seg = [number, number, number, number];
const seg = (s: Seg) => `M${s[0]} ${s[1]} L${s[2]} ${s[3]}`;

function Coil({
  id,
  w,
  h,
  T,
  pts,
  back,
  front,
  style,
}: {
  id: string;
  w: number;
  h: number;
  T: number; // tube thickness
  pts: [number, number][]; // full centerline (silhouette)
  back: Seg[]; // passes that sit behind
  front: Seg[]; // passes that sit in front
  style: React.CSSProperties;
}) {
  const full = "M" + pts.map(([x, y]) => `${x} ${y}`).join(" L");

  const shade = (s: Seg) => (
    <>
      {/* lower shade */}
      <path d={seg(s)} stroke="#bff200" strokeWidth={T * 0.55} transform={`translate(0 ${T * 0.3})`} opacity={0.55} filter={`url(#${id}-b)`} />
      {/* body light */}
      <path d={seg(s)} stroke="#e6ff30" strokeWidth={T * 0.55} transform={`translate(0 ${-T * 0.1})`} opacity={0.9} filter={`url(#${id}-b)`} />
      {/* specular */}
      <path d={seg(s)} stroke="#f6ff7a" strokeWidth={T * 0.14} transform={`translate(-1 ${-T * 0.22})`} opacity={0.8} filter={`url(#${id}-b)`} />
    </>
  );

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ ...style, overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <filter id={`${id}-b`} filterUnits="userSpaceOnUse" x={-20} y={-20} width={w + 40} height={h + 40}>
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id={`${id}-c`} filterUnits="userSpaceOnUse" x={-20} y={-20} width={w + 40} height={h + 40}>
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x={0} y={0} width={w} height={h}>
          <path d={full} stroke="#fff" strokeWidth={T} />
        </mask>
      </defs>

      <g mask={`url(#${id}-m)`}>
        {/* silhouette */}
        <path d={full} stroke="#d8fc1c" strokeWidth={T} />

        {/* back passes */}
        {back.map((s, i) => (
          <g key={`b${i}`}>
            <path d={seg(s)} stroke="#d8fc1c" strokeWidth={T} />
            {shade(s)}
          </g>
        ))}

        {/* front passes (crease shadow onto the back ones, then the tube) */}
        {front.map((s, i) => (
          <g key={`f${i}`}>
            <path d={seg(s)} stroke="#9fd800" strokeWidth={T} transform={`translate(0 ${T * 0.18})`} opacity={0.6} filter={`url(#${id}-c)`} />
            <path d={seg(s)} stroke="#d8fc1c" strokeWidth={T} />
            {shade(s)}
          </g>
        ))}
      </g>
    </svg>
  );
}

/* Right visual coil (shape traced from the reference, 180 x 214) */
function CoilRight() {
  return (
    <Coil
      id="coil-r"
      w={180}
      h={214}
      T={33}
      pts={[[69, 52], [102, 53], [47, 100], [120, 95], [65, 141], [137, 135], [82, 182]]}
      back={[[102, 53, 47, 100], [120, 95, 65, 141], [137, 135, 82, 182]]}
      front={[[69, 52, 102, 53], [47, 100, 120, 95], [65, 141, 137, 135]]}
      style={box(422, 121, 180, 214)}
    />
  );
}

/* Left visual coil (shape traced from the reference, 190 x 230) */
function CoilLeft() {
  return (
    <Coil
      id="coil-l"
      w={190}
      h={230}
      T={35}
      pts={[[143, 71], [74, 70], [129, 115], [57, 112], [112, 155], [40, 154], [80, 185]]}
      back={[[143, 71, 74, 70], [129, 115, 57, 112], [112, 155, 40, 154]]}
      front={[
        [137, 67, 145, 72], // curled end cap
        [74, 70, 129, 115],
        [57, 112, 112, 155],
        [40, 154, 80, 185],
      ]}
      style={box(317, 100, 190, 230)}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Right visual (course card + learning progress)                             */
/* -------------------------------------------------------------------------- */

function RightVisual() {
  return (
    <Stage w={580} h={630} className="mx-auto max-w-[580px] lg:mx-0 lg:justify-self-end">
      {/* Course card (behind person) */}
      <div
        className="bg-white"
        style={{
          ...box(0, 65, 372, 383),
          borderRadius: u(30),
          border: "1px solid #e4e4e7",
          boxShadow: CARD_SHADOW,
        }}
      >
        {/* thumbnail */}
        <div
          className="overflow-hidden bg-zinc-200"
          style={{ ...box(15, 15, 341, 195), borderRadius: u(18) }}
        >
          <Image
            src={THUMBNAIL}
            alt="Designers working on wireframes"
            fill
            unoptimized
            sizes="341px"
            className="object-cover"
          />
          <span
            className="absolute flex items-center whitespace-nowrap bg-zinc-400/60 font-medium text-zinc-600 backdrop-blur-sm"
            style={{ left: u(12), top: u(152), height: u(30), padding: `0 ${u(12)}`, borderRadius: u(10), fontSize: u(12) }}
          >
            17 Lessons
          </span>
          <span
            className="absolute flex items-center whitespace-nowrap bg-zinc-400/60 font-medium text-zinc-600 backdrop-blur-sm"
            style={{ left: u(104), top: u(152), height: u(30), padding: `0 ${u(12)}`, borderRadius: u(10), fontSize: u(12) }}
          >
            2 hours 16 mins
          </span>
        </div>

        <h3
          className="absolute whitespace-nowrap font-semibold tracking-tight text-zinc-900"
          style={{ left: u(15), top: u(231), fontSize: u(21) }}
        >
          Learn Figma from Basic
        </h3>
        <p className="absolute text-zinc-500" style={{ left: u(15), top: u(264), fontSize: u(12) }}>
          by <span className="text-[#0b56fd]">purepearl studio</span>
        </p>

        {/* Beginner pill + avatar */}
        <div
          className="absolute flex items-center bg-zinc-100 font-medium text-zinc-600"
          style={{ left: u(15), top: u(296), height: u(32), padding: `0 ${u(13)}`, borderRadius: u(10), fontSize: u(12.5), gap: u(8) }}
        >
          <svg viewBox="0 0 16 16" style={{ width: u(14), height: u(14) }} fill="currentColor">
            <rect x="2" y="9" width="3" height="5" rx="1" />
            <rect x="6.5" y="5" width="3" height="9" rx="1" />
            <rect x="11" y="2" width="3" height="12" rx="1" opacity=".35" />
          </svg>
          Beginner
        </div>
        <div
          className="absolute overflow-hidden rounded-full bg-pink-200 ring-2 ring-white"
          style={{ left: u(125), top: u(296), width: u(32), height: u(32) }}
        >
          <Image src={AVATARS[1]} alt="" fill unoptimized sizes="32px" className="object-cover" />
        </div>

        <p className="absolute whitespace-nowrap" style={{ left: u(15), top: u(341) }}>
          <span className="font-semibold text-[#0b56fd]" style={{ fontSize: u(20) }}>
            $25
          </span>
          <span className="text-zinc-500" style={{ fontSize: u(12) }}>
            /lifetime
          </span>
        </p>
      </div>

      {/* Person (1:1 with the reference scale) */}
      <Image
        src="/Right_Visual.png"
        alt="Smiling student with headphones holding a laptop"
        width={710}
        height={690}
        priority
        className="pointer-events-none absolute h-auto max-w-none select-none"
        style={{ left: u(4), top: u(0), width: u(710) }}
      />

      {/* Learning progress card */}
      <div
        className="bg-white"
        style={{ ...box(345, 278, 232, 137), borderRadius: u(20), boxShadow: CARD_SHADOW }}
      >
        <p className="absolute whitespace-nowrap font-medium text-zinc-900" style={{ left: u(16), top: u(18), fontSize: u(14) }}>
          Learning Progress
        </p>
        <p
          className="absolute font-semibold leading-none tracking-tight text-zinc-900"
          style={{ left: u(16), top: u(44), fontSize: u(50) }}
        >
          55%
        </p>
        <div className="absolute rounded-full bg-zinc-100" style={{ left: u(16), top: u(113), width: u(200), height: u(8) }}>
          <div className="h-full rounded-full bg-[#c6f800]" style={{ width: "55%" }} />
        </div>
      </div>

      {/* Coil (front) */}
      <CoilRight />
    </Stage>
  );
}

/* -------------------------------------------------------------------------- */
/* Left visual (revenue cards + happy students)                               */
/* -------------------------------------------------------------------------- */

function LeftVisual() {
  return (
    <Stage
      w={545}
      h={620}
      className="order-last mx-auto max-w-[545px] lg:order-first lg:mx-0 lg:justify-self-start"
    >
      {/* Total revenue (behind person) */}
      <div className="bg-[#0a38e8]" style={{ ...box(0, 48, 250, 119), borderRadius: u(12) }}>
        <p className="absolute whitespace-nowrap font-medium text-white" style={{ left: u(16), top: u(16), fontSize: u(15) }}>
          Total Revenue
        </p>
        <p className="absolute text-white/70" style={{ left: u(16), top: u(35), fontSize: u(10) }}>
          July 1-28
        </p>
        <p
          className="absolute font-semibold leading-none tracking-tight text-white"
          style={{ left: u(16), top: u(55), fontSize: u(25) }}
        >
          $120.29
        </p>
        <div className="absolute rounded-full bg-white/90" style={{ left: u(16), top: u(96), width: u(220), height: u(6) }}>
          <div className="h-full rounded-full bg-[#c6f800]" style={{ width: u(111) }} />
        </div>
      </div>

      {/* Person */}
      <Image
        src="/Left_Visual.png"
        alt="Smiling creator with headphones holding a tablet"
        width={585}
        height={740}
        priority
        className="pointer-events-none absolute h-auto max-w-none select-none"
        style={{ left: u(6), top: u(0), width: u(585) }}
      />

      {/* Year to date (in front of person's sleeve) */}
      <div className="bg-[#0a38e8]" style={{ ...box(0, 198, 134, 135), borderRadius: u(12) }}>
        <p className="absolute whitespace-nowrap font-medium text-white" style={{ left: u(16), top: u(16), fontSize: u(15) }}>
          Year to Date
        </p>
        <p className="absolute text-white/70" style={{ left: u(16), top: u(35), fontSize: u(10) }}>
          2023
        </p>
        <p
          className="absolute whitespace-nowrap font-semibold leading-none tracking-tight text-white"
          style={{ left: u(16), top: u(55), fontSize: u(25) }}
        >
          $1,200.38
        </p>
        <span
          className="absolute flex items-center justify-center rounded-full bg-[#c6f800] font-semibold text-zinc-900"
          style={{ left: u(16), top: u(95), height: u(24), padding: `0 ${u(9)}`, fontSize: u(11) }}
        >
          +12$
        </span>
      </div>

      {/* Coil (front) */}
      <CoilLeft />

      {/* Happy students */}
      <div className="bg-white" style={{ ...box(283, 417, 258, 123), borderRadius: u(16), boxShadow: CARD_SHADOW }}>
        <p className="absolute whitespace-nowrap font-medium text-zinc-900" style={{ left: u(16), top: u(14), fontSize: u(16) }}>
          Happy Students
        </p>
        <p
          className="absolute flex items-center text-zinc-400"
          style={{ left: u(16), top: u(38), fontSize: u(10.5), gap: u(3) }}
        >
          <span className="font-semibold text-zinc-900">4.5</span>
          <span>(240)</span>
          <Star className="text-[#c6f800]" fill="#c6f800" strokeWidth={0} style={{ width: u(14), height: u(14) }} />
        </p>

        <div className="absolute flex items-center" style={{ left: u(16), top: u(65) }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden rounded-full bg-zinc-200 ring-2 ring-white"
              style={{ width: u(40), height: u(40), marginLeft: i === 0 ? 0 : u(-9) }}
            >
              <Image src={AVATARS[i % AVATARS.length]} alt="" fill unoptimized sizes="40px" className="object-cover" />
            </div>
          ))}
          <div
            className="flex shrink-0 items-center justify-center rounded-full bg-[#c6f800] font-semibold text-zinc-900 ring-2 ring-white"
            style={{ width: u(42), height: u(42), marginLeft: u(-9), fontSize: u(12) }}
          >
            2K+
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-24 text-zinc-900 lg:py-[120px]">
      {/* Soft ambient background glows (lime + blue) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(700px 500px at 20% 2%, rgba(198,248,0,0.32), transparent 70%)",
            "radial-gradient(400px 450px at 0% 48%, rgba(11,86,253,0.13), transparent 70%)",
            "radial-gradient(450px 450px at 0% 88%, rgba(198,248,0,0.35), transparent 70%)",
            "radial-gradient(600px 450px at 95% 95%, rgba(11,86,253,0.18), transparent 70%)",
            "radial-gradient(500px 600px at 100% 20%, rgba(11,86,253,0.06), transparent 70%)",
          ].join(","),
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-24 px-6 lg:gap-28 lg:px-[120px]">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-10">
          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px] lg:text-[52px]">
              Your Path to Professional
              <br className="hidden lg:block" />
              Growth Starts Here!
            </h2>

            <p className="mt-10 max-w-[500px] text-[17px] leading-[1.75] text-zinc-600 sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="mt-12 flex items-start gap-10 sm:gap-14">
              {[
                { value: "12K", label: "Students" },
                { value: "70+", label: "Courses" },
                { value: "16", label: "Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block text-4xl font-medium tracking-tight text-[#0b56fd] sm:text-[42px]">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[17px] text-zinc-600 sm:text-[18px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <RightVisual />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-10">
          <LeftVisual />

          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px] lg:text-[52px]">
              Create &amp; Manage
              <br className="hidden lg:block" />
              Courses Easily.
            </h2>

            <p className="mt-10 max-w-[560px] text-[17px] leading-[1.75] text-zinc-600 sm:text-[18px]">
              <strong className="font-semibold text-zinc-900">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#0b56fd] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                  </div>
                  <span className="text-[17px] font-medium text-zinc-900 sm:text-[18px]">
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