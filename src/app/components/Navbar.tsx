// /app/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
      <nav className=" p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" font-bold text-xl">Ranehobasi</div>
          <div className="hidden md:flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              <li>
                <a
                  href="#home"
                  onClick={handleSmoothScroll}
                  className="transition-colors"
                  style={{color: 'var(--nav-text)'}}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={handleSmoothScroll}
                  className="  transition-colors"
                  style={{color: 'var(--nav-text)'}}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="transition-colors"
                  style={{color: 'var(--nav-text)'}}
                >
                  Contact
                </a>
              </li>
            </ul>

             {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          </div>

         
        </div>

        {/* Mobile Menu Button and Theme Toggle*/}
        <div className="md:hidden flex items-center space-x-2 absolute top-4 right-4">
          <ThemeToggle />

          <button className="text-gray-600 dark:text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
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
            <ul className="pt-2 pb-3 space-y-1 ">
              <li>
                <a
                  href="#home"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4  hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4  hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="block py-2 px-4  hover:bg-gray-50 dark:hover:bg-gray-700"
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