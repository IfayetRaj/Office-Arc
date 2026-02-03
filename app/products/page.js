"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import Banner from "./components/Banner";
import api from "@/lib/axios"; // Axios instance with baseURL

const Page = () => {
  // Product categories
  const categories = [
    "All",
    "Chairs",
    "Desks",
    "Storage",
    "Lounge",
    "Workstations",
    "Conference",
  ];

  // Sorting options
  const sortOptions = ["Default", "Low to High", "High to Low"];

  // State
  const [products, setProducts] = useState([]); // all products from API
  const [filters, setFilters] = useState({ category: null }); // selected category filter
  const [sort, setSort] = useState(null); // selected sort option
  const [activeCategory, setActiveCategory] = useState("All"); // active category button
  const [selectedSort, setSelectedSort] = useState("Default"); // active sort dropdown
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false); // mobile dropdown

  // Fetch products from API on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/product"); // GET /product
        // Make sure API returns array directly or in res.data.products
        setProducts(res.data.products || []); // fallback to empty array
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFilters({ category: category === "All" ? null : category });
    setMobileCategoryOpen(false);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    setSort(value);
  };

  // Filtered and sorted products
  const displayedProducts = Array.isArray(products)
    ? products
        .filter((p) => {
          if (!filters.category) return true;
          return p.category.toLowerCase() === filters.category.toLowerCase();
        })
        .sort((a, b) => {
          if (sort === "Low to High") return a.price[0] - b.price[0];
          if (sort === "High to Low") return b.price[0] - a.price[0];
          return 0;
        })
    : [];

  return (
    <div>
      {/* Banner section */}
      <Banner />

      {/* Category & Sort Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 shadow-sm gap-4 mb-6">
        {/* Categories */}
        <div className="w-full md:w-auto">
          {/* Mobile dropdown */}
          <div className="md:hidden relative">
            <button
              className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-sm px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
            >
              {activeCategory}
              <FiChevronDown size={20} />
            </button>
            {mobileCategoryOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition ${
                        activeCategory === cat
                          ? "bg-black text-white"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop category buttons */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-5 py-2 rounded-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label
            htmlFor="sort"
            className="font-medium flex items-center text-gray-700"
          >
            <FaSort size={20} /> Sort:
          </label>
          <select
            id="sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="border rounded-lg px-4 py-2 bg-white hover:border-gray-400 transition w-full md:w-auto"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <section className="px-4 md:px-14 py-12">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">
          Our Products
          <div className="w-20 h-0.5 bg-black mt-4 mx-auto"></div>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {displayedProducts.map((item) => (
            <div
              key={item._id} // unique key from MongoDB
              className="group rounded-xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* First image of product */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.images[0]} // first image in array
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized // if you are using external images
                />
              </div>

              {/* Product info */}
              <div className="p-4 md:p-6 flex flex-col gap-3">
                <h3 className="text-sm md:text-lg font-semibold leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs md:text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="text-base md:text-lg font-medium">
                  ${item.price[0]}
                </p>

                <Link
                  href={`/products/${item._id}`}
                  className="mt-2 text-center w-full rounded-md border border-black py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;