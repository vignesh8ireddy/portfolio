import React, { useState } from 'react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-gray-500 fixed w-full h-16 top-0 z-50 shadow">
      <div className="container h-full w-full px-5 flex items-center justify-between">

        {/* Left-Aligned Logo */}
        <div className="flex-1 text-sm md:text-xl font-semibold hover:text-gray-700">
          <a href="https://vigneshreddyireddy.com"  >
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Right-Aligned Navigation Links */}
        <div
          className={`flex-1 ${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 right-0 w-full bg-gray-50 justify-end md:relative md:top-0 md:right-auto md:flex md:justify-end md:items-center md:space-x-6 text-sm md:text-base`}
        >
          {[
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#education', label: 'Education' },
            { href: '#certifications', label: 'Certifications' },
            { href: '#contact', label: 'Contact Me' },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-5 py-3 md:px-0 md:py-0 border-b border-gray-200 md:border-none hover:scale-105 hover:text-gray-700 text-right md:text-left transition-transform duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
