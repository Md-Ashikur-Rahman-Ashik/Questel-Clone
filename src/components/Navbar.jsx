"use client"
import { useState } from 'react';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Placeholder icons for Hamburger and Close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Replace with the Questel logo path
            alt="Questel Logo"
            width={100}
            height={24}
            className="cursor-pointer"
          />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <XIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center lg:gap-6 hidden flex-col lg:flex-row lg:static absolute top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-lg p-4 lg:p-0 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center gap-6">
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Low energy mode</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Learn & Support</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">About Questel</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Careers</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Login Pages</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">EN</div>
          </div>

          <div className="flex items-center gap-6 mt-4 lg:mt-0">
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Patent</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Trademark</div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Innovation</div>
            <div className="text-gray-600 hover:text-blue-500 cursor-pointer">Solutions</div>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">Contact</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
