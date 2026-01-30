import Link from "next/link";
import React from "react";

// Icons
import { MdLogout, MdDashboard, MdInventory } from "react-icons/md";
import { FaRegUser, FaShoppingBag, FaClipboardList } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { BsStarHalf } from "react-icons/bs";

import { Playfair_Display } from "next/font/google";

// Google Font
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sidebar = () => {
  const role = "Admin";

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* ================= Logo / Brand ================= */}
      <div className="px-6 py-6 border-b">
        <h1
          className={`${playfair.className} text-2xl font-bold tracking-wide text-center`}
        >
          Office Arc
        </h1>
        <p className="text-xs text-center text-gray-500 mt-1">
          Admin Dashboard
        </p>
      </div>

      {/* ================= Navigation ================= */}
      <nav className="flex-1 px-4 py-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          Menu
        </p>

        <ul className="flex flex-col gap-2">
          {/* Dashboard */}
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <MdDashboard size={18} />
              Dashboard
            </Link>
          </li>

          {/* Products */}
          <li>
            <Link
              href="/admin/products"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <MdInventory size={18} />
              Products
            </Link>
          </li>

          {/* Orders */}
          <li>
            <Link
              href="/admin/orders"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <FaShoppingBag size={17} />
              Orders
            </Link>
          </li>

          {/* Custom Orders */}
          <li>
            <Link
              href="/admin/custom-orders"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <MdDashboardCustomize size={18} />
              Custom Orders
            </Link>
          </li>

          {/* Reviews */}
          <li>
            <Link
              href="/admin/reviews"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <BsStarHalf size={16} />
              Reviews
            </Link>
          </li>

          {/* Customers */}
          <li>
            <Link
              href="/admin/customers"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              text-gray-700 hover:bg-black hover:text-white transition-all"
            >
              <FaClipboardList size={16} />
              Customers
            </Link>
          </li>
        </ul>
      </nav>

      {/* ================= User Info / Logout ================= */}
      <div className="border-t px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <FaRegUser />
          </div>
          <div>
            <p className="text-sm font-semibold">A.S.M. Raj Uddin</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>

        <button
          className="flex items-center gap-2 text-sm font-medium text-gray-600
          hover:text-red-600 transition"
        >
          <MdLogout size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
