"use client";

import React from "react";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const handleMenu = (e) =>{
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);
    e.target.reset();
  } 

  const links = (
    <>
      <li>
        <Link href="/" className={pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={pathname === "/about" ? "active-link" : ""}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={pathname === "/products" ? "active-link" : ""}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/collections"
          className={pathname === "/collections" ? "active-link" : ""}
        >
          Collections
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-compact dropdown-content bg-white rounded-sm shadow-lg p-4 mt-2 w-52 flex flex-col gap-2 border border-gray-200"
          >
            {links}
          </ul>
        </div>
        <h1 className={`text-xl`}>Office Arc</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <form onSubmit={handleMenu} className="w-full flex justify-center px-4">
          <input
            type="text"
            placeholder="Search office furniture..."
            name="search"
            className="w-full px-5 py-2 md:ml-13 text-sm md:text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-black/50 transition"
          />
        </form>
        <button className="btn btn-ghost btn-circle">
          <PiShoppingCartLight size={20} />
        </button>
        <button className="btn btn-ghost btn-circle">
          <CgProfile size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
