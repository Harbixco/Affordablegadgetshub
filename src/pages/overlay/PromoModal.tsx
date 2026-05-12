import { useEffect, useState } from "react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("seenPromo");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("seenPromo", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="animate-scaleIn relative w-[90%] max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Headline */}
        <h2 className="mb-2 text-xl font-semibold">
          🚀 Grow Your Business Online
        </h2>

        {/* Message */}
        <p className="mb-4 text-sm text-gray-600">
          Still selling only on WhatsApp or Instagram? I can build you a
          professional website that attracts customers and increases your sales.
        </p>

        {/* Offer */}
        <h1 className="mb-4 text-3xl font-bold text-green-600">
          Get Your Website Today
        </h1>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <a
            href="https://wa.me/2349039415354?text=Hi%2C%20I%20saw%20your%20website%20and%20I%20want%20a%20business%20website"
            target="_blank"
            className="block rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Chat Me on WhatsApp
          </a>

          <button
            onClick={closeModal}
            className="text-sm text-gray-500 underline"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
