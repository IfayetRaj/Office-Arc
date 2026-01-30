"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const AdminProducts = () => {
  const data = [
    {
      id: 1,
      name: "Ergonomic Chair",
      category: "Chair",
      image: "/ergonomicDesign.jpg",
      price: "$99.99",
      color: ["Black", "Gray"],
      size: ["S", "M", "L"],
    },
    {
      id: 2,
      name: "Modern Office Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$199.99",
      color: ["White", "Brown"],
      size: ["M", "L"],
    },
    {
      id: 3,
      name: "Executive Chair",
      category: "Chair",
      image: "/ergonomicDesign.jpg",
      price: "$149.99",
      color: ["Black", "Blue"],
      size: ["M", "L"],
    },
    {
      id: 4,
      name: "Storage Cabinet",
      category: "Storage",
      image: "/ergonomicDesign.jpg",
      price: "$89.99",
      color: ["White", "Oak"],
      size: ["S", "M"],
    },
    {
      id: 5,
      name: "Lounge Sofa",
      category: "Lounge",
      image: "/ergonomicDesign.jpg",
      price: "$299.99",
      color: ["Gray", "Beige"],
      size: ["L"],
    },
    {
      id: 6,
      name: "Conference Table",
      category: "Conference",
      image: "/ergonomicDesign.jpg",
      price: "$399.99",
      color: ["Brown", "Black"],
      size: ["XL"],
    },
    {
      id: 7,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 8,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 9,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 10,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 11,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 12,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 13,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 14,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },
    {
      id: 15,
      name: "Adjustable Standing Desk",
      category: "Desk",
      image: "/ergonomicDesign.jpg",
      price: "$249.99",
      color: ["White", "Black"],
      size: ["M", "L"],
    },

  ];

  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold mb-4">Total Products {data.length}</h1>

      <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
        {/* Scrollable table body */}
        <div className="overflow-y-auto overflow-x-auto w-full h-screen">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky text-md top-0 bg-white z-10 border-b-2">
              <tr>
                <th className="p-3 text-left font-medium">Image</th>
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Category</th>
                <th className="p-3 text-left font-medium">Color</th>
                <th className="p-3 text-left font-medium">Size</th>
                <th className="p-3 text-center font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y px-3 divide-gray-200">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 text-sm transition">
                  <td className="">
                    <div className="w-14 h-14 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.color.join(", ")}</td>
                  <td className="p-3">{item.size.join(", ")}</td>
                  <td className="p-3 text-center flex  justify-center gap-2">
                    <Link
                      href={`/admin/products/edit/${item.id}`}
                      className="text-blue-600 hover:text-blue-800 p-1 rounded-md transition"
                      title="Edit"
                    >
                      <CiEdit size={20} />
                    </Link>
                    <Link
                      href={`/admin/products/delete/${item.id}`}
                      className="text-red-600 hover:text-red-800 p-1 rounded-md transition"
                      title="Delete"
                    >
                      <MdDeleteOutline size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
