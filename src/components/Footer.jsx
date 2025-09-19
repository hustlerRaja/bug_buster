import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 mt-0 border-t border-gray-800 animate-fade-in">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex flex-col items-center md:items-start">
          <img src="/apple_logo.png" alt="Apple Logo" className="h-10 w-auto mb-2 animate-bounce" />
          <span className="text-lg font-bold mb-2 transition-colors duration-500 hover:text-blue-400">Apple iPhone 17 Pro Launch</span>
          <span className="text-sm animate-fade-in delay-300">© 2025 Apple Inc. All rights reserved.</span>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:underline hover:text-blue-400 transition-colors duration-300 animate-fade-in delay-500">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-blue-400 transition-colors duration-300 animate-fade-in delay-700">Terms of Use</a>
          <a href="#" className="hover:underline hover:text-blue-400 transition-colors duration-300 animate-fade-in delay-900">Contact</a>
          <a href="#" className="hover:underline hover:text-blue-400 transition-colors duration-300 animate-fade-in delay-1100">Support</a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out both;
        }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-500 { animation-delay: 0.5s; }
        .animate-fade-in.delay-700 { animation-delay: 0.7s; }
        .animate-fade-in.delay-900 { animation-delay: 0.9s; }
        .animate-fade-in.delay-1100 { animation-delay: 1.1s; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;