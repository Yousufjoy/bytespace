import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] px-6 pb-16 pt-16 text-zinc-900 md:pb-14 md:pt-20">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(650px 380px at 52% 26%, rgba(198,248,0,0.32), transparent 70%)",
            "radial-gradient(380px 320px at 100% 42%, rgba(198,248,0,0.30), transparent 70%)",
            "radial-gradient(480px 400px at 2% 90%, rgba(11,86,253,0.22), transparent 70%)",
            "radial-gradient(300px 300px at 0% 62%, rgba(11,86,253,0.07), transparent 70%)",
          ].join(","),
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header: title left, description right */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-[72px] lg:flex-row lg:items-center">
          <h2 className="text-3xl font-semibold leading-[1.2] tracking-tight text-zinc-950 sm:text-4xl lg:text-[44px]">
            Discover What Our
            <br className="hidden lg:block" /> Community Is Saying
          </h2>
          <p className="text-base font-light leading-[1.75] text-zinc-600 sm:text-[17px] lg:w-[580px] lg:shrink-0">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-[28px] bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)]"
            >
              {/* Avatar */}
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name & role */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-950">
                {t.name}
              </h3>
              <span className="mt-1 block text-base text-[#0b56fd] sm:text-[17px]">
                {t.role}
              </span>

              {/* Quote */}
              <p className="mt-6 text-base font-light leading-[1.75] text-zinc-600 sm:text-[17px]">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}