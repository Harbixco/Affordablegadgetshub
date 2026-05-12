import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { useCart } from "../context/CartContext";
import SearchBar from "../search/SearchBar"; // ✅ import search

const navigation = [
  { name: "Power Bank", href: "/#powerbank" },
  { name: "Solar Products", href: "/#solar" },
  { name: "Shoes", href: "/#shoes" },
  { name: "Laptops", href: "/#laptops" },
  { name: "Phone & Accessories", href: "/#phones" },
  { name: "Electronics", href: "/#electronics" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 1), 0);

  const handleScroll = (href: string) => {
    if (location.pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#333333]">
      <nav className="flex items-center justify-between p-2 md:px-8">
        {/* 🔹 Logo + Search (Desktop) */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-20 transition-all md:h-24"
            />
          </Link>

          {/* ✅ Search beside logo (md and above) */}
          <div className="hidden w-[250px] md:block">
            <SearchBar />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center md:flex md:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              replace
              onClick={() => handleScroll(item.href)}
              className="text-sm font-semibold text-white transition-colors hover:text-gray-300 md:text-base"
            >
              {item.name}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link to="/cart" className="relative ml-4 text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-2 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Section */}
        <div className="flex items-center gap-4 md:hidden">
          {/* ✅ Search near cart (mobile) */}
          <div className="w-[200px]">
            <SearchBar/>
          </div>

          <Link to="/cart" className="relative text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-2 text-xs">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div
          className="fixed inset-0 z-50 bg-[#333333]/30"
          aria-hidden="true"
        />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-[#333333] p-4 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src={logo} alt="Logo" className="h-14 w-20 md:h-14" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                replace
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleScroll(item.href);
                }}
                className="block rounded-lg px-3 py-2 font-semibold text-white transition hover:bg-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
