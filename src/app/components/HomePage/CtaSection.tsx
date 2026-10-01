import React from "react";
import Link from "next/link";
import { CTA_ORNAMENTS as ORN } from "./ctaOrnamentPaths";

/**
 * Design frame: 1440 x 487. On md+ everything is laid out in design pixels and scaled
 * with the section's real width (same technique as the hero). `u(n)` = n design-px.
 */
const u = (n: number) => `calc(var(--u) * ${n})`;

// Same grid as the hero so the pattern runs seamlessly between sections.
const GRID_BG: React.CSSProperties = {
  backgroundColor: "#003be2",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
  backgroundSize:
    "max(min(8.3333vw, 110px), 60px) max(min(8.3333vw, 110px), 60px)",
};

const LIME = "#d4fb20";
const HALF = 712.8; // 49.5% of 1440
const FRAME_H = 487;

function OrnamentDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-lime`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ecff3a" />
        <stop offset="1" stopColor="#d2fb1c" />
      </linearGradient>
      <linearGradient id={`${id}-white`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fefefe" />
        <stop offset="1" stopColor="#f1f1f3" />
      </linearGradient>
    </defs>
  );
}

function LeftShapes() {
  return (
    <svg
      viewBox={`0 0 ${HALF} ${FRAME_H}`}
      className="block h-full w-full"
      preserveAspectRatio="xMinYMin slice"
    >
      <OrnamentDefs id="cta-l" />
      <path d={ORN.spring} fill="url(#cta-l-lime)" />
      <path d={ORN.wsp} fill="url(#cta-l-white)" />
      <path d={ORN.cone} fill="url(#cta-l-white)" />
      <path d={ORN.torus} fill="url(#cta-l-lime)" />
    </svg>
  );
}

function RightShapes() {
  return (
    <svg
      viewBox={`${1440 - HALF} 0 ${HALF} ${FRAME_H}`}
      className="block h-full w-full"
      preserveAspectRatio="xMaxYMin slice"
    >
      <OrnamentDefs id="cta-r" />
      <path d={ORN.pyr} fill="url(#cta-r-lime)" />
      <path d={ORN.cyl} fill="url(#cta-r-white)" />
      <path d={ORN.bsp} fill="url(#cta-r-lime)" />
    </svg>
  );
}

/** Left half pinned to the left screen edge, right half to the right edge. */
function Ornaments() {
  return (
    <>
      {[
        { side: "left-0", Shapes: LeftShapes },
        { side: "right-0", Shapes: RightShapes },
      ].map(({ side, Shapes }) => (
        <div
          key={side}
          aria-hidden
          className={`pointer-events-none absolute top-0 z-10 hidden select-none overflow-hidden md:block ${side}`}
          style={{
            width: "min(49.5%, 653px)",
            aspectRatio: `${HALF} / ${FRAME_H}`,
          }}
        >
          <Shapes />
        </div>
      ))}
    </>
  );
}

export default function CtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden text-white selection:bg-[#cbfc01] selection:text-black"
      style={GRID_BG}
    >
      <Ornaments />

      {/* ============ MOBILE (< md) ============ */}
      <div className="relative z-20 mx-auto flex max-w-xl flex-col items-center px-6 py-16 text-center md:hidden">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>
        <p className="mb-8 mt-6 text-sm leading-relaxed text-white/90">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join-creator"
          className="rounded-full px-8 py-3 text-sm font-medium text-black transition hover:brightness-95 active:scale-95"
          style={{ background: LIME }}
        >
          Join as Creator
        </Link>
      </div>

      {/* ============ DESKTOP (md+): scaled 1440 x 487 canvas ============ */}
      <div className="mx-auto hidden w-full max-w-[1320px] md:block [container-type:inline-size]">
        <div
          className="relative w-full"
          style={
            {
              aspectRatio: `1440 / ${FRAME_H}`,
              "--u": "calc(100cqw / 1440)",
            } as React.CSSProperties
          }
        >
          {/* Heading */}
          <h2
            className="absolute inset-x-0 z-20 text-center font-semibold text-white"
            style={{ top: u(85), fontSize: u(42), lineHeight: u(53) }}
          >
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </h2>

          {/* Paragraph (line breaks fixed to match the design) */}
          <p
            className="absolute inset-x-0 z-20 whitespace-nowrap text-center text-white/90"
            style={{ top: u(230), fontSize: u(18), lineHeight: u(29) }}
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a
            <br />
            part of a community comprising over 10,000 local and international
            creators. Utilize our Course Editor, and showcase your
            <br />
            expertise by publishing your finest course on the ByteSpace Course
            Library.
          </p>

          {/* Button */}
          <Link
            href="/join-creator"
            className="absolute z-20 flex items-center justify-center rounded-full font-medium text-black transition hover:brightness-95 active:scale-95"
            style={{
              background: LIME,
              left: u(634),
              top: u(357),
              width: u(172),
              height: u(46),
              fontSize: u(17),
            }}
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
