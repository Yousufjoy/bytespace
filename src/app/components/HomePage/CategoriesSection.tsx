import React from "react";
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const CATEGORIES = [
  { name: "Design", icon: PenTool },
  { name: "Development", icon: Code2 },
  { name: "IT & Software", icon: Laptop },
  { name: "Business", icon: Building2 },
  { name: "Marketing", icon: Megaphone },
  { name: "Photography", icon: Camera },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white text-zinc-900 pb-20 md:pb-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-[#c6f800] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-black stroke-[2.2]" />
                </div>
                {/* Title */}
                <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
