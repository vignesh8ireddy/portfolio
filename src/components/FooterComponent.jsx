import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="text-black py-8 font-title">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; 2021 - {new Date().getFullYear()} Vignesh Reddy Ireddy. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-black">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;