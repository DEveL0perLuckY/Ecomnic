import React, { useState } from "react";
import { ShoppingCart, Search, User, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  "Gaming Keyboards",
  "Gaming Mouse",

];

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link
            to="/home"
            className="text-2xl font-bold tracking-tight transition-transform hover:scale-105"
          >
            <span className="text-primary">Ecomnic</span>
          </Link>

          <nav className="hidden lg:flex gap-8 font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={"/"+link}
                className="relative py-2 hover:text-primary transition-colors
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                  after:bg-primary after:transition-all hover:after:w-full"
              >
                {link}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative flex items-center">
              <button
                onClick={() => setSearchOpen(!isSearchOpen)}
                className="p-2 hover:text-primary transition-colors"
              >
                {isSearchOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>
              <input
                type="text"
                placeholder="Search products..."
                className={`absolute right-0 top-full mt-1 w-64 px-4 py-2 border rounded-md shadow-sm
                  transition-all duration-300 ${
                    isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              />
            </div>

            <Link
              to="/profile"
              className="p-2 hover:text-primary transition-transform hover:scale-110"
            >
              <User className="w-5 h-5" />
            </Link>

            <Link
              to="/cart"
              className="p-2 relative hover:text-primary transition-transform hover:scale-110"
            >
              <ShoppingCart className="w-5 h-5" />
              <span
                className="absolute top-0 right-0 text-xs bg-accent text-white 
                w-4 h-4 flex items-center justify-center rounded-full animate-bounce"
              >
                8
              </span>
            </Link>
          </div>
        </div>

        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? "max-h-96 pt-4" : "max-h-0"}`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              to="#"
              className="block py-3 px-4 hover:bg-gray-50 rounded-md transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
