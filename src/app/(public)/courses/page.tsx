"use client";

import React, { useState } from "react";
import Image from "next/image";

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

// Filter Tags
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

// Base Course Templates (repeated to generate the 3x6 grid)
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
  }))
);

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white text-zinc-900 min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. BLUE HEADER HERO BANNER                                               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0b56fd] text-white py-14 sm:py-20 px-6 overflow-hidden">
        {/* Grid Stripes Background */}
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

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-8">
            Find Your Next Course
          </h1>

          {/* Search Bar + Courses Dropdown */}
          <div className="w-full max-w-xl flex items-center gap-2.5">
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white text-zinc-900 rounded-full text-sm outline-none placeholder:text-gray-400 shadow-md focus:ring-2 focus:ring-[#c6f800]"
              />
            </div>
            
            <button className="bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 transition-all text-black font-semibold text-sm px-6 py-3 rounded-full shadow-md flex items-center gap-1.5 shrink-0">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTERS & TOOLBAR                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        
        {/* Row 1: Filter Buttons Left & Sort Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
              <Filter className="w-3.5 h-3.5 text-gray-500" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span>Level</span>
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
              <LayoutGrid className="w-3.5 h-3.5 text-gray-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Button */}
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
            <span>Most relevant</span>
          </button>
        </div>

        {/* Row 2: Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  isActive
                    ? "bg-[#c6f800] text-black font-semibold shadow-sm"
                    : "bg-[#f1f3f6] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. COURSES GRID (3 COLUMNS)                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200/80 p-3.5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Thumbnail with overlay badges */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom Badges */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white">
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {course.lessons} Lessons
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {course.comments} Comments
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="px-1.5 flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 tracking-tight line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 shrink-0">
                    <span>{course.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-gray-400 text-gray-400" />
                  </div>
                </div>

                <p className="text-xs text-blue-500 font-medium mb-3">
                  by <span className="underline cursor-pointer">{course.author}</span>
                </p>

                {/* Level + Avatars */}
                <div className="flex items-center justify-between pt-1 pb-3">
                  <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full text-[11px] font-medium text-gray-600">
                    <BarChart2 className="w-3 h-3 text-gray-500" />
                    <span>{course.level}</span>
                  </div>

                  {/* Student Avatars Stack */}
                  <div className="flex items-center -space-x-1.5">
                    <img
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop"
                      alt=""
                    />
                    <img
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                      alt=""
                    />
                    <img
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop"
                      alt=""
                    />
                    <div className="w-5 h-5 rounded-full border border-white bg-[#c6f800] text-black font-bold text-[8px] flex items-center justify-center">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-gray-100 flex items-baseline">
                  <span className="text-base font-extrabold text-[#0b56fd]">
                    ${course.price}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium ml-1">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 4. PAGINATION                                                            */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-3 py-16">
          {/* Previous Page */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-xs font-semibold transition ${
                currentPage === page
                  ? "text-black font-black"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>
    </div>
  );
}