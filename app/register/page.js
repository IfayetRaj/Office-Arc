"use client";

import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Playfair_Display } from "next/font/google";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      // alert("Password did not matched!");
      Swal.fire({
        title: "Password did not matched!",
        icon: "error",
        draggable: true,
        iconColor: "black",
        toast: true,
      });
      return;
    }
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    try {
      setLoading(true);
      const res = await api.post("/auth/register", formData);
      console.log(res);
      setLoading(false);
      if (res.status === 201) {
        Swal.fire({
          title: "User registered successfully",
          icon: "success",
          draggable: true,
          iconColor: "black",
          toast: true,
        });
        router.push("/login");
      } else {
        Swal.fire({
          title: res.message || "Something went wrong!",
          icon: "error",
          draggable: true,
          iconColor: "black",
          toast: true,
        });
      }
    } catch (err) {
      Swal.fire({
        title: err.response?.data?.message || "Something went wrong!",
        icon: "error",
        draggable: true,
        iconColor: "black",
        toast: true,
      });
    }
  };

  const handleGoogleSignIn = () => {
    console.log("hi google");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 md:p-7">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-200"
      >
        {/* Heading */}
        <div className="mb-2 text-center">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-semibold text-gray-900`}
          >
            Office Arc
          </h1>
          <h2 className="text-gray-500 mt-2 text-lg">Create Account</h2>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">First Name</label>
          <input
            type="text"
            required
            placeholder="Ifayet"
            name="firstName"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Last Name</label>
          <input
            type="text"
            required
            placeholder="Raj"
            name="lastName"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="raj11@gemail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            placeholder="+880123456789"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Re-enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        {/* Submit */}
        <input
          disabled={loading}
          type="submit"
          value={loading ? "Registering..." : "Register"}
          className="mt-4 w-full py-3 bg-black text-white rounded-lg font-medium cursor-pointer hover:bg-gray-900 active:scale-95 transition"
        />
        <button
          onClick={handleGoogleSignIn}
          className=" w-full py-3 bg-black text-white rounded-lg font-medium cursor-pointer hover:bg-gray-900 active:scale-95 transition flex items-center justify-center gap-3"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>

        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
