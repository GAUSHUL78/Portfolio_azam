import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-12 ${isScrolled ? "bg-[#18181b]/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="text-white py-5 flex items-center w-full justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent tracking-widest drop-shadow-lg">
          Azam<span className="ml-1 text-white font-light text-lg align-top">Portfolio</span>
        </div>
        {/* Navigation sections on the right */}
        <ul className="hidden md:flex space-x-8 text-gray-300 items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-4 py-2 rounded-full font-bold transition-all duration-300 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white shadow-md hover:scale-105 hover:from-pink-500 hover:to-purple-500 ${activeSection === item.id ? "ring-2 ring-pink-400" : ""
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-4">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white shadow-md hover:scale-105 hover:from-pink-500 hover:to-purple-500 ${activeSection === item.id ? "ring-2 ring-pink-400" : ""
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <a
              href="https://drive.google.com/file/d/11qHeHkrAb1p5J22leXgny05SC0qgVTIy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white shadow-md hover:scale-105 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
            >
              Download CV
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
