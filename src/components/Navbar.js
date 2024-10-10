import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoCodeReview } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md bg-white border-dashed border-2 border-black sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-5xl font-bold"><GoCodeReview className='text-5xl font-bold' /></div>

          {/* Hamburger menu (visible on small screens) */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-black hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links (hidden on small screens) */}
          <div className={`hidden md:flex md:items-center md:space-x-4`}>
            <Link to="/" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              HOME
            </Link>
            <Link to="/about" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              ABOUT
            </Link>
            <Link to="/projects" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              PROJECTS
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              CONTACT
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Links */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-2 mt-2">
            <Link to="/" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              HOME
            </Link>
            <Link to="/about" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              ABOUT
            </Link>
            <Link to="/projects" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              PROJECTS
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white transition duration-300">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;