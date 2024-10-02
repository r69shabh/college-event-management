import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle"; // Ensure correct import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-6 flex items-center">
          <img src="/favicon.ico" alt="Logo" className="h-8 w-8 mr-2" />
          College Events
        </Link>

        {/* Center-Aligned Search Bar */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search events, dashboard..."
            className="w-full max-w-lg px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Right Section with Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="/events" className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300">
            Events
          </Link>
          <Link href="/dashboard" className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300">
            Dashboard
          </Link>
          <Link href="/profile" className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300">
            Profile
          </Link>
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Log In
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300">
            Sign Up
          </Link>
          <DarkModeToggle /> {/* Ensure this component is correctly imported */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <Link href="/" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Home
          </Link>
          <Link href="/events" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Events
          </Link>
          <Link href="/dashboard" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Dashboard
          </Link>
          <Link href="/profile" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Profile
          </Link>
          <Link href="/login" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Log In
          </Link>
          <Link href="/signup" className="block py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
            Sign Up
          </Link>
          <DarkModeToggle /> {/* Ensure this component is correctly imported */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;