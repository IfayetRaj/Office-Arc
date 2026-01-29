"use client";

import { use, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";

export default function ProductsWrapper({ initialProducts }) {
  const [filters, setFilters] = useState({ category: null });
  const [sort, setSort] = useState(null)
  console.log(filters, sort);

  return (
    <div className="relative">
      {/* Filter button */}
      <Filter
        setFilters={setFilters}
        setSort={setSort}
      />

      {/* Products */}
      <Products products={initialProducts} filters={filters} />
    </div>
  );
}