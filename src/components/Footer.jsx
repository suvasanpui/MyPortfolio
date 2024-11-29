import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-1xl font-bold mb-2">Suva Sanpui</h3>
            
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              
              
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/subho.sanpui.3" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            
            <a href="https://linkedin.com/in/suva-sanpui">
              <FaLinkedin />
            </a>
            <a href="https://github.com/suvasanpui" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms and condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
