"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { PiShoppingCartLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Get current route (for active link styling)
  const pathname = usePathname();
  // Handel Search
  const handleSearch = (e) =>{
    const value = e.target.value;
    setSearchTerm(value);
    console.log(value)
  }

  // Mobile drawer open / close state
  const [isOpen, setIsOpen] = useState(false);

  // Handle search submit
  const handleMenu = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
    e.target.reset();
  };

  // Navigation links (reused for desktop + mobile)
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "active-link" : ""}
          onClick={() => setIsOpen(false)} // close drawer on click
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={pathname === "/about" ? "active-link" : ""}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={pathname === "/products" ? "active-link" : ""}
          onClick={() => setIsOpen(false)}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/collections"
          className={pathname === "/collections" ? "active-link" : ""}
          onClick={() => setIsOpen(false)}
        >
          Collections
        </Link>
      </li>
    </>
  );

  return (
    <>
      {/* =================== NAVBAR =================== */}
      <div className="navbar bg-base-100 shadow-sm px-2">

        {/* -------- Left Section -------- */}
        <div className="navbar-start">

          {/* Mobile menu button (only visible on mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo / Brand */}
          <h1 className="text-xl font-semibold ml-2">Office Arc</h1>
        </div>

        {/* -------- Center Section (Desktop Links) -------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>

        {/* -------- Right Section -------- */}
        <div className="navbar-end gap-2">

          {/* Search bar */}
          <form
            onSubmit={handleMenu}
            className="hidden md:flex w-64"
          >
            <input
              type="text"
              name="search"
              placeholder="Search office furniture..."
              onChange={handleSearch}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </form>

          {/* Cart icon */}
          <button className="btn btn-ghost btn-circle">
            <PiShoppingCartLight size={20} />
          </button>

          {/* Profile icon */}
          <button className="btn btn-ghost btn-circle">
            <CgProfile size={20} />
          </button>
        </div>
      </div>

      {/* =================== MOBILE SLIDE DRAWER =================== */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Office Arc</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Drawer links */}
          <ul className="menu p-4 gap-3">
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;