"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Search,
  ChevronDown,
  Filter,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

/* ------------------------------ Design tokens ------------------------------ */

const LIME = "#d4fb20"; // brand lime for UI (buttons, pills, badges)
const BLUE = "#003be2"; // brand blue
const INK = "#060a1f"; // headings
const CARD_SHADOW = "shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

/* --------------------------------- Data --------------------------------- */

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const BASE_COURSES = [
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
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
  },
];

// Generate 18 items (3x6 grid)
const ALL_COURSES = Array.from({ length: 3 }).flatMap((_, cycleIndex) =>
  BASE_COURSES.map((course, idx) => ({
    ...course,
    id: cycleIndex * 6 + idx + 1,
  })),
);

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces",
  "https://i.pravatar.cc/80?img=47",
];

/* --------------------------------- Page --------------------------------- */

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      {/* ===================== 1. BLUE HERO ===================== */}
      <section className="relative w-full overflow-hidden bg-[#003be2] px-6 py-14 text-white sm:py-20">
        {/* Grid lines: vertical 110px (same as navbar), horizontal 120px */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: "110px 100%, 100% 120px",
            backgroundPosition: "0 0, 0 95px",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Find Your Next Course
          </h1>

          {/* Search Bar + Courses Dropdown */}
          <div className="flex w-full max-w-xl items-center gap-2.5">
            <div className="relative flex flex-1 items-center">
              <Search className="absolute left-4 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 shadow-md outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#d4fb20]"
              />
            </div>

            <button
              className="flex shrink-0 items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold text-black shadow-md transition-all hover:brightness-95 active:scale-95"
              style={{ background: LIME }}
            >
              <span>Courses</span>
              <ChevronDown className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== 2. FILTERS + GRID ===================== */}
      <section className="w-full px-4 pb-6 pt-10 sm:px-6">
        {/* Same container as the reference card section so the cards match exactly */}
        <div className="mx-auto w-full xl:w-[83.333%] xl:max-w-[1700px]">
          {/* Row 1: Filter buttons left, sort right */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
                <Filter className="h-3.5 w-3.5 text-gray-500" />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
                <BarChart2 className="h-3.5 w-3.5 text-gray-500" />
                <span>Level</span>
              </button>
              <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
                <LayoutGrid className="h-3.5 w-3.5 text-gray-500" />
                <span>Category</span>
              </button>
            </div>

            <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
              <ArrowUpDown className="h-3.5 w-3.5 text-gray-500" />
              <span>Most relevant</span>
            </button>
          </div>

          {/* Row 2: Category pills */}
          <div className="flex flex-wrap items-center gap-2 pb-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "font-semibold text-black shadow-sm"
                      : "bg-[#f1f3f6] text-gray-600 hover:bg-gray-200"
                  }`}
                  style={isActive ? { background: LIME } : undefined}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ================= Courses grid (card copied from reference) ================= */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ALL_COURSES.map((course) => (
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
                        2K+
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

          {/* ===================== 3. PAGINATION ===================== */}
          <div className="flex items-center justify-center gap-3 py-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-9 w-9 rounded-full text-xs font-semibold transition ${
                  currentPage === page
                    ? "font-black text-black"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
