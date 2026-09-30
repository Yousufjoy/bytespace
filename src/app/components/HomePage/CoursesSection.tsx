"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  BarChart2,
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

// Design frame is 1440px wide; values below are design px (1 design px = 1 css px at 1440).
const LIME = "#d4fb20"; // brand lime for UI (buttons, pills, badges)
const BLUE = "#003be2"; // brand blue
const INK = "#060a1f"; // headings

// Filter pills: one array per row, exactly as the design breaks them (they also wrap on small screens).
const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
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

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces",
  "https://i.pravatar.cc/80?img=47",
];

const LEARNING_PATHS = [
  { label: "Design", Icon: PenTool },
  { label: "Development", Icon: Code2 },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

const CARD_SHADOW = "shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="w-full bg-white px-4 pb-24 pt-12 sm:px-6">
      <div className="mx-auto w-full xl:w-[83.333%] xl:max-w-[1700px]">
        {/* ================= Header ================= */}
        <div className="text-center">
          <h2
            className="text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-[44px]"
            style={{ color: INK }}
          >
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="mx-auto mt-5 max-w-[930px] text-[15px] leading-[1.625] text-[#8f939b] sm:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* ================= Filter pills ================= */}
        <div className="mt-8 flex flex-col items-center gap-y-3 lg:mt-[43px] lg:gap-y-6">
          {CATEGORY_ROWS.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-x-[18px] gap-y-3"
            >
              {row.map((cat) => {
                const isMore = cat === "+ More";
                const isActive = activeTab === cat;
                if (isMore) {
                  return (
                    <button
                      key={cat}
                      className="h-10 text-[15px] font-medium"
                      style={{ color: BLUE }}
                    >
                      {cat}
                    </button>
                  );
                }
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`h-10 rounded-full px-[15px] text-[15px] font-medium transition-colors ${
                      isActive
                        ? "text-black"
                        : "bg-[#f5f5f6] text-[#55575f] hover:bg-[#ececee]"
                    }`}
                    style={isActive ? { background: LIME } : undefined}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* ================= Courses grid ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {COURSES.map((course) => (
             <Link
    key={course.id}
    href={`/courses/${course.id}`}
    className="block"
  >
            <article
              key={course.id}
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

              {/* Level pill + avatars (avatars sit right after the pill, not pushed to the edge) */}
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

              {/* Price (no divider line in the design) */}
              <div className="mt-4 flex items-baseline leading-[30px]">
                <span className="text-[18px] font-bold" style={{ color: BLUE }}>
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

        {/* ================= Learning paths ================= */}
        <div className="mt-16 text-center lg:mt-[70px]">
          <h2
            className="text-2xl font-semibold leading-[1.2] sm:text-3xl lg:text-[36px]"
            style={{ color: INK }}
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-5 max-w-[930px] text-[15px] leading-[1.625] text-[#8f939b] sm:text-[18px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-10">
          {LEARNING_PATHS.map(({ label, Icon }) => (
            <button
              key={label}
              className={`flex h-[168px] flex-col items-center rounded-[18px] xl:aspect-[167/168] xl:h-auto xl:justify-center xl:pt-0 border border-[#ececee] bg-white pt-[38px] transition-shadow hover:shadow-md ${CARD_SHADOW}`}
            >
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: LIME }}
              >
                <Icon className="h-6 w-6 text-[#0a0a1a]" strokeWidth={1.75} />
              </span>
              <span
                className="mt-[18px] text-[16px] font-medium leading-6"
                style={{ color: INK }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
