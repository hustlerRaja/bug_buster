import React from 'react';

function Header() {
  return (
    <nav className="w-full border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/apple_logo.png" alt="Logo" className="h-25 w-auto object-contain" />
        </div>
        {/* Menu */}
  <ul className="flex-1 flex items-center justify-center space-x-4 whitespace-nowrap">
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">Homeeee</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">Products</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">E-Store</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">iPhone Exclusive store</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">Community</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">Support</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">iOS</li>
          <li className="text-gray-700 px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">Explore iPhone</li>
        </ul>
        {/* Spacer to push icons further right */}
        <div className="min-w-[120px]"></div>
        {/* Icons */}
        <div className="flex items-center space-x-6 justify-end">
          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* User Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Header;