import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto flex justify-end items-center space-x-8">
        {/* Right section with navigation links */}
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Blogs</a>
        </nav>

        {/* Right section with search bar and icons */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 border rounded-lg"
          />
          {/* Icons for favorites, cart, and profile */}
          <a href="#" className="text-gray-800">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#" className="text-gray-800">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="#" className="text-gray-800">
            <i className="fas fa-user"></i>
          </a>
          {/* Icons section */}

        <div className="flex space-x-6">
        <FaHeart className="text-gray-700 text-xl cursor-pointer" />
          <FaShoppingCart className="text-gray-700 text-xl cursor-pointer" />
          <FaUser className="text-gray-700 text-xl cursor-pointer" />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
