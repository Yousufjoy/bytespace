"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Filter, BarChart2, LayoutGrid, ArrowUpDown, Star } from "lucide-react";

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

export default function CreatorPage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full bg-white text-zinc-900 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. CREATOR HERO HEADER BANNER                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0b56fd] text-white pt-12 pb-14 px-6 overflow-hidden selection:bg-[#c6f800] selection:text-black">
        {/* Subtle Background Grid Stripes */}
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

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Creator Profile Info */}
          <div className="flex items-center gap-5 mb-6">
            {/* Avatar with Pinkish Background */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#fbcfe8] overflow-hidden relative shadow-lg shrink-0 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                alt="PurePearl Studio"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Name + Badge + Role */}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  PurePearl Studio
                </h1>
                <span className="bg-[#c6f800] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Creator
                </span>
              </div>
              <p className="text-blue-100/90 text-xs sm:text-sm font-medium mt-1">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-3 max-w-4xl text-xs sm:text-sm text-blue-100/85 leading-relaxed font-normal mb-8">
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

          {/* Bottom Bar: Stats Pills & Follow Button */}
          <div className="flex items-center justify-between gap-4 pt-2">
            {/* Metric Pills */}
            <div className="flex items-center gap-2.5">
              <div className="bg-white text-zinc-900 px-5 py-2 rounded-full text-xs font-medium shadow-md">
                <strong className="text-[#0b56fd] font-extrabold text-sm mr-1">
                  3
                </strong>
                Products
              </div>
              <div className="bg-white text-zinc-900 px-5 py-2 rounded-full text-xs font-medium shadow-md">
                <strong className="text-[#0b56fd] font-extrabold text-sm mr-1">
                  {followerCount}
                </strong>
                Followers
              </div>
            </div>

            {/* Follow Button */}
            <button
              onClick={handleFollowToggle}
              className={`text-xs sm:text-sm px-8 py-2.5 rounded-full font-bold shadow-md transition-all active:scale-95 ${
                isFollowing
                  ? "bg-white text-zinc-900 hover:bg-gray-100"
                  : "bg-[#c6f800] hover:bg-[#b5e300] text-black"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTERS & TOOLBAR                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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

        {/* ========================================================================= */}
        {/* 3. PUBLISHED COURSES GRID                                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {CREATOR_COURSES.map((course) => (
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
                  by{" "}
                  <span className="underline cursor-pointer">
                    {course.author}
                  </span>
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
      </section>
    </div>
  );
}
