import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-[#0b56fd] text-white py-20 sm:py-24 md:py-32 px-6 overflow-hidden selection:bg-[#c6f800] selection:text-black">
      {/* 1. Subtle Grid Stripes Overlay */}
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

      {/* 2. 3D Ornaments Image Overlay */}
      <div className="pointer-events-none select-none absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src="/3d ornament.png"
          alt="3D Ornaments"
          fill
          priority
          className="object-contain md:object-cover w-full h-full"
        />
      </div>

      {/* 3. Text & Action Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>

        <p className="text-blue-100/85 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mt-6 mb-8 font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/join-creator"
          className="bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 text-black font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
