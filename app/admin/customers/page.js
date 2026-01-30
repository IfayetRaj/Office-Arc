"use client";

import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";

export default function CustomersPage() {
  const [searchText, setSearchText] = useState("");

  const demoCustomers = [
    {
      id: "CUS-001",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234 567 8901",
      orders: 5,
      totalSpent: 1250,
      joined: "2025-11-12",
    },
    {
      id: "CUS-002",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "+44 7700 900123",
      orders: 2,
      totalSpent: 320,
      joined: "2025-12-01",
    },
    {
      id: "CUS-003",
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "+880 1712 345678",
      orders: 7,
      totalSpent: 2140,
      joined: "2025-10-05",
    },
    {
      id: "CUS-004",
      name: "Emma Brown",
      email: "emma.brown@example.com",
      phone: "+61 412 345 678",
      orders: 1,
      totalSpent: 199,
      joined: "2026-01-03",
    },
    {
      id: "CUS-005",
      name: "Michael Lee",
      email: "michael.lee@example.com",
      phone: "+1 408 555 0123",
      orders: 4,
      totalSpent: 980,
      joined: "2025-09-18",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    console.log(value); // 👈 this is what you asked for
  };

  return (
    <div className="p-4 h-screen overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Customers</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search based on email"
          value={searchText}
          onChange={handleSearch}
          className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b text-xs uppercase text-gray-500 text-left">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Total Spent</th>
              <th className="px-4 py-3">Joined</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {demoCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="text-sm hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">{customer.id}</td>

                <td className="px-4 py-3">
                  <div className="font-medium">{customer.name}</div>
                  <div className="text-xs text-gray-500">
                    {customer.email}
                  </div>
                </td>

                <td className="px-4 py-3">{customer.phone}</td>

                <td className="px-4 py-3 font-medium">{customer.orders}</td>

                <td className="px-4 py-3 font-medium">
                  ${customer.totalSpent}
                </td>

                <td className="px-4 py-3">{customer.joined}</td>

                <td className="px-4 py-3 text-right">
                  <button
                    title="View Customer Details"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <CgDetailsMore size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}