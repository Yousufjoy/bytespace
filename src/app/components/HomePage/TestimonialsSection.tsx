import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bgAccent: "bg-amber-400",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bgAccent: "bg-zinc-700",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    bgAccent: "bg-blue-100",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 py-20 md:py-28 px-6 overflow-hidden">
      {/* Ambient Gradient Glows */}
      <div className="pointer-events-none absolute -top-10 right-0 w-[480px] h-[480px] bg-[#c6f800]/25 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-10 left-0 w-[420px] h-[420px] bg-[#0b56fd]/15 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header: Left Title + Right Description */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.15] max-w-xl">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with Circular Color Backdrop */}
                <div
                  className={`w-14 h-14 rounded-full ${t.bgAccent} overflow-hidden relative mb-5 flex items-center justify-center shadow-inner`}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-base text-gray-900 tracking-tight">
                  {t.name}
                </h3>
                <span className="text-xs font-semibold text-[#0b56fd] block mb-5">
                  {t.role}
                </span>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
