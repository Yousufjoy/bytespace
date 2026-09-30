"use client";

import React, { useState } from "react";
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";


import data from "@/data/courses.json";
import { LIME, BLUE, INK, CARD_SHADOW, WRAP } from "@/lib/theme";
import CourseCard from "../CourseCard";

const LEARNING_PATHS = [
  { label: "Design", Icon: PenTool },
  { label: "Development", Icon: Code2 },
  { label: "IT & Software", Icon: Laptop },
  { label: "Business", Icon: Building2 },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="w-full bg-white px-4 pb-24 pt-12 sm:px-6">
      <div className={WRAP}>
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
          {data.categoryRows.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-x-[18px] gap-y-3"
            >
              {row.map((cat) => {
                if (cat === "+ More") {
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
                const isActive = activeTab === cat;
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
          {data.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
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
              className={`flex h-[168px] flex-col items-center rounded-[18px] border border-[#ececee] bg-white pt-[38px] transition-shadow hover:shadow-md xl:aspect-[167/168] xl:h-auto xl:justify-center xl:pt-0 ${CARD_SHADOW}`}
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
