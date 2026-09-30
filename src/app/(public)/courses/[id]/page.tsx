"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Share2,
  Play,
  Star,
  Users,
  BarChart2,
  CheckCircle2,
  Video,
  Layers,
  Award,
  Headphones,
} from "lucide-react";

// Modules Data for Lesson Tab
const MODULES = [
  {
    id: 1,
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 2,
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 4,
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 5,
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 6,
    title: "Module 6: Project Showcase and Critique",
    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 7,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

// Key points for About Tab
const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

// Sneak peek images
const SNEAK_PEEK = [
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
];

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<"About" | "Lesson" | "Reviews">(
    "About",
  );

  return (
    <div className="w-full bg-white text-zinc-900 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. BLUE HEADER HERO BANNER                                               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#0b56fd] text-white pt-10 sm:pt-14 pb-48 sm:pb-56 px-6 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-6">
          {/* Course Title & Metadata */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p className="text-blue-100/90 text-sm sm:text-base mt-2 font-normal">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="text-xs text-blue-200 mt-2 font-medium">
              by{" "}
              <span className="underline cursor-pointer">purepearl studio</span>
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <span className="flex items-center gap-1.5 bg-white text-zinc-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                <span>Intermediate</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white text-zinc-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#c6f800] text-[#c6f800]" />
                <span>4.8 (172 reviews)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white text-zinc-900 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <Users className="w-3.5 h-3.5 text-gray-500" />
                <span>199 Students</span>
              </span>
            </div>
          </div>

          {/* Share Button */}
          <button className="bg-[#c6f800] hover:bg-[#b5e300] active:scale-95 transition-all text-black font-semibold text-xs px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 self-start">
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERLAPPING MAIN CONTENT (VIDEO + SIDEBAR + TABS)                     */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-40 sm:-mt-48 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ======================== LEFT COLUMN (8 COLS) ======================== */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Video Preview Player */}
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] rounded-[32px] overflow-hidden bg-gray-100 shadow-2xl border border-white/20 mb-10">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Course Video Preview"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              {/* Play Button Overlay */}
              <button
                aria-label="Play Video"
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
              >
                <Play className="w-7 h-7 text-gray-800 fill-gray-800 ml-1 group-hover:text-black transition" />
              </button>
            </div>

            {/* Tab Navigation Buttons */}
            <div className="flex items-center gap-3 mb-8">
              {(["About", "Lesson", "Reviews"] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs sm:text-sm px-6 py-2.5 rounded-full font-semibold transition-all ${
                      isActive
                        ? "bg-[#c6f800] text-black shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* ----------------- TAB 1: ABOUT ----------------- */}
            {activeTab === "About" && (
              <div className="space-y-10 text-gray-700 animate-fadeIn">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Description
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    <p>
                      Embark on an enlightening exploration into the world of
                      digital creation with our comprehensive course,
                      &quot;Build Digital Assets: A Comprehensive Guide.&quot;
                      This transformative learning experience invites you to
                      delve deep into the intricacies of crafting impactful
                      digital content. From laying the groundwork with
                      foundational concepts to mastering advanced techniques,
                      this guide is meticulously curated to empower you with the
                      skills essential for navigating the dynamic landscape of
                      digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid
                      foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation.
                      Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in
                      leveraging these elements to communicate effectively in
                      the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to
                      higher levels of expertise, delving into the nuances of
                      design principles that drive impactful creations. Uncover
                      the secrets behind effective visual communication,
                      exploring color theory, typography, and layout strategies
                      that elevate your digital assets to new heights. Engage in
                      hands-on exercises that reinforce your understanding,
                      allowing you to apply these principles in practical
                      scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak Gallery */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {SNEAK_PEEK.map((src, i) => (
                      <div
                        key={i}
                        className="relative h-28 sm:h-36 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:scale-105 transition-transform"
                      >
                        <Image
                          src={src}
                          alt="Sneak peek"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Key Points
                  </h3>
                  <div className="space-y-3">
                    {KEY_POINTS.map((pt) => (
                      <div key={pt} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0b56fd] fill-[#0b56fd]/15 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- TAB 2: LESSON ----------------- */}
            {activeTab === "Lesson" && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    Explore the Modules
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    Immerse yourself in the course content as we break down each
                    module into comprehensive lessons, providing practical
                    insights and hands-on experiences.
                  </p>
                </div>

                {/* Module List */}
                <div>
                  <h4 className="text-base font-extrabold text-gray-900 mb-4">
                    Lesson List
                  </h4>
                  <div className="space-y-4">
                    {MODULES.map((mod) => (
                      <div
                        key={mod.id}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#c6f800] flex items-center justify-center shrink-0 shadow-sm">
                          <Video className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-gray-900 mb-1">
                            {mod.title}
                          </h5>
                          <p className="text-xs text-gray-500 leading-relaxed font-normal">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Content Section */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-base font-extrabold text-gray-900 mb-2">
                    Lesson Content
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    Engage with each lesson through captivating video content,
                    detailed textual explanations, and interactive elements.
                    Download resources, complete assignments, and test your
                    understanding with quizzes.
                  </p>
                </div>

                {/* Lesson Progress Tracking */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-base font-extrabold text-gray-900 mb-2">
                    Lesson Progress Tracking
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal mb-4">
                    Witness your growth as you complete lessons, with an
                    intuitive progress tracking feature guiding you through your
                    learning journey.
                  </p>

                  {/* Progress Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm max-w-xl">
                    <span className="text-xs font-semibold text-gray-500 block">
                      Learning Progress
                    </span>
                    <div className="text-3xl font-extrabold text-gray-900 my-1">
                      55%
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mt-2">
                      <div
                        className="bg-[#c6f800] h-full rounded-full"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- TAB 3: REVIEWS ----------------- */}
            {activeTab === "Reviews" && (
              <div className="space-y-6 animate-fadeIn text-gray-700">
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                  Student Feedback & Reviews
                </h3>
                <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <span className="text-5xl font-black text-gray-900">4.8</span>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 font-medium">
                      Based on 172 student ratings
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================== RIGHT COLUMN (4 COLS - STICKY) ======================== */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xl space-y-6">
              {/* Header */}
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 tracking-tight">
                112 Lessons (24 hours)
              </h3>

              {/* Sample Lessons Preview */}
              <div className="space-y-3 pb-2 text-xs">
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  <span>01 &nbsp; Introduction to Digital Assets</span>
                  <span className="text-[#0b56fd] font-semibold">12 mins</span>
                </div>
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  <span>02 &nbsp; Design Principles for Impacts</span>
                  <span className="text-[#0b56fd] font-semibold">21 mins</span>
                </div>
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  <span>03 &nbsp; Advanced Techniques in Digital Creation</span>
                  <span className="text-[#0b56fd] font-semibold">16 mins</span>
                </div>
                <p className="text-gray-400 font-normal pt-1">99 more videos</p>
              </div>

              {/* Ready to dive in */}
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              {/* Price & Action */}
              <div className="pt-2">
                <div className="flex items-baseline mb-3">
                  <span className="text-3xl font-extrabold text-[#0b56fd] tracking-tight">
                    $25
                  </span>
                  <span className="text-xs text-gray-400 ml-1 font-medium">
                    /lifetime
                  </span>
                </div>

                <button className="w-full bg-[#c6f800] hover:bg-[#b5e300] active:scale-[0.98] transition-all text-black font-extrabold text-sm py-3.5 rounded-full shadow-md text-center">
                  Enroll Now
                </button>
              </div>

              {/* "This course include" checklist */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-extrabold text-sm text-gray-900 mb-3.5">
                  This course include
                </h4>
                <ul className="space-y-3 text-xs font-semibold text-gray-700">
                  <li className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#0b56fd]" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-[#0b56fd]" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#0b56fd]" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Headphones className="w-4 h-4 text-[#0b56fd]" />
                    <span>Private Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Creator Profile Box */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="PurePearl Studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900 leading-tight">
                      PurePearl Studio
                    </h5>
                    <span className="text-[11px] text-gray-500 font-medium">
                      Professional Creator
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed font-normal mb-4">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="w-full py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all text-center">
                  See Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
