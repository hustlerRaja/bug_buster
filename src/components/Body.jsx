import React from 'react'

function Body() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-100 to-blue-200 pt-24">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">Introducing iPhone 17</h1>
      <p className="text-lg text-gray-700 mb-8 animate-fade-in delay-200">Experience the future. Launching now.</p>
      <div className="relative flex items-center justify-center">
        <img
          src="/iphone.png"
          alt="iPhone 17"
          className="h-80 w-auto object-contain drop-shadow-2xl animate-rotate-launch"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl animate-pulse-launch"></div>
      </div>
      <style>
        {`
          @keyframes rotate-launch {
            0% { transform: rotate(0deg); }
            60% { transform: rotate(45deg) scale(1.1); }
            100% { transform: rotate(45deg) scale(1.05); }
          }
          .animate-rotate-launch {
            animation: rotate-launch 2s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out both;
          }
          .animate-fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          @keyframes pulse-launch {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-launch {
            animation: pulse-launch 2.5s infinite;
          }
        `}
      </style>
    </div>
  )
}

export default Body