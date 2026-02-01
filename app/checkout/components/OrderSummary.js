import React from 'react'


// COMPONENTS
function Item({ name, price, qty }) {
    return (
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-gray-500 text-sm">Qty: {qty}</p>
        </div>
        <p className="font-medium">${price * qty}</p>
      </div>
    );
  }



const OrderSummary = () => {
  return (
    <div className="bg-white p-8 w-full rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          {/* Replace this with dynamic data from your cart */}
          <div className="flex flex-col gap-4 mb-6">
            <Item name="Modern Office Chair" price={249} qty={1} />
            <Item name="Ergonomic Desk" price={399} qty={1} />
            <Item name="Lamp Set" price={99} qty={2} />
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$846</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$866</span>
            </div>
          </div>
        </div>
  )
}

export default OrderSummary