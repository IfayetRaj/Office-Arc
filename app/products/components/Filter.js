"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaSort } from "react-icons/fa";

export default function Filter({ setFilters, setSort }) {
  const categories = [
    "All",
    "Chairs",
    "Desks",
    "Storage",
    "Lounge",
    "Workstations",
    "Conference",
  ];

  const sortOptions = ["Default", "Low to High", "High to Low"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Default");
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setFilters({ category: category === "All" ? null : category });
    setMobileCategoryOpen(false); 
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    setSort(value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 shadow-sm gap-4 mb-6">
      {/* Category Buttons / Mobile Dropdown */}
      <div className="w-full md:w-auto">
        {/* Mobile Dropdown */}
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
                      activeCategory === cat ? "bg-black text-white" : "text-gray-700"
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

        {/* Desktop Buttons */}
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

      {/* Sorting Dropdown */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <label htmlFor="sort" className="font-medium flex items-center text-gray-700">
        <FaSort size={20}/> Sort:
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
  );
}