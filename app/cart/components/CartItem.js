"use client";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition gap-4">
      <div className="w-full md:w-32 h-32 relative shrink-0 rounded-lg overflow-hidden">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:justify-between items-start md:items-center w-full gap-4">
        <div className="flex-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 mt-1">${item.price} each</p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            value={item.qty}
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
            className="w-16 border px-2 py-1 rounded-lg text-center outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 hover:text-red-800 transition"
          >
            <FaTrash size={18} />
          </button>
        </div>

        <p className="font-semibold text-lg">${item.price * item.qty}</p>
      </div>
    </div>
  );
}