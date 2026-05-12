import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Toaster, toast } from "sonner";
import { shoeproducts } from "../../DummyData/shoedummy/shoes";

export default function Shoedetails() {
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const product = shoeproducts.find((item) => item.id.toString() === id);

  if (!product) {
    return <div className="p-4 text-red-500">Product not found</div>;
  }

  // IMAGES
  const images = product.images || [product.image];

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // WHATSAPP
  const phone = "2349039415354";
  const message = `Hello, I want to order:

🛍 Product: ${product.name}
💰 Price: ${product.price}

Is it available?`;

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message,
  )}`;

  // RELATED PRODUCTS
  const relatedProducts = shoeproducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // CART ADD FUNCTION
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Toaster position="top-right" richColors />

      <div className="mx-auto max-w-6xl p-4 md:p-8">
        {/* Breadcrumb */}
        <p className="mb-4 text-sm text-gray-500">
          Home &gt; Products &gt; {product.name}
        </p>

        {/* MAIN PRODUCT */}
        <div className="grid gap-8 rounded-lg bg-white p-4 shadow md:grid-cols-2">
          {/* IMAGE */}
          <div className="relative rounded-lg border bg-white p-4">
            <div className="relative flex items-center justify-center">
              <div className="group overflow-hidden">
                <img
                  src={images[currentIndex]}
                  alt={product.name}
                  className="h-[300px] object-contain transition duration-500 group-hover:scale-110 md:h-[400px]"
                />
              </div>

              <button
                onClick={prevImage}
                className="absolute left-2 rounded-full bg-white p-2 shadow"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 rounded-full bg-white p-2 shadow"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex justify-center gap-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setCurrentIndex(index)}
                  className={`size-16 cursor-pointer rounded border object-contain p-1 ${
                    currentIndex === index
                      ? "border-orange-500"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-semibold md:text-3xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-1 text-sm text-yellow-500">
                ★★★★★ <span className="text-gray-500">(120)</span>
              </div>

              {/* Price */}
              <div className="mt-1">
                <p className="text-lg font-bold text-red-600 md:text-2xl">
                  {product.price}
                </p>
                {product.oldPrice && (
                  <p className="text-sm text-gray-400 line-through md:text-xl">
                    {product.oldPrice}
                  </p>
                )}
              </div>

              {/* Features */}
              {product.features && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700 md:text-xl">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <button
                onClick={handleAddToCart}
                className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800"
              >
                Add to Cart 🛒
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-green-500 py-3 text-center text-white hover:bg-green-600"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mx-auto max-w-6xl pl-4 md:p-8">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            Related Products
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                to={`/shoedetails/${item.id}`}
                key={item.id}
                className="group rounded-lg border bg-white p-2 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain transition group-hover:scale-105"
                />
                <div className="mt-2 text-sm font-semibold">{item.name}</div>
                <div className="mt-1 text-red-600">{item.price}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE BUTTON */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-3 shadow md:hidden">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded bg-green-500 py-3 text-center font-bold text-white"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
