import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
export const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const Products = ({ products }) => {
  return (
    <section className="px-4 md:px-14 py-12">
      {/* Heading */}

      <div className="flex items-center justify-between">
        <h1 className={`${playfair.className} text-center text-3xl md:text-4xl font-semibold mb-10`}>
          Our Products
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col gap-3">
              <h3 className="text-sm md:text-lg font-semibold leading-snug">
                {item.name}
              </h3>

              <p className="text-xs md:text-sm text-gray-500">
                {item.category}
              </p>

              <p className="text-base md:text-lg font-medium">${item.price}</p>

              <Link href={`/products/${item.id}`} className="mt-2 text-center w-full rounded-md border border-black py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
