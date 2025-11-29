"use client";

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  HeartIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-white text-gray-800 font-montserrat font-bold py-4 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="font-bold text-2xl tracking-[0.1px]">Bandage</p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-gray-600 text-sm font-bold tracking-[0.2px]">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>

            <li className="flex items-center hover:text-blue-600 transition-colors cursor-pointer">
              Shop
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pages
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-blue-600 text-sm font-bold">
            <div className="flex items-center space-x-1">
              <UserIcon className="w-5 h-5" />
              <a href="#" className="hover:opacity-75 transition-opacity">
                Login / Register
              </a>
            </div>

            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer hover:opacity-75" />
            <div className="flex items-center cursor-pointer hover:opacity-75">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="ml-1 text-xs font-normal">1</span>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-75">
              <HeartIcon className="w-5 h-5" />
              <span className="ml-1 text-xs font-normal">1</span>
            </div>
          </div>
        </div>

        {/* Mobile Icons & Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <MagnifyingGlassIcon className="w-6 h-6" />

          <div className="flex items-center">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="ml-1 text-xs font-normal">1</span>
          </div>

          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 absolute w-full left-0 z-10 shadow-md">
          <ul className="flex flex-col space-y-4 text-gray-600 text-base font-bold tracking-[0.2px]">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pages
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
