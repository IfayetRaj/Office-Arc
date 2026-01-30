"use client";

import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

const Page = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const demoOrders = [
    {
      id: "ORD-1001",
      customerName: "John Doe",
      customer: "john.doe@example.com",
      products: 3,
      total: 250,
      paymentStatus: "Paid",
      orderStatus: "Pending",
      date: "2026-01-31",
    },
    {
      id: "ORD-1002",
      customerName: "Alice Smith",
      customer: "alice.smith@example.com",
      products: 1,
      total: 99,
      paymentStatus: "Pending",
      orderStatus: "Processing",
      date: "2026-01-30",
    },
    {
      id: "ORD-1003",
      customerName: "Bob Johnson",
      customer: "bob.johnson@example.com",
      products: 5,
      total: 550,
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
      date: "2026-01-29",
    },
    {
      id: "ORD-1004",
      customerName: "Emma Brown",
      customer: "emma.brown@example.com",
      products: 2,
      total: 199,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      date: "2026-01-28",
    },
    {
      id: "ORD-1005",
      customerName: "Michael Lee",
      customer: "michael.lee@example.com",
      products: 4,
      total: 420,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      date: "2026-01-27",
    },
    {
      id: "ORD-1014",
      customerName: "Amelia Young",
      customer: "amelia.young@example.com",
      products: 2,
      total: 180,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      date: "2026-01-18",
    },
    {
      id: "ORD-1015",
      customerName: "Lucas King",
      customer: "lucas.king@example.com",
      products: 5,
      total: 500,
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
      date: "2026-01-17",
    },
    {
      id: "ORD-1016",
      customerName: "Harper Scott",
      customer: "harper.scott@example.com",
      products: 1,
      total: 95,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      date: "2026-01-16",
    },
    {
      id: "ORD-1017",
      customerName: "Henry Green",
      customer: "henry.green@example.com",
      products: 3,
      total: 310,
      paymentStatus: "Pending",
      orderStatus: "Processing",
      date: "2026-01-15",
    },
    {
      id: "ORD-1018",
      customerName: "Evelyn Adams",
      customer: "evelyn.adams@example.com",
      products: 2,
      total: 175,
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      date: "2026-01-14",
    },
    {
      id: "ORD-1019",
      customerName: "Alexander Baker",
      customer: "alexander.baker@example.com",
      products: 4,
      total: 420,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      date: "2026-01-13",
    },
    {
      id: "ORD-1020",
      customerName: "Abigail Nelson",
      customer: "abigail.nelson@example.com",
      products: 1,
      total: 105,
      paymentStatus: "Failed",
      orderStatus: "Cancelled",
      date: "2026-01-12",
    },
    {
      id: "ORD-1021",
      customerName: "Sebastian Carter",
      customer: "sebastian.carter@example.com",
      products: 3,
      total: 290,
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      date: "2026-01-11",
    },
  ];

  return (
    <div className="overflow-x-auto h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Total Orders {demoOrders.length}</h1>

      {/* Search Bar */}
      <div className="mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search by Order ID"
          value={search}
          onChange={handleSearch}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-gray-500 transition"
        />
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Order ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Customer
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Products
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Total
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Payment Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Order Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {demoOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 text-sm font-medium">{order.id}</td>

                <td className="px-4 py-2 text-sm">
                  {order.customerName}
                  <br />
                  <span className="text-xs text-gray-500">
                    {order.customer}
                  </span>
                </td>

                <td className="px-4 py-2 text-sm">{order.products}</td>
                <td className="px-4 py-2 text-sm">${order.total}</td>

                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full border
                      ${
                        order.paymentStatus === "Paid"
                          ? "text-green-600 border-green-600"
                          : order.paymentStatus === "Pending"
                          ? "text-yellow-600 border-yellow-600"
                          : "text-red-600 border-red-600"
                      }
                    `}
                  >
                    {order.paymentStatus}
                  </span>
                </td>

                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full border
                      ${
                        order.orderStatus === "Cancelled"
                          ? "text-red-600 border-red-600"
                          : order.orderStatus === "Pending"
                          ? "text-yellow-600 border-yellow-600"
                          : order.orderStatus === "Processing"
                          ? "text-blue-600 border-blue-600"
                          : order.orderStatus === "Shipped"
                          ? "text-indigo-600 border-indigo-600"
                          : "text-green-600 border-green-600"
                      }
                    `}
                  >
                    {order.orderStatus}
                  </span>
                </td>

                <td className="px-4 py-2 text-sm">{order.date}</td>

                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <CgDetailsMore size={20} />
                  </button>

                  <button
                    disabled={
                      order.orderStatus !== "Pending" &&
                      order.orderStatus !== "Processing"
                    }
                    className={`transition
                      ${
                        order.orderStatus === "Pending" ||
                        order.orderStatus === "Processing"
                          ? "text-red-600 hover:text-red-800"
                          : "text-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    <MdCancel size={20} />
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

export default Page;