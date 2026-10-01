import React from "react";
import Image from "next/image";

export default function ClientPartner() {
  return (
    <section className="w-full bg-[#F5F5F6] py-8 md:py-18 border-b border-gray-100">
      <div className="max-w-9xl mx-auto px-6 flex justify-center items-center">
        {/* Responsive Logo Strip Container */}
        <div className="relative w-full max-w-9xl h-8 sm:h-10 md:h-12">
          <Image
            src="/Logo_Partner.png"
            alt="Client Logos"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}