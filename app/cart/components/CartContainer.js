"use client";

import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function CartContainer() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Modern Office Chair", price: 249, qty: 1, img: "/chair1.jpg" },
    { id: 2, name: "Ergonomic Desk", price: 399, qty: 1, img: "/desk1.jpg" },
    { id: 3, name: "Lamp Set", price: 99, qty: 2, img: "/lamp1.jpg" },
    { id: 4, name: "Bookshelf", price: 150, qty: 1, img: "/bookshelf.jpg" },
    { id: 5, name: "Office Stool", price: 120, qty: 2, img: "/stool.jpg" },
    { id: 6, name: "Desk Organizer", price: 40, qty: 3, img: "/organizer.jpg" },
  ]);

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {/* ================= Cart Items (scrollable) ================= */}
      <div className="md:col-span-2 h-[70vh] overflow-y-auto space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          ))
        )}
      </div>

      {/* ================= Order Summary (fixed) ================= */}
      <div className="md:sticky md:top-20">
        <CartSummary cartItems={cartItems} subtotal={subtotal} />
      </div>
    </div>
  );
}