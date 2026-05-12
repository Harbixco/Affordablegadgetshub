import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Toaster } from "sonner";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const [modalItem, setModalItem] = useState<number | null>(null);

  // Calculate total price
  const total = cart.reduce(
    (acc, item) =>
      acc +
      (parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0) * (item.qty || 1),
    0,
  );

  // ✅ EMPTY CART UI (ICON VERSION)
  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-10 text-center md:min-h-screen md:py-0">
        {/* ICON */}
        <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-gray-200">
          <FiShoppingCart className="text-4xl text-green-500" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Your cart is empty!
        </h2>

        <p className="mt-2 text-gray-600">
          Browse our categories and discover our best deals!
        </p>

        <Link
          to="/"
          className="mt-6 rounded bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-600"
        >
          Start Shopping
        </Link>
      </div>
    );

  // WhatsApp message
  const whatsappMessage = cart
    .map(
      (item) =>
        `🛍 Product: ${item.name}\nQty: ${item.qty}\nPrice: ${item.price}`,
    )
    .join("\n\n");

  const whatsappLink = `https://wa.me/2349039415354?text=${encodeURIComponent(
    `Hello, I want to order:\n\n${whatsappMessage}\n\nTotal: ₦${total.toLocaleString()}`,
  )}`;

  return (
    <div className="relative mx-auto max-w-4xl p-6 pb-8 md:pb-24">
      <Toaster position="top-right" richColors />
      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Your Cart 🛒</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between rounded border bg-white p-4 md:flex-row md:p-3"
          >
            <Link
              to={`/powerbankdetails/${item.id}`}
              className="flex flex-1 items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="size-20 rounded object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold md:text-lg">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  {item.qty} x {item.price}
                </p>
              </div>
            </Link>

            <div className="mt-3 flex items-center gap-2 md:mt-0">
              <button
                onClick={() => decreaseQty(item.id)}
                className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                disabled={item.qty === 1}
              >
                -
              </button>

              <span className="px-2">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => setModalItem(item.id)}
                className="ml-20 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 md:ml-10"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-6 flex items-center justify-between rounded border bg-white p-4 text-lg font-semibold">
        <span>Total:</span>
        <span>₦{total.toLocaleString()}</span>
      </div>

      {/* Desktop Button */}
      <div className="mt-8 hidden text-center md:block">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600"
        >
          Order via WhatsApp
        </a>
      </div>

      {/* Mobile Sticky Button */}
      <div className=" inset-x-0 bottom-0 z-[999] bg-white p-4 shadow-lg md:hidden">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded bg-green-500 py-3 text-center font-bold text-white"
        >
          Order via WhatsApp
        </a>
      </div>

      {/* REMOVE MODAL */}
      {modalItem !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Confirm Removal</h3>
            <p className="mb-6">
              Are you sure you want to remove this item from your cart?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalItem(null)}
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (modalItem !== null) removeFromCart(modalItem);
                  setModalItem(null);
                }}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
