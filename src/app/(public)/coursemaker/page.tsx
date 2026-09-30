"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, BarChart2, Shapes, AlignLeft, Star } from "lucide-react";

/* ------------------------------ Design tokens ------------------------------ */

const LIME = "#d4fb20";
const BLUE = "#003be2";
const INK = "#060a1f";
const CARD_SHADOW = "shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

// Same container the courses page uses: 1200px at a 1440px viewport
const WRAP = "mx-auto w-full xl:w-[83.333%] xl:max-w-[1700px]";

// Swap with your own file, e.g. "/purepearl.png"
const CREATOR_AVATAR =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300";

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces",
  "https://i.pravatar.cc/80?img=47",
];

/* --------------------------------- Data --------------------------------- */

const CREATOR_COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
  },
];

const TOOLBAR_BTN =
  "flex h-12 items-center gap-2 rounded-full border border-zinc-300 px-4 text-lg text-zinc-800 transition hover:bg-zinc-50";

/* --------------------------------- Page --------------------------------- */

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

          {/* Course grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {CREATOR_COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="block"
              >
                <article
                  className={`flex flex-col rounded-[18px] border border-[#cfc5c5] bg-white p-[15px] transition-shadow hover:shadow-md ${CARD_SHADOW}`}
                >
                  {/* Thumbnail + glass badges */}
                  <div className="relative h-[197px] w-full overflow-hidden rounded-[14px] xl:aspect-[341/197] xl:h-auto">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-4 bottom-[18px] flex items-center justify-between gap-2 text-[11px] text-zinc-700">
                      {[
                        `${course.lessons} Lessons`,
                        course.duration,
                        `${course.comments} Comments`,
                      ].map((label) => (
                        <span
                          key={label}
                          className="inline-flex h-[26px] items-center whitespace-nowrap rounded-full bg-white/60 px-2.5 backdrop-blur-sm"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title + rating */}
                  <div className="mt-[15px] flex items-start justify-between gap-3">
                    <h3
                      className="truncate text-[20px] font-semibold leading-[28px]"
                      style={{ color: INK }}
                    >
                      {course.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1 text-[15px] font-medium leading-[28px] text-[#767676]">
                      <span>{course.rating}</span>
                      <Star className="h-4 w-4 fill-[#cfd0d3] text-[#cfd0d3]" />
                    </div>
                  </div>

                  {/* Author */}
                  <p className="text-[11px] font-medium leading-[21px] text-[#9c9c9c]">
                    by{" "}
                    <span
                      className="cursor-pointer underline"
                      style={{ color: BLUE }}
                    >
                      {course.author}
                    </span>
                  </p>

                  {/* Level pill + avatars */}
                  <div className="mt-[14px] flex items-center">
                    <span className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-[#e6e8ec] bg-white px-2.5 text-[13px] font-medium text-[#4b4d55]">
                      <BarChart2 className="h-3.5 w-3.5 text-[#6b6e76]" />
                      {course.level}
                    </span>
                    <div className="ml-3 flex items-center">
                      {AVATARS.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={src}
                          alt=""
                          className="h-[30px] w-[30px] flex-none rounded-full border-2 border-white object-cover"
                          style={{ marginLeft: i === 0 ? 0 : -6 }}
                        />
                      ))}
                      <span
                        className="-ml-1.5 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-black"
                        style={{ background: LIME }}
                      >
                        {course.students}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline leading-[30px]">
                    <span
                      className="text-[18px] font-bold"
                      style={{ color: BLUE }}
                    >
                      ${course.price}
                    </span>
                    <span className="ml-0.5 text-[11px] text-[#a7a7a7]">
                      /lifetime
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
