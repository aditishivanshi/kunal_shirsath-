import React from 'react';
import { CloseIcon } from './icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } bg-[#f9f9f9]/80 backdrop-blur-lg`}
    >
      <div className="container mx-auto px-6 h-full flex flex-col">
        <div className="flex justify-end py-5">
            <button onClick={onClose} aria-label="Close menu">
                <CloseIcon className="w-7 h-7 text-[#222]" />
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-3xl font-semibold text-gray-800 hover:text-black">About</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-3xl font-semibold text-gray-800 hover:text-black">Services</a>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-3xl font-semibold text-gray-800 hover:text-black">Portfolio</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-3xl font-semibold text-gray-800 hover:text-black">Contact</a>
            <a 
              href="https://drive.google.com/file/d/1Hntnvwi6f21meDcHI88QzRTHv_hEbHg9/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl font-semibold text-gray-800 hover:text-black"
            >
              Resume
            </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;