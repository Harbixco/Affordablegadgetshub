import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { powerbankproducts } from "../../DummyData/powerbankdummy/powerbank";

const ITEMS_PER_PAGE = 20;

export default function Allpowerbanks() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ Scroll to top when pagination changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Pagination logic
  const totalPages = Math.ceil(powerbankproducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = powerbankproducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between bg-[#E61601] px-4 py-2 text-[#FEFAFA] md:px-6">
          <h1 className="text-xl font-bold md:text-3xl">Power Bank Products</h1>

          <p className="text-sm">{powerbankproducts.length} items</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {currentProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/powerbankdetails/${item.id}`)}
              className="cursor-pointer rounded-xl border bg-white p-3 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full rounded-md object-contain"
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

        {/* PAGINATION */}
        <div className="flex flex-wrap items-center justify-center gap-2 py-5 md:mt-8 md:py-10">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded px-3 py-2 ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "border bg-white"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
