import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allProducts } from "./allProducts";

// ✅ Define the Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string | number;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  // ✅ NEW: ref for detecting outside click
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filtered as Product[]);
  };

  const handleSelect = (product: Product) => {
    setQuery("");
    setResults([]);

    navigate(`/${product.category}details/${product.id}`);
  };

  // ✅ NEW: close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search all products..."
        className="h-6 w-full rounded-lg border py-2 text-xs focus:outline-none focus:ring-2 focus:ring-black md:h-8 md:px-4 md:text-sm"
      />

      {query && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border bg-white shadow-lg">
          {results.length > 0 ? (
            results.slice(0, 6).map((item) => (
              <button
                key={`${item.category}-${item.id}`}
                onClick={() => handleSelect(item)}
                className="flex w-full cursor-pointer items-center gap-3 p-2 text-left transition-colors hover:bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-10 rounded object-contain"
                />
                <div>
                  <p className="text-[14px] font-medium text-gray-900 md:text-sm">
                    {item.name}
                  </p>
                  <span className="text-xs capitalize text-gray-500">
                    {item.category}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <p className="p-3 text-center text-sm text-gray-500">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}
