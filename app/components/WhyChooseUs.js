import React from "react";
import { playfair } from "../layout";
import Image from "next/image";
import Animated from "./Animated";

// feature data
const features = [
  {
    title: "Ergonomic Design",
    description:
      "Furniture engineered to support posture, comfort, and productivity throughout the workday.",
    imageUrl: "/ergonomicDesign.jpg",
  },
  {
    title: "Premium Materials",
    description:
      "High-quality materials selected for durability, aesthetics, and long-term professional use.",
    imageUrl: "/premiumMaterials.avif",
  },
  {
    title: "Custom Solutions",
    description:
      "Flexible furniture options tailored to meet the unique needs of modern workspaces.",
    imageUrl: "/customSolutions.jpg",
  },
  {
    title: "Reliable Delivery",
    description:
      "On-time delivery with careful handling to ensure a smooth setup experience.",
    imageUrl: "/reliableDelivery.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <Animated>
            <h2
              className={` ${playfair.className} text-3xl md:text-5xl font-semibold`}
            >
              Why Businesses Choose OfficeArc
            </h2>
          </Animated>
          <div className="w-20 h-[2px] bg-black mx-auto mt-4"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg h-60 md:h-80 group shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                fill
                priority
                alt={item.title}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
