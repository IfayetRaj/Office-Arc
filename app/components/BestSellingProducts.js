import Image from "next/image";
import React from "react";
import { playfair } from "../layout";
import Animated from "./Animated";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "ErgoFlex Office Chair",
    category: "Chairs",
    price: "$249",
    image: "/ergonomicDesign.jpg",
  },
  {
    id: 2,
    name: "Aero Work Desk",
    category: "Chairs",
    price: "$499",
    image: "/ergonomicDesign.jpg",
  },
  {
    id: 3,
    name: "Modular Storage Cabinet",
    category: "Chairs",
    price: "$389",
    image: "/ergonomicDesign.jpg",
  },
  {
    id: 4,
    name: "Conference Table Pro",
    category: "Chairs",
    price: "$899",
    image: "/ergonomicDesign.jpg",
  },
];

const BestSellingProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <Animated>
          <h2 className={` ${playfair.className} text-3xl md:text-5xl font-semibold`}>
            Best Selling Products
          </h2>
          </Animated>
          <p className="mt-4 text-gray-600">
            Trusted by professionals for comfort, durability, and modern design.
          </p>
          <div className="w-20 h-0.5 bg-black mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {products.map((product) => (
            <div
            key={product.id}
            className="group rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col gap-3">
              <h3 className="text-sm md:text-lg font-semibold leading-snug">
                {product.name}
              </h3>

              <p className="text-xs md:text-sm text-gray-500">
                {product.category}
              </p>

              <p className="text-base md:text-lg font-medium">
                ${product.price}
              </p>

              <Link href={`/products/${product.id}`} className="mt-2 text-center w-full rounded-md border border-black py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                View Details
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;