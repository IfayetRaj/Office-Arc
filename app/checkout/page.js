"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import OrderSummary from "./components/OrderSummary";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "credit-card",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate payment logic here
    alert("Order placed successfully!");
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 md:px-16">
      <h1 className={`${playfair.className} border-b border-gray-600 pb-4 text-4xl font-bold mb-12`}>
        Checkout
      </h1>

      <div className="flex flex-col-reverse md:flex items-center justify-center md:flex-row gap-12">
        {/* ================= Billing / Shipping Form ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 w-full rounded-lg shadow-md space-y-6 flex-1"
        >
          <h2 className="text-2xl font-semibold mb-4">Billing & Shipping</h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-lg flex-1 focus:ring-2 focus:ring-black outline-none"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP / Postal Code"
                value={form.zip}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-lg flex-1 focus:ring-2 focus:ring-black outline-none"
              />
            </div>
          </div>

          {/* ================= Payment Method ================= */}
          <div>
            <h3 className="text-lg font-medium mb-2">Payment Method</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={form.payment === "credit-card"}
                  onChange={handleChange}
                  className="accent-black"
                />
                Credit / Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={form.payment === "paypal"}
                  onChange={handleChange}
                  className="accent-black"
                />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={form.payment === "cash"}
                  onChange={handleChange}
                  className="accent-black"
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>

        {/* ================= Order Summary ================= */}
        <OrderSummary></OrderSummary>
      </div>
    </main>
  );
}