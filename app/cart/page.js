"use client";

import { Playfair_Display } from "next/font/google";
import CartContainer from "./components/CartContainer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CartPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 md:px-16">
      <h1 className={`${playfair.className} border-b border-gray-600 pb-4 text-4xl font-bold mb-12`}>
        Shopping Cart
      </h1>

      <CartContainer />
    </main>
  );
}