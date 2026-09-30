"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Filter, BarChart2, Shapes, AlignLeft } from "lucide-react";

import data from "@/data/courses.json";
import { LIME, BLUE, WRAP } from "@/lib/theme";
import CourseCard from "@/app/components/CourseCard";

// Swap with your own file, e.g. "/purepearl.png"
const CREATOR_AVATAR =
  "https://res.cloudinary.com/dcgt2umdd/image/upload/v1790766549/Ellipse_1_dzz8sn.png";

const TOOLBAR_BTN =
  "flex h-12 items-center gap-2 rounded-full border border-zinc-300 px-4 text-lg text-zinc-800 transition hover:bg-zinc-50";

export default function CreatorPage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      {/* ===================== 1. CREATOR HERO ===================== */}
      <section className="relative w-full overflow-hidden bg-[#003be2] px-4 pb-[82px] pt-[38px] text-white selection:bg-[#d4fb20] selection:text-black sm:px-6 xl:px-0">
        {/* Grid lines: vertical 110px (same as navbar), horizontal 120px */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: "110px 100%, 100% 120px",
            backgroundPosition: "0 0, 0 105px",
          }}
        />

        <div className={`relative z-10 ${WRAP}`}>
          {/* Profile row */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] bg-[#f9a8c9] sm:h-24 sm:w-24 sm:rounded-[22px]">
              <Image
                src={CREATOR_AVATAR}
                alt="PurePearl Studio"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-3xl font-semibold leading-[48px] tracking-tight text-white sm:text-[40px]">
                  PurePearl Studio
                </h1>
                <span
                  className="inline-flex h-[35px] items-center rounded-full px-[23px] text-base text-black"
                  style={{ background: LIME }}
                >
                  Creator
                </span>
              </div>
              <p className="mt-[7px] text-lg font-light leading-7 text-white">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio (two paragraphs, no gap between them, like the design) */}
          <div className="mt-10 text-lg font-light leading-[29px] text-white">
            <p>
              Welcome to the creative world of PurePearl Studio. Here,
              you&apos;ll discover the passion, expertise, and inspiration that
              drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>

          {/* Stats + Follow */}
          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-[46px] items-center gap-2 rounded-full bg-white px-6 text-lg text-zinc-900">
                <span style={{ color: BLUE }}>3</span>
                Products
              </div>
              <div className="flex h-[46px] items-center gap-2 rounded-full bg-white px-6 text-lg text-zinc-900">
                <span style={{ color: BLUE }}>{followerCount}</span>
                Followers
              </div>
            </div>

            <button
              onClick={handleFollowToggle}
              className={`h-[46px] rounded-full px-[26px] text-lg font-medium text-black transition-all active:scale-95 ${
                isFollowing
                  ? "bg-white hover:bg-zinc-100"
                  : "hover:brightness-95"
              }`}
              style={isFollowing ? undefined : { background: LIME }}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* ===================== 2. TOOLBAR + GRID ===================== */}
      <section className="w-full px-4 pb-[62px] pt-[62px] sm:px-6 xl:px-0">
        <div className={WRAP}>
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button className={TOOLBAR_BTN}>
                <Filter className="h-5 w-5" strokeWidth={2} />
                Filter
              </button>
              <button className={TOOLBAR_BTN}>
                <BarChart2 className="h-5 w-5" strokeWidth={2.5} />
                Level
              </button>
              <button className={TOOLBAR_BTN}>
                <Shapes className="h-5 w-5" strokeWidth={1.75} />
                Category
              </button>
            </div>

            <button className={TOOLBAR_BTN}>
              <AlignLeft className="h-5 w-5" strokeWidth={2} />
              Most relevant
            </button>
          </div>

          {/* Course grid: creator page shows "26+" in the badge */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {data.courses.map((course) => (
              <CourseCard key={course.id} course={course} studentsLabel="26+" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
