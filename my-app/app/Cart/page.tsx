"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// CartPage component to show products added to cart
export default function Cart() {
  // Simulate cart data (usually stored in local storage or context)
  const [cart, setCart] = useState<any[]>([]);

  // Fetch cart data from localStorage (if using localStorage)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        if (action === "increase") item.quantity += 1;
        if (action === "decrease" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      <div className="grid gap-5 md:grid-cols-3 mt-8">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="px-3 py-1 text-white bg-gray-600 rounded-md"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="px-3 py-1 text-white bg-gray-600 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-white bg-red-500 rounded-md px-4 py-2"
                >
                  Remove
                </button>
                <span className="text-xl font-bold">${item.price * item.quantity}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 flex justify-between">
        <span className="text-xl font-semibold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
        <Link href="/checkout">
          <button className="text-white bg-blue-500 rounded-md px-6 py-3">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
