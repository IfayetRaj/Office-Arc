"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import { PiShoppingCartLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/axios";

const Navbar = () => {
  const { user, setUser } = useAuth(); // get auth state
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
    e.target.reset();
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await api.post("auth/logout");
      setUser(null);
    } catch (err) {
      console.log("Logout failed", err);
    }
  };

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "active-link" : ""}
          onClick={() => setIsOpen(false)}
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
    </>
  );

  return (
    <>
      {/* =================== NAVBAR =================== */}
      <div className="navbar bg-base-100 shadow-sm px-2 z-200">
        {/* Left */}
        <div className="navbar-start">
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
          <h1 className="text-xl font-semibold ml-2">Office Arc</h1>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-2">
          <form onSubmit={handleMenu} className="hidden md:flex w-64">
            <input
              type="text"
              name="search"
              placeholder="Search office furniture..."
              onChange={handleSearch}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black/50"
            />
          </form>

          {/* Cart */}
          <Link href="/cart" className="btn btn-ghost btn-circle">
            <PiShoppingCartLight size={20} />
          </Link>

          {/* Auth / Profile */}
          {!user ? (
            // No user → show login button
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          ) : (
            // User exists → show profile dropdown
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <button className="btn btn-ghost btn-circle">
                  <CgProfile size={20} />
                </button>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <button onClick={handleLogout}>Sign Out</button>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                {user.role === "user" && (
                  <li>
                    <Link href="/admin">Admin Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* =================== MOBILE SLIDE DRAWER =================== */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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

          <ul className="menu p-4 gap-3">{links}</ul>

          {/* Mobile auth button */}
          {!user ? (
            <Link
              href="/login"
              className="btn btn-primary btn-sm mt-4 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="btn btn-secondary btn-sm mt-4 w-full text-center"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;