
import Animated from "@/app/components/Animated";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/productBanner.jpg"
        alt="Office furniture banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Animated>
          {/* ${playfair.className} */}
          <h1
            className={` text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4`}
          >
            All Office Furniture
          </h1>
        </Animated>

        <p className="max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed">
          Browse our complete range of modern office furniture crafted for
          efficient, comfortable, and stylish work environments.
        </p>
      </div>
    </section>
  );
};

export default Banner;
