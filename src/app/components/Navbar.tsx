// /app/components/Navbar.tsx
"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-800 font-bold text-xl">SlideSnap</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                onClick={handleSmoothScroll}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={handleSmoothScroll}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleSmoothScroll}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="pt-2 pb-3 space-y-1 bg-white">
              <li>
                <a
                  href="#home"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4 text-gray-600 hover:bg-gray-50"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4 text-gray-600 hover:bg-gray-50"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4 text-gray-600 hover:bg-gray-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
