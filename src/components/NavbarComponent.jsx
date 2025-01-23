import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="bg-gray-50 text-gray-500 px-5 md:px-16 lg:px-10 top-0 z-50 font-title sticky">
      <div className="container py-4 flex justify-between items-center ">
        {/* Logo Section */}
        <div className="space-x-6 text-sm md:text-base">
          <a
            href="https://vigneshreddyireddy.com"
            className="hover:text-gray-400 transition duration-300"
          >
            Vignesh Reddy Ireddy
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm md:text-base">
          <a
            href="#skills"
            className="hover:text-gray-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-gray-400 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="hover:text-gray-400 transition duration-300"
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
