import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-2 bg-[#111] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h1 className="text-xl font-bold text-white">
              Affordable Gadgets Hub
            </h1>
            <p className="mt-4 text-sm leading-6">
              Your trusted hub for power banks, solar products, smart gadgets,
              male and female slides and electronics at the best prices.
            </p>

            {/* Socials */}
            <div className="mt-4 flex gap-4">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#powerbank" className="hover:text-white">
                  Power Bank
                </Link>
              </li>
              <li>
                <Link to="/#solar" className="hover:text-white">
                  Solar Products
                </Link>
              </li>
              <li>
                <Link to="/#electronics" className="hover:text-white">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-sm font-semibold uppercase text-white">
              Brands
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/product/infinix" className="hover:text-white">
                  Infinix
                </Link>
              </li>
              <li>
                <Link to="/product/oraimo" className="hover:text-white">
                  Oraimo
                </Link>
              </li>
              <li>
                <Link to="/product/itel" className="hover:text-white">
                  Itel
                </Link>
              </li>
              <li>
                <Link to="/product/baseus" className="hover:text-white">
                  Baseus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Email: support@hagiostech.com</li>
              <li>Phone: 09039415354</li>
              <li>Osogbo, osun State, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Affordable Gadgets Hub All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
