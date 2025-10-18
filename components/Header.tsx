import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons';
import MobileMenu from './MobileMenu';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-normal tracking-wider text-gray-700 transition-colors duration-300 hover:text-black"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#f9f9f9]/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#home" className="font-logo text-2xl font-bold text-[#222]">
          Kunal Portfolio
          </a>
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="https://drive.google.com/file/d/1Hntnvwi6f21meDcHI88QzRTHv_hEbHg9/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-normal tracking-wider text-gray-700 transition-colors duration-300 hover:text-black"
            >
              Resume
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={handleMenuToggle} aria-label="Open menu">
              <MenuIcon className="w-6 h-6 text-[#222]" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;