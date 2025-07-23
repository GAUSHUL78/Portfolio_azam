import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Left: Name and subtitle */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">Gaushul Azam</h2>
          <p className="text-gray-300 text-lg mb-2">Passionate about building impactful digital products and seamless user experiences.</p>
        </div>
        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-2xl mt-2 md:mt-0">
          <a href="https://github.com/GAUSHUL78" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/gaushul-azam-064b58257/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaTwitter /></a>
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-white"><FaEnvelope /></a>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <span>© 2025 Gaushul Azam. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
