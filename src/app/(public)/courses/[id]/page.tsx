"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Share2,
  Play,
  Star,
  Users,
  BarChart2,
  Check,
  Video,
  Layers,
  Award,
  Headphones,
} from "lucide-react";

/* ----------------------------- Static data ----------------------------- */

const SIDEBAR_LESSONS = [
  { no: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { no: "02", title: "Design Principles for Impacts", time: "21 mins" },
  {
    no: "03",
    title: "Advanced Techniques in Digital Creation",
    time: "16 mins",
  },
];

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

const SNEAK_PEEK = [
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
];

// Swap these with your own avatar files whenever you have them
const CREATOR_AVATAR =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";

const RATING_BARS = [
  { count: 720, pct: 92 },
  { count: 120, pct: 36 },
  { count: 21, pct: 10 },
  { count: 12, pct: 4 },
  { count: 16, pct: 5 },
];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const FILTERS: Array<"all" | 5 | 4 | 3 | 2 | 1> = ["all", 5, 4, 3, 2, 1];

/* ---------------------------- Shared classes --------------------------- */

const H2 = "text-[22px] font-medium leading-7 text-zinc-900";
const H3 = "text-xl font-medium leading-7 text-zinc-900";
const P = "text-base font-light leading-[26px] text-zinc-600";

/* ------------------------------ Small parts ---------------------------- */

function Stars({ filled = 5, size = 22 }: { filled?: number; size?: number }) {
  return (
    <div className="flex gap-[5px]">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={
            i < filled
              ? "fill-zinc-600 text-zinc-600"
              : "fill-zinc-200 text-zinc-200"
          }
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

/* -------------------------------- Page --------------------------------- */

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<"About" | "Lesson" | "Reviews">(
    "About",
  );
  const [ratingFilter, setRatingFilter] = useState<"all" | 5 | 4 | 3 | 2 | 1>(
    "all",
  );

  const visibleReviews = REVIEWS.filter(
    (r) => ratingFilter === "all" || r.rating === ratingFilter,
  );

  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      {/* ===================== 1. BLUE HERO ===================== */}
      <section className="relative w-full overflow-hidden bg-[#003be2] px-6 pb-[360px] pt-[26px] text-white sm:pb-[480px] lg:pb-[600px]">
        {/* Grid lines */}
        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)
    `,
            // vertical lines: 110px apart (same as navbar) | horizontal lines: 120px apart
            backgroundSize: "110px 100%, 100% 120px",
            backgroundPosition: "0 0, 0 95px",
          }}
        />

        {/* Share button (sits outside the 1200px container, like the reference) */}
        <button className="absolute right-4 top-7 z-10 flex h-10 items-center gap-2.5 rounded-full bg-[#d4ff1f] px-[25px] text-base font-medium text-black transition-all hover:bg-[#c6ee00] active:scale-95 sm:right-6 xl:right-[35px]">
          <Share2 className="h-5 w-5" strokeWidth={2} />
          <span>Share</span>
        </button>

        <div className="relative z-10 mx-auto max-w-[1200px] xl:px-0">
          <h1 className="pr-28 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:pr-0 lg:text-[40px] lg:leading-[48px]">
            Build Digital Asset: A Comprehensive Guide
          </h1>
          <p className="mt-1 text-lg font-medium leading-7 text-white sm:text-[22px]">
            Unlock the Power of Digital Creation with Expert Guidance
          </p>
          <p className="mt-[21px] text-lg leading-[26px] text-white">
            by <span className="text-[#d4ff1f]">purepearl studio</span>
          </p>

          {/* Badges */}
          <div className="mt-[21px] flex flex-wrap items-center gap-4">
            <span className="flex h-10 items-center gap-2.5 rounded-full bg-white px-7 text-base text-zinc-900">
              <BarChart2
                className="h-[18px] w-[18px] text-[#0b56fd]"
                strokeWidth={2.5}
              />
              Intermediate
            </span>
            <span className="flex h-10 items-center gap-2.5 rounded-full bg-white px-7 text-base text-zinc-900">
              <Star className="h-[18px] w-[18px] fill-[#0b56fd] text-[#0b56fd]" />
              4.8 (172 reviews)
            </span>
            <span className="flex h-10 items-center gap-2.5 rounded-full bg-white px-7 text-base text-zinc-900">
              <Users
                className="h-[18px] w-[18px] text-[#0b56fd]"
                strokeWidth={2}
              />
              199 Students
            </span>
          </div>
        </div>
      </section>

      {/* ============ 2. OVERLAPPING CONTENT (VIDEO + SIDEBAR + TABS) ============ */}
      <div className="relative z-20 mx-auto -mt-[302px] max-w-[1200px] px-6 pb-24 sm:-mt-[422px] lg:-mt-[542px] xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-x-16">
          {/* ======================== LEFT COLUMN ======================== */}
          <div className="flex min-w-0 flex-col">
            {/* Video */}
            <div className="relative mb-16 h-[240px] w-full overflow-hidden rounded-[28px] bg-zinc-100 sm:h-[360px] sm:mb-[125px] lg:h-[480px]">
              <Image
                src="/courseperson.png"
                alt="Course Video Preview"
                fill
                priority
                className="object-cover object-center"
              />
              <button
                aria-label="Play Video"
                className="absolute inset-0 m-auto flex h-[104px] w-[104px] items-center justify-center rounded-[28px] bg-white/30 backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
              >
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/95">
                  <Play className="ml-1 h-6 w-6 fill-zinc-600 text-zinc-600" />
                </span>
              </button>
            </div>

            {/* Tabs */}
            <div className="mb-[38px] flex items-center gap-4">
              {(["About", "Lesson", "Reviews"] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`h-[42px] rounded-full px-4 text-base transition-colors ${
                      isActive
                        ? "bg-[#d4ff1f] text-zinc-900"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* ---------------------------- ABOUT ---------------------------- */}
            {activeTab === "About" && (
              <div className="space-y-7">
                <section>
                  <h3 className={H2}>Description</h3>
                  <div className={`mt-6 space-y-[26px] ${P}`}>
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
                </section>

                <section>
                  <h3 className={H2}>Sneak Peak</h3>
                  <div className="mt-6 grid grid-cols-2 gap-[19px] sm:grid-cols-4">
                    {SNEAK_PEEK.map((src, i) => (
                      <div
                        key={i}
                        className="relative h-[110px] overflow-hidden rounded-2xl sm:h-[125px]"
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
                </section>

                <section>
                  <h3 className={H2}>Key Points</h3>
                  <div className="mt-6 space-y-[14px]">
                    {KEY_POINTS.map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b56fd] text-white">
                          <Check className="h-3 w-3" strokeWidth={3.5} />
                        </span>
                        <span className="text-base font-light text-zinc-600">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ---------------------------- LESSON ---------------------------- */}
            {activeTab === "Lesson" && (
              <div className="space-y-7">
                <section>
                  <h3 className={H2}>Explore the Modules</h3>
                  <p className={`mt-6 ${P}`}>
                    Immerse yourself in the course content as we break down each
                    module into comprehensive lessons, providing practical
                    insights and hands-on experiences.
                  </p>
                </section>

                <section>
                  <h4 className={H3}>Lesson List</h4>
                  <div className="mt-6 space-y-5">
                    {MODULES.map((mod) => (
                      <div
                        key={mod.id}
                        className="flex items-center gap-[13px]"
                      >
                        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px] bg-[#d4ff1f]">
                          <Video
                            className="h-8 w-8 text-zinc-900"
                            strokeWidth={2}
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-base leading-[26px] text-zinc-900">
                            {mod.title}
                          </h5>
                          <p className={P}>{mod.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className={H3}>Lesson Content</h4>
                  <p className={`mt-6 ${P}`}>
                    Engage with each lesson through captivating video content,
                    detailed textual explanations, and interactive elements.
                    Download resources, complete assignments, and test your
                    understanding with quizzes.
                  </p>
                </section>

                <section>
                  <h4 className={H3}>Lesson Progress Tracking</h4>
                  <p className={`mt-6 ${P}`}>
                    Witness your growth as you complete lessons, with an
                    intuitive progress tracking feature guiding you through your
                    learning journey.
                  </p>

                  <div className="mt-6 rounded-[18px] border border-zinc-300 p-4">
                    <span className="block text-sm font-medium text-zinc-900">
                      Learning Progress
                    </span>
                    <div className="my-1 text-4xl font-medium leading-tight text-zinc-900">
                      55%
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                      <div
                        className="h-full rounded-full bg-[#d4ff1f]"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ---------------------------- REVIEWS ---------------------------- */}
            {activeTab === "Reviews" && (
              <div>
                <h3 className={H2}>What Learners Are Saying</h3>
                <p className={`mt-6 ${P}`}>
                  Discover what our learners have to say about their experience
                  with &apos;Build Digital Assets: A Comprehensive Guide.&apos;
                  Read reviews and ratings from individuals who have embarked on
                  the transformative journey of mastering digital asset
                  creation.
                </p>

                {/* Ratings summary */}
                <div className="mt-6 flex flex-col items-stretch gap-6 rounded-[24px] border border-zinc-300 px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-11">
                  <div className="flex h-[138px] w-full shrink-0 flex-col items-center justify-center bg-[#d4ff1f] sm:w-32">
                    <span className="text-sm text-zinc-900">Ratings</span>
                    <span className="text-5xl font-medium leading-none text-zinc-900">
                      4.7
                    </span>
                  </div>

                  <div className="flex h-[138px] flex-1 flex-col justify-between">
                    {RATING_BARS.map((row, i) => (
                      <div key={i} className="flex items-center">
                        <div className="mr-5 h-[7px] flex-1 overflow-hidden rounded-full bg-zinc-200">
                          <div
                            className="h-full rounded-full bg-[#d4ff1f]"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                        <div className="hidden w-[131px] shrink-0 justify-between sm:flex">
                          {[...Array(5)].map((_, s) => (
                            <Star
                              key={s}
                              className="h-5 w-5 fill-zinc-600 text-zinc-600"
                              strokeWidth={1}
                            />
                          ))}
                        </div>
                        <span className="w-[57px] shrink-0 text-right text-base font-light text-zinc-600">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual reviews */}
                <h4 className={`mt-6 ${H3}`}>Individual Reviews:</h4>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {FILTERS.map((f) => {
                    const isActive = ratingFilter === f;
                    return (
                      <button
                        key={f}
                        onClick={() => setRatingFilter(f)}
                        className={`flex h-[42px] items-center gap-1.5 rounded-full px-4 text-base transition-colors ${
                          isActive
                            ? "bg-[#d4ff1f] text-zinc-900"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        {f === "all" ? (
                          "All rating"
                        ) : (
                          <>
                            <Star
                              className="h-[18px] w-[18px] fill-zinc-600 text-zinc-600"
                              strokeWidth={1}
                            />
                            {f}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 space-y-6">
                  {visibleReviews.length === 0 && (
                    <p className={P}>No reviews for this rating yet.</p>
                  )}
                  {visibleReviews.map((r) => (
                    <div
                      key={r.name}
                      className="rounded-[24px] border border-zinc-300 px-6 py-7 sm:px-10 sm:py-9"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-zinc-200">
                            <Image
                              src={r.avatar}
                              alt={r.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h5 className="text-lg font-medium leading-6 text-zinc-900">
                              {r.name}
                            </h5>
                            <span className="block text-base font-light leading-6 text-zinc-600">
                              {r.role}
                            </span>
                          </div>
                        </div>
                        <span className="shrink-0 text-base font-light text-zinc-600">
                          a year ago
                        </span>
                      </div>

                      <div className="mt-6">
                        <Stars filled={r.rating} />
                      </div>
                      <p className={`mt-6 ${P}`}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ======================== RIGHT SIDEBAR ======================== */}
          <aside className="lg:sticky lg:top-6">
            <div className="rounded-[28px] border border-zinc-200 bg-white px-10 pb-10 pt-9">
              <h3 className="text-[22px] font-medium leading-7 text-zinc-900">
                112 Lessons (24 hours)
              </h3>

              {/* Lessons preview */}
              <div className="mt-6 space-y-3">
                {SIDEBAR_LESSONS.map((l) => (
                  <div
                    key={l.no}
                    className="flex items-start text-base text-zinc-900"
                  >
                    <span className="w-8 shrink-0 leading-[19px]">{l.no}</span>
                    <span className="max-w-[185px] flex-1 leading-[19px]">
                      {l.title}
                    </span>
                    <span className="ml-auto mt-[3px] pr-2 font-light leading-none text-[#0b56fd]">
                      {l.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-base font-light text-zinc-600">
                99 more videos
              </p>

              <p className="mt-6 max-w-[300px] text-base font-light leading-[26px] text-zinc-600">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              {/* Price + CTA */}
              <div className="mt-6 flex items-baseline">
                <span className="text-[40px] font-semibold leading-10 tracking-tight text-[#0b56fd]">
                  $25
                </span>
                <span className="ml-0.5 text-base font-light text-zinc-600">
                  /lifetime
                </span>
              </div>
              <button className="mt-6 h-[46px] w-full rounded-full bg-[#d4ff1f] text-lg font-medium text-black transition-all hover:bg-[#c6ee00] active:scale-[0.98]">
                Enroll Now
              </button>

              {/* Includes */}
              <h4 className="mt-6 text-[21px] font-medium leading-7 text-zinc-900">
                This course include
              </h4>
              <ul className="mt-6 space-y-[14px] text-base font-light text-zinc-600">
                {[
                  { icon: Layers, label: "Learning Resources" },
                  { icon: Video, label: "Quality Lesson Videos" },
                  { icon: Award, label: "Certificate of Completion" },
                  { icon: Headphones, label: "Private Consultation" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon
                      className="h-5 w-5 shrink-0 text-[#0b56fd]"
                      strokeWidth={1.75}
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              {/* Creator */}
              <div className="mt-6 border-t border-zinc-200 pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-zinc-200">
                    <Image
                      src={CREATOR_AVATAR}
                      alt="PurePearl Studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium leading-6 text-zinc-900">
                      PurePearl Studio
                    </h5>
                    <span className="block text-base font-light leading-6 text-zinc-600">
                      Professional Creator
                    </span>
                  </div>
                </div>

                <p className="mt-6 max-w-[300px] text-base font-light leading-[26px] text-zinc-600">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="mt-6 h-[34px] rounded-full border border-zinc-300 px-4 text-base text-zinc-700 transition-all hover:bg-zinc-50 active:scale-95">
                  See Full Profile
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
