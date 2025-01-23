import React, { useState, useEffect } from 'react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop; // for better compatibility
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gray-50 text-gray-500 px-5 md:px-16 lg:px-10 font-title transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-sm md:text-base font-semibold">
          <a
            href="https://vigneshreddyireddy.com"
            className="hover:text-gray-400 transition duration-300"
          >
            Vignesh Reddy Ireddy
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-gray-400 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base mt-4 md:mt-0`}
        >
          <a
            href="#skills"
            className="block hover:text-gray-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block hover:text-gray-400 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block hover:text-gray-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="block hover:text-gray-400 transition duration-300"
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
