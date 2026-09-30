"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Filter,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


import data from "@/data/courses.json";
import { LIME, WRAP } from "@/lib/theme";
import CourseCard from "@/app/components/CourseCard";

// Generate 18 items (3x6 grid) by repeating the 6 base courses with unique ids
const ALL_COURSES = Array.from({ length: 3 }).flatMap((_, cycleIndex) =>
  data.courses.map((course, idx) => ({
    ...course,
    id: cycleIndex * data.courses.length + idx + 1,
  })),
);

const FILTER_BTN =
  "flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50";

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
        <div className={WRAP}>
          {/* Row 1: Filter buttons left, sort right */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-2.5">
              <button className={FILTER_BTN}>
                <Filter className="h-3.5 w-3.5 text-gray-500" />
                <span>Filter</span>
              </button>
              <button className={FILTER_BTN}>
                <BarChart2 className="h-3.5 w-3.5 text-gray-500" />
                <span>Level</span>
              </button>
              <button className={FILTER_BTN}>
                <LayoutGrid className="h-3.5 w-3.5 text-gray-500" />
                <span>Category</span>
              </button>
            </div>

            <button className={FILTER_BTN}>
              <ArrowUpDown className="h-3.5 w-3.5 text-gray-500" />
              <span>Most relevant</span>
            </button>
          </div>

          {/* Row 2: Category pills */}
          <div className="flex flex-wrap items-center gap-2 pb-8">
            {data.categories.map((cat) => {
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

          {/* Courses grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ALL_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
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