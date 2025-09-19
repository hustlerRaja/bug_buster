import React from 'react';

function Body() {
  return (
    <div className="bg-black min-h-screen w-full">
      {/* Big iPhone Text Section */}
      <div className="w-full flex items-center justify-center pt-12 pb-2">
        <h1
          className="text-[7vw] md:text-[6vw] font-extrabold text-orange-500 tracking-tight drop-shadow-lg animate-fadeup"
        >
          iPhone17
        </h1>
      </div>
      {/* Top Video Section */}
      <div className="w-full overflow-hidden mb-8 pt-0 bg-black">
        <video
          src="/top_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[60vw] max-h-[600px] object-cover"
        />
      </div>

      {/* Highlights Section (as per figure) */}
      <section className="w-full bg-[#222224] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[5vw] md:text-[4vw] font-bold text-white mb-0 text-left">Get the highlights.</h2>
        </div>
      </section>

      {/* Apple-style Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <img src="/apple_logo.png" alt="Apple Logo" className="h-16 w-auto mb-6" />
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">iPhone 17 Pro</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto">Titanium. So strong. So light. So Pro.</p>
        <img src="/iphone.png" alt="iPhone 17 Pro" className="h-96 w-auto mx-auto mb-8 drop-shadow-2xl" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <span className="text-lg text-gray-300">From ₹1,29,900*</span>
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors duration-300">Buy</button>
          <a href="#" className="text-blue-400 hover:underline text-lg">Learn more &gt;</a>
        </div>
      </section>

      {/* ...existing code for other sections... */}

      {/* Comparison & Buy Section */}
      <section className="w-full bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">Compare iPhone Models</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900 rounded-2xl shadow-lg text-white">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-4 px-6 text-left">Model</th>
                  <th className="py-4 px-6 text-left">Display</th>
                  <th className="py-4 px-6 text-left">Camera</th>
                  <th className="py-4 px-6 text-left">Chip</th>
                  <th className="py-4 px-6 text-left">Battery</th>
                  <th className="py-4 px-6 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'iPhone 17 Pro',
                    display: '6.7" Super Retina XDR',
                    camera: 'Quad 48MP',
                    chip: 'A18 Pro',
                    battery: 'All-day',
                    price: '₹1,29,900',
                  },
                  {
                    name: 'iPhone 17',
                    display: '6.1" Super Retina XDR',
                    camera: 'Triple 48MP',
                    chip: 'A18',
                    battery: 'All-day',
                    price: '₹99,900',
                  },
                  {
                    name: 'iPhone Air',
                    display: '6.1" OLED',
                    camera: 'Dual 24MP',
                    chip: 'A17',
                    battery: 'Up to 20 hrs',
                    price: '₹89,900',
                  },
                ].map((m, idx) => (
                  <tr key={m.name} className="border-t border-gray-800">
                    <td className="py-4 px-6 font-bold">{m.name}</td>
                    <td className="py-4 px-6">{m.display}</td>
                    <td className="py-4 px-6">{m.camera}</td>
                    <td className="py-4 px-6">{m.chip}</td>
                    <td className="py-4 px-6">{m.battery}</td>
                    <td className="py-4 px-6">{m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <img src="/iphone.png" alt="Buy iPhone" className="h-32 w-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Buy iPhone 17 Pro</h3>
              <span className="text-lg text-gray-300 mb-4">From ₹1,29,900*</span>
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors duration-300">Buy</button>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <img src="/iphone.png" alt="Buy iPhone" className="h-32 w-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Buy iPhone 17</h3>
              <span className="text-lg text-gray-300 mb-4">From ₹99,900*</span>
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors duration-300">Buy</button>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <img src="/iphone.png" alt="Buy iPhone" className="h-32 w-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Buy iPhone Air</h3>
              <span className="text-lg text-gray-300 mb-4">From ₹89,900*</span>
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors duration-300">Buy</button>
            </div>
          </div>
        </div>
      </section>
      {/* Features & Highlights Section */}
      <section className="w-full bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">A camera that captures your wildest imagination.</h2>
            <p className="text-lg text-gray-300 mb-2">From dramatic framing flexibility to next-level low-light performance, discover the most advanced camera system ever on iPhone.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <span className="text-white">48MP Main camera for super-high-resolution photos</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🌙</span>
                <span className="text-white">Night mode and Deep Fusion for stunning low-light shots</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🎥</span>
                <span className="text-white">ProRes video and Action mode for cinematic video</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img src="/iphone.png" alt="iPhone Camera" className="h-80 w-auto rounded-3xl shadow-2xl border-4 border-gray-800" />
          </div>
        </div>
      </section>

      {/* Titanium Section */}
      <section className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center">
            <img src="/iphone.png" alt="Titanium iPhone" className="h-80 w-auto rounded-3xl shadow-2xl border-4 border-gray-800" />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Titanium. So strong. So light. So Pro.</h2>
            <p className="text-lg text-gray-300 mb-2">iPhone 17 Pro is the first iPhone to feature an aerospace‑grade titanium design, making it incredibly strong yet lightweight.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🪨</span>
                <span className="text-white">Aerospace-grade titanium frame</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-white">Lighter than previous Pro models</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span className="text-white">Ceramic Shield front cover for durability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer is now rendered from Footer.jsx */}
    </div>
  );
}

export default Body;