import { useState, useEffect } from "react";
import { shoeproducts } from "../../DummyData/data";
import { useNavigate } from "react-router-dom";
import LazyImage from "../Lazyimage";

export default function Powerbank() {
  const [loading, setLoading] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(9);

  const navigate = useNavigate();

  // Handle responsive number of items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(10); // md and up
      } else {
        setItemsToShow(10); // small screen
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewAll = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/all-shoe");
    }, 500);
  };

  return (
    <>
      <div
        id="shoes"
        className="mt-2 flex scroll-mt-24 items-center justify-between bg-[#E61601] px-4 py-2 text-[#FEFAFA] md:px-6"
      >
        <h2 className="text-lg font-semibold md:text-xl">
          Male and Female slides
        </h2>

        <button
          onClick={() => navigate("/all-shoe")}
          className="rounded-md bg-white px-3 py-1 text-sm text-black transition hover:bg-gray-200"
        >
          See More →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {shoeproducts.slice(0, itemsToShow).map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/shoedetails/${item.id}`)}
            className="cursor-pointer rounded-lg border p-3 shadow-sm transition hover:shadow-md"
          >
            <LazyImage
              src={item.image}
              alt={item.name}
              className="h-24 w-full rounded-md object-cover md:h-40"
            />

            <h3 className="mt-2 line-clamp-2 text-xs font-semibold md:text-sm">
              {item.name}
            </h3>

            <div className="mt-1">
              <span className="text-xs font-semibold text-black md:text-sm">
                {item.price}
              </span>
              <span className="ml-2 text-xs font-semibold text-gray-400 line-through md:text-sm">
                {item.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SEE MORE BUTTON */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleViewAll}
          disabled={loading}
          className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-black 
          bg-gradient-to-r from-red-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-gray-800 active:scale-95 disabled:opacity-70"
        >
          <span className="pointer-events-none absolute inset-0">
            <span className="absolute inset-0 scale-0 rounded-full bg-white/20 opacity-0 transition duration-500 group-active:scale-150 group-active:opacity-100"></span>
          </span>

          <span className="relative flex items-center gap-2">
            {loading ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Loading...
              </>
            ) : (
              <>
                View All
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </span>
        </button>
      </div>
    </>
  );
} 