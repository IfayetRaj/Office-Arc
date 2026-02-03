import Image from "next/image";
import React from "react";
import { playfair } from "../layout";
import Animated from "./Animated";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[90vh]">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        fill
        priority
        alt="Hero"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
        {/* Animated title */}
        <Animated>
          <h1
            className={`${playfair.className} text-4xl md:text-7xl font-semibold md:font-light text-white leading-tight`}
          >
            Designing Workspaces That Work
          </h1>
        </Animated>

        <p className="mt-6 text-sm md:text-lg text-gray-300 max-w-2xl">
          Premium office furniture crafted for <br /> productivity, comfort, and
          modern workplaces.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href='/collections/all' className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition active:scale-95">
            Explore Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
