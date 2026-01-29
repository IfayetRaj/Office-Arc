import Image from "next/image";
import React from "react";
import { playfair } from "../layout";
import Animated from "./Animated";

const Categories = () => {
  const data = [
    {
      id: 1,
      name: "Chairs",
      imageUrl: "/chair.png",
      p: "Ergonomic seating designed for long work hours",
    },
    {
      id: 2,
      name: "Desks",
      imageUrl: "/desk.png",
      p: "Modern workstations built for focus and flexibility",
    },
    {
      id: 3,
      name: "Storage",
      imageUrl: "/cabinate.png",
      p: "Smart storage solutions to keep workspaces organized",
    },
    {
      id: 4,
      name: "Lounge",
      imageUrl: "/lounge.webp",
      p: "Comfortable lounge furniture for collaboration and waiting areas",
    },
    {
      id: 5,
      name: "Workstations",
      imageUrl: "/workstation.webp",
      p: "Modular workstations to maximize productivity and space",
    },
    {
      id: 6,
      name: "Conference",
      imageUrl: "/conference.webp",
      p: "Stylish conference tables and seating for impactful meetings",
    },
  ];

  return (
    <section className="px-6 md:px-14 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
          <Animated>
            <h1
              className={`${playfair.className} text-4xl md:text-5xl font-semibold underline underline-offset-8`}
            >
              Our Ranges
            </h1>
          </Animated>
        </div>

        <p className="flex-1 text-gray-700 mt-4 md:mt-0 leading-relaxed">
          Discover ergonomic chairs, modern desks, functional storage, and
          stylish sofas
          <span className="hidden md:inline">
            {" "}
            — carefully selected to enhance any workspace.
          </span>
        </p>
      </div>

      {/* Categories Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl bg-gray-100/60 p-6 shadow-md transition-all duration-300
                       hover:-translate-y-2 hover:shadow-xl hover:bg-gray-100"
          >
            {/* Image wrapper */}
            <div className="relative w-full aspect-square">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-center font-semibold tracking-wide">
              {item.name}
            </h2>

            <p className="mt-2 text-center text-sm text-gray-600 max-w-45 mx-auto">
              {item.p}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
