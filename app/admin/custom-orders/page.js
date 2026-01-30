"use client";

import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdCancel } from "react-icons/md";

const demoCustomOrders = Array.from({ length: 20 }, (_, i) => ({
  id: `CO-${1001 + i}`,
  customer: `Customer ${i + 1}`,
  email: `customer${i + 1}@mail.com`,
  productType: ["Chair", "Desk", "Table", "Cabinet"][i % 4],
  dimensions: ["20x40x30", "50x60x40", "72x30x30"][i % 3],
  color: ["#000000", "#ffffff", "#8B4513"][i % 3],
  price: 150 + i * 20,
  status: ["Pending", "Processing", "Approved", "Cancelled"][i % 4],
  date: `2026-01-${(i % 28) + 1}`,
}));

const CustomOrdersPage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    console.log(value);
  };

  return (
    <div className="overflow-x-auto h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Custom Orders</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by order id"
          value={searchText}
          onChange={handleSearch}
          className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {[
                "Order ID",
                "Customer",
                "Product",
                "Dimension",
                "Color",
                "Price",
                "Status",
                "Date",
                "Action",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {demoCustomOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 text-sm font-medium">{order.id}</td>

                <td className="px-4 py-2 text-sm">
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-xs text-gray-500">{order.email}</div>
                </td>

                <td className="px-4 py-2 text-sm">{order.productType}</td>
                <td className="px-4 py-2 text-sm">{order.dimensions}</td>

                <td className="px-4 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded border"
                      style={{ backgroundColor: order.color }}
                    />
                    <span className="text-xs">{order.color}</span>
                  </div>
                </td>

                <td className="px-4 py-2 text-sm">${order.price}</td>

                {/* Status */}
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full border
                      ${
                        order.status === "Pending"
                          ? "text-yellow-600 border-yellow-600"
                          : order.status === "Processing"
                          ? "text-blue-600 border-blue-600"
                          : order.status === "Approved"
                          ? "text-green-600 border-green-600"
                          : "text-red-600 border-red-600"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-4 py-2 text-sm">{order.date}</td>

                {/* Actions */}
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="View Details"
                  >
                    <CgDetailsMore size={18} />
                  </button>

                  <button
                    disabled={order.status !== "Pending"}
                    className={`transition
                      ${
                        order.status === "Pending"
                          ? "text-red-600 hover:text-red-800"
                          : "text-gray-400 cursor-not-allowed"
                      }
                    `}
                    title="Cancel Order"
                  >
                    <MdCancel size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomOrdersPage;
