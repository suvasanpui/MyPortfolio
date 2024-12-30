import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 text-3xl font-bold">
          Suva
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-6 items-center ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-0 right-8 md:right-0 w-64 md:w-auto 
          bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg text-white
          md:space-x-4 md:flex md:justify-end z-50`}
        >
          <a
            href="#home"
            className="block md:inline hover:text-blue-600 py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="block md:inline hover:text-blue-600 py-2 md:py-0"
          >
            About Me
          </a>
          <a
            href="#service"
            className="block md:inline hover:text-blue-600 py-2 md:py-0"
          >
            Education
          </a>
          <a
            href="#project"
            className="block md:inline hover:text-blue-600 py-2 md:py-0"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block md:inline hover:text-blue-600 py-2 md:py-0"
          >
            Contact
          </a>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            <a href="#contact" className="hover:text-gray-400">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
