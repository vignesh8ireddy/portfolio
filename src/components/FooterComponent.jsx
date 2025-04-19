import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="text-black py-8 font-title">
      <div className="container mx-auto px-8 md:px-16 lg:px-10">
        <div
          className=" border-t border-gray-800 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; 2021 - {new Date().getFullYear()} Vignesh Reddy Ireddy. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0"> 
            <a href="https://www.linkedin.com/in/vignesh8ireddy" className="text-gray-400 hover:text-black">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/vignesh8ireddy" className="text-gray-400 hover:text-black">
              <FaGithub />
            </a>
            <a href="mailto:vigneshreddyireddy@gmail.com" className="text-gray-400 hover:text-black">
              <FaEnvelope />
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