import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] text-zinc-900 py-24 lg:py-[120px]">
      {/* Soft ambient background glows (lime + blue) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(700px 500px at 20% 2%, rgba(198,248,0,0.32), transparent 70%)",
            "radial-gradient(400px 450px at 0% 48%, rgba(11,86,253,0.13), transparent 70%)",
            "radial-gradient(450px 450px at 0% 88%, rgba(198,248,0,0.35), transparent 70%)",
            "radial-gradient(600px 450px at 95% 95%, rgba(11,86,253,0.18), transparent 70%)",
            "radial-gradient(500px 600px at 100% 20%, rgba(11,86,253,0.06), transparent 70%)",
          ].join(","),
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1500px] flex-col gap-24 px-6 lg:gap-28">
        {/* ================================================================ */}
        {/* ROW 1 */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-10">
          {/* Left text */}
          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px] lg:text-[52px]">
              Your Path to Professional
              <br className="hidden lg:block" />
              Growth Starts Here!
            </h2>

            <p className="mt-10 max-w-[500px] text-[17px] leading-[1.75] text-zinc-600 sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics */}
            <div className="mt-12 flex items-start gap-10 sm:gap-14">
              {[
                { value: "12K", label: "Students" },
                { value: "70+", label: "Courses" },
                { value: "16", label: "Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block text-4xl font-medium tracking-tight text-[#0b56fd] sm:text-[42px]">
                    {stat.value}
                  </span>

                  <span className="mt-2 block text-[17px] text-zinc-600 sm:text-[18px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[580px] lg:mx-0 lg:justify-self-end">
            <Image
              src="/Frame 11.png"
              alt="Student learning on a laptop with course progress"
              width={1160}
              height={1110}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* ================================================================ */}
        {/* ROW 2 */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-10">
          {/* Left visual */}
          <div className="relative order-last mx-auto w-full max-w-[545px] lg:order-first lg:mx-0 lg:justify-self-start">
            <Image
              src="/Frame 12.png"
              alt="Creator with tablet and revenue cards"
              width={1090}
              height={1120}
              priority
              className="h-auto w-full"
            />
          </div>

          {/* Right text + checklist */}
          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px] lg:text-[52px]">
              Create &amp; Manage
              <br className="hidden lg:block" />
              Courses Easily.
            </h2>

            <p className="mt-10 max-w-[560px] text-[17px] leading-[1.75] text-zinc-600 sm:text-[18px]">
              <strong className="font-semibold text-zinc-900">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature checklist */}
            <div className="mt-9 space-y-5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#0b56fd] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                  </div>

                  <span className="text-[17px] font-medium text-zinc-900 sm:text-[18px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
