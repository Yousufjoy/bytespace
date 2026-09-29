"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const COURSES = [
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

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="w-full bg-white text-zinc-900 py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            const isMore = cat === "+ More";
            return (
              <button
                key={cat}
                onClick={() => !isMore && setActiveTab(cat)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#c6f800] text-black font-semibold shadow-sm"
                    : isMore
                      ? "text-[#0b56fd] font-semibold hover:bg-gray-100"
                      : "bg-[#f1f3f6] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
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
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=faces"
                      alt=""
                    />
                    <img
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces"
                      alt=""
                    />
                    <img
                      className="w-5 h-5 rounded-full border border-white object-cover"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=faces"
                      alt=""
                    />
                    <div className="w-5 h-5 rounded-full border border-white bg-[#c6f800] text-black font-bold text-[8px] flex items-center justify-center">
                      2K+
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
      </div>
    </section>
  );
}
