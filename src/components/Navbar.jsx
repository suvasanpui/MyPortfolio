import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleSetActive = (section) => {
    setActive(section);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <nav className="bg-[#1B1B1E] text-white px-8 md:px-16 lg:px-24">
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
          className={`lg:flex lg:space-x-6 items-center  ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-0 right-8 md:right-0 w-64 md:w-auto 
          bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg text-white
          md:space-x-4 md:flex md:justify-end z-50`}
        >
          <div className=" font-semibold">
            <a
              href="#home"
              onClick={() => handleSetActive("home")}
              className={`group relative block md:inline hover:text-green-500 py-2 md:m-4 transition-all duration-200 transform hover:scale-105 ${
                active === "home" ? "text-green-300 font-bold scale-110" : ""
              }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300 origin-left w-0 group-hover:w-full ${
                  active === "home" ? "w-full" : ""
                }`}
              />
            </a>
            <a
              href="#about"
              onClick={() => handleSetActive("about")}
              className={`group relative block md:inline hover:text-green-500 py-2 md:py-0  md:m-4 transition-all duration-200 transform hover:scale-105 ${
                active === "about" ? "text-green-300 font-bold scale-110" : ""
              }`}
            >
              About Me
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300 origin-left w-0 group-hover:w-full ${
                  active === "about" ? "w-full" : ""
                }`}
              />
            </a>
            <a
              href="#service"
              onClick={() => handleSetActive("service")}
              className={`group relative block md:inline hover:text-green-500 py-2 md:py-0  md:m-4 transition-all duration-200 transform hover:scale-105 ${
                active === "service" ? "text-green-300 font-bold scale-110" : ""
              }`}
            >
              Education
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300 origin-left w-0 group-hover:w-full ${
                  active === "service" ? "w-full" : ""
                }`}
              />
            </a>
            <a
              href="#project"
              onClick={() => handleSetActive("project")}
              className={`group relative block md:inline hover:text-green-500 py-2 md:py-0  md:m-4 transition-all duration-200 transform hover:scale-105 ${
                active === "project" ? "text-green-300 font-bold scale-110" : ""
              }`}
            >
              Projects
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-green-400 transition-all duration-300 origin-left w-0 group-hover:w-full ${
                  active === "project" ? "w-full" : ""
                }`}
              />
            </a>

            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              onClick={() => handleSetActive("contact")}
            >
              <a
                href="#contact"
                className={`hover:text-white ${
                  active === "contact" ? "text-white font-bold" : ""
                }`}
              >
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
