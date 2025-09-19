import React from 'react';

function Header() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/apple_logo.png" alt="Logo" className="h-12 w-auto object-contain animate-bounce" />
        </div>
        {/* Menu */}
        <ul className="flex-1 flex items-center justify-center space-x-6 whitespace-nowrap">
          {['Home', 'Products', 'E-Store', 'iPhone Exclusive', 'Community', 'Support', 'iOS', 'Explore iPhone'].map((item, idx) => (
            <li
              key={item}
              className="text-gray-200 px-4 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer hover:text-blue-400 hover:bg-gray-800 hover:scale-105 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Spacer to push icons further right */}
        <div className="min-w-[120px]"></div>
        {/* Icons */}
        <div className="flex items-center space-x-6 justify-end">
          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-200 hover:text-blue-400 cursor-pointer animate-fade-in" style={{ animationDelay: '900ms' }}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* User Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-200 hover:text-blue-400 cursor-pointer animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </nav>
  );
}

export default Header;