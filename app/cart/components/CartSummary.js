"use client";

import Link from "next/link";

export default function CartSummary({ cartItems, subtotal }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between w-full">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.qty}</span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}

        <div className="border-t mt-4 pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${subtotal + 20}</span>
          </div>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-6 inline-block text-center bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}