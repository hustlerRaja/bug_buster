import React from 'react';

  function Body() {
  return (
    <div className="bg-black min-h-screen w-full">
      
      <div className="w-full flex items-center justify-center pt-12 pb-0 ">
        <h1
          className="text-[8vw] md:text-[6vw] font-extrabold text-orange-500 tracking-tight drop-shadow-lg animate-fadeup"
        >
          iPhone17
        </h1>
      </div>

      
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

      
      <section className="w-full relative flex items-center justify-center" style={{minHeight: '60vw', maxHeight: '600px'}}>
        <img
          src="/image1.jpg"
          alt="iPhone Camera"
          className="absolute inset-0 w-full h-full object-cover animate-img-attract-glow"
          style={{zIndex: 1}}
        />
        <style>{`
          @keyframes img-attract-glow {
            0% {
              transform: scale(0.96) rotateY(-10deg);
              filter: brightness(0.92) blur(2px);
              box-shadow: 0 0 60px 10px black, 0 0 0 0 black;
              opacity: 0.7;
            }
            30% {
              transform: scale(1.05) rotateY(10deg);
              filter: brightness(1.12) blur(0px);
              box-shadow: 0 0 120px 30px black, 0 0 32px 8px black;
              opacity: 1;
            }
            60% {
              transform: scale(1.01) rotateY(-4deg);
              filter: brightness(1.05) blur(0.5px);
              box-shadow: 0 0 80px 16px black, 0 0 16px 4px black;
              opacity: 0.95;
            }
            100% {
              transform: scale(1) rotateY(0deg);
              filter: brightness(1.08) blur(0px);
              box-shadow: 0 0 60px 10px black, 0 0 0 0 black;
              opacity: 1;
            }
          }
          .animate-img-attract-glow {
            animation: img-attract-glow 2.8s cubic-bezier(.7,.2,.3,1) infinite;
          }
        `}</style>
        
        <div className="absolute inset-0 flex items-center justify-between px-12 md:px-24" style={{zIndex: 2}}>
          
          <div className="flex flex-col gap-8 items-start">
            <div className="bg-black bg-opacity-60 rounded-xl px-6 py-4 drop-shadow-2xl flex items-center gap-4 animate-pulse-prop" style={{maxWidth: '420px', wordBreak: 'break-word'}}>
              <span className="inline-block w-4 h-4 rounded-full" style={{background: 'rgba(255,255,255,0.7)'}}></span>
              <div className="w-full">
                <div className="text-white text-xl md:text-2xl font-bold whitespace-normal break-words">512 GB ROM</div>
                <div className="text-gray-300 text-sm md:text-base mt-1 whitespace-normal break-words">Massive storage for all your needs</div>
              </div>
            </div>
            <div className="bg-black bg-opacity-60 rounded-xl px-6 py-4 drop-shadow-2xl flex items-center gap-4 animate-pulse-prop" style={{animationDelay: '0.2s', maxWidth: '420px', wordBreak: 'break-word'}}>
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
              <div className="w-full">
                <div className="text-white text-xl md:text-2xl font-bold whitespace-normal break-words">16.0 cm (6.3 inch) Super Retina XDR Display</div>
                <div className="text-gray-300 text-sm md:text-base mt-1 whitespace-normal break-words">Ultra-bright, ultra-clear viewing</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 items-end">
            <div className="bg-black bg-opacity-60 rounded-xl px-6 py-4 drop-shadow-2xl flex items-center gap-4 animate-pulse-prop" style={{maxWidth: '420px', wordBreak: 'break-word'}}>
              <div className="w-full">
                <div className="text-white text-xl md:text-2xl font-bold text-right whitespace-normal break-words">48MP + 48MP + 48MP | 18MP Front Camera</div>
                <div className="text-gray-300 text-sm md:text-base mt-1 text-right whitespace-normal break-words">Pro-grade triple rear & selfie camera</div>
              </div>
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
            </div>
            <div className="bg-black bg-opacity-60 rounded-xl px-6 py-4 drop-shadow-2xl flex items-center gap-4 animate-pulse-prop" style={{animationDelay: '0.2s', maxWidth: '420px', wordBreak: 'break-word'}}>
              <div className="w-full">
                <div className="text-white text-xl md:text-2xl font-bold text-right whitespace-normal break-words">A19 Chip, 6 Core Processor</div>
                <div className="text-gray-300 text-sm md:text-base mt-1 text-right whitespace-normal break-words">Blazing fast performance</div>
              </div>
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
            </div>
          </div>
           <style>{`
             @keyframes pulse-prop {
               0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5), 0 0 32px 0 rgba(255,255,255,0.3); opacity: 1; }
               50% { box-shadow: 0 0 24px 8px rgba(255,255,255,0.5), 0 0 48px 8px rgba(255,255,255,0.3); opacity: 0.85; }
               100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5), 0 0 32px 0 rgba(255,255,255,0.3); opacity: 1; }
             }
             .animate-pulse-prop {
               animation: pulse-prop 2.2s cubic-bezier(.7,.2,.3,1) infinite;
             }
           `}</style>
        </div>
      </section>

      
      <section className="w-full bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[5vw] md:text-[4vw] font-bold text-white mb-0 text-left">Get the highlights.</h2>
        </div>
        
        <div className="w-screen" style={{width: '100vw', minWidth: '100vw', maxWidth: '100vw', margin: 0, padding: 0}}>
          <div className="flex items-center justify-center" style={{width: '100vw', minWidth: '100vw', maxWidth: '100vw', height: '100vh', margin: 0, padding: 0}}>
            
            <div className="bg-black overflow-hidden flex flex-col items-center relative" style={{width: '100vw', minWidth: '100vw', maxWidth: '100vw', height: '100vh', margin: 0, padding: 0}}>
              <video
                src="/medium%20(1).mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{width: '100vw', minWidth: '100vw', maxWidth: '100vw', height: '100vh'}}
              />
              <div className="absolute top-0 left-0 w-full z-10 flex items-start justify-center pointer-events-none pt-8">
                <h3
                  className="text-white font-extrabold text-center"
                  style={{
                    fontSize: '2.1rem',
                    fontWeight: 800,
                    textShadow: '0 6px 32px rgba(0,0,0,0.95), 0 1px 0 #fff',
                    lineHeight: '1.15',
                    letterSpacing: '-0.03em',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Heat-forged aluminium unibody design for<br />exceptional pro capability.
                </h3>
              </div>
            </div>
          </div>
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
            .animate-pulse {
              animation: pulse 1.5s infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
          `}</style>
        </div>
      </section>

      
      
      <section className="w-full bg-black py-24">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-4">
          <span className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">Design</span>
          <h2 className="text-[7vw] md:text-[6vw] font-extrabold text-white text-center leading-tight mb-6">
            Unibody enclosure.<br />Makes a strong case for itself.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mb-10">
            Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that maximises performance, battery capacity
          </p>
          <div className="relative w-full h-[60vw] max-h-[600px] mb-8">
            <video
              src="/initial.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      

      <section className="w-full bg-black flex flex-col items-center justify-center pt-0 pb-0">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-semibold text-orange-500 mb-4 mt-8">Design</span>
          <h2 className="text-[4vw] md:text-[4vw] font-extrabold text-white text-center leading-tight mb-4" style={{lineHeight: 1.05}}>
            Unibody enclosure.<br />Makes a strong case for itself.
          </h2>
          <p className="text-2xl md:text-xl text-gray-300 text-center max-w-2xl mb-2">
            Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the inside out to be the most powerful iPhone models ever made. At the core of the new design is a heat-forged aluminium unibody enclosure that maximises performance, battery capacity<br />and durability.
          </p>
          <div className="w-screen flex items-end justify-center" style={{minHeight: '220px', width: '90vw'}}>
            <img
              src="/image2.jpg"
              alt="iPhone Unibody Showcase"
              className="w-screen object-cover"
              style={{width: '90vw', minWidth: '70vw', maxWidth: '70vw', borderRadius: '0', boxShadow: '0 8px 48px 0 rgba(0,0,0,0.7)', objectPosition: 'bottom'}}
            />
          </div>
        </div>
      </section>
      
      <section className="w-full bg-black flex flex-col items-center justify-center py-24">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center relative">
          
          <div className="w-full flex flex-col items-center justify-center mb-8">
            <h2 className="text-[2.8rem] md:text-[3.2rem] font-extrabold text-white mb-4 leading-tight text-center" style={{letterSpacing: '-0.02em'}}>Battery me.<br />All-time high.</h2>
            <p className="text-lg md:text-xl text-white mb-2 max-w-2xl font-normal text-center" style={{lineHeight: '1.3'}}>
              The new internal design creates significant additional room for battery capacity, giving iPhone 17 Pro Max the best-ever <span className="font-bold">iPhone battery life</span> and up to 3 more hours per full charge compared to iPhone 15 Pro Max.
            </p>
          </div>
          
          <div className="w-full flex items-center justify-center relative mb-8" style={{minHeight: '340px'}}>
            <img src="/hand.jpg" alt="Hand holding phone" className="w-full max-w-none object-cover z-10" style={{position: 'relative'}} />
            
            <div className="absolute left-1/2 top-[54%]" style={{transform: 'translate(-50%, -50%)', zIndex: 20}}>
              
              
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none">
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-row items-center justify-center gap-16 mt-2 mb-4  bg-transparent">
            <div className="flex flex-col items-center">
              <span className="text-orange-500 font-bold text-lg mb-1">Up to</span>
              <span className="text-white font-extrabold text-3xl md:text-4xl mb-1">31 hours</span>
              <span className="text-gray-300 text-base text-center">video playback on<br />iPhone 17 Pro</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange-500 font-bold text-lg mb-1">Up to</span>
              <span className="text-white font-extrabold text-3xl md:text-4xl mb-1">37 hours</span>
              <span className="text-gray-300 text-base text-center">video playback on<br />iPhone 17 Pro Max</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange-500 font-bold text-lg mb-1">Up to</span>
              <span className="text-white font-extrabold text-3xl md:text-4xl mb-1">50% charge<br /><span className="text-orange-500 font-extrabold text-2xl md:text-3xl">in 20 minutes</span></span>
              <span className="text-gray-300 text-base text-center">with high-wattage power adapter*</span>
            </div>
          </div>
        </div>
      </section>


      

    
      
      <section className="w-full bg-[#f5f5f7] py-20 flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full mx-auto px-6">
          <div className="flex flex-row items-center justify-between mb-8">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">Explore the line-up.</h2>
            <a href="#" className="text-blue-600 text-lg font-semibold hover:underline">Compare all models &gt;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center p-6 transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(0,0,0,0.18)] hover:scale-105 hover:animate-glow-fade">
              <img src="/max.png" alt="iPhone 17 Pro" className="w-48 h-48 object-cover rounded-2xl mb-4" />
              <span className="text-orange-500 font-bold text-sm mb-2">New</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">iPhone 17 Pro</h3>
              <p className="text-gray-700 text-center mb-2">Innovative design for ultimate performance and battery life.</p>
              <span className="text-gray-900 font-semibold text-base">From ₹134900.00*</span>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center p-6 transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(0,0,0,0.18)] hover:scale-105 hover:animate-glow-fade">
              <img src="/air.png" alt="iPhone Air" className="w-48 h-48 object-cover rounded-2xl mb-4" />
              <span className="text-orange-500 font-bold text-sm mb-2">New</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">iPhone Air</h3>
              <p className="text-gray-700 text-center mb-2">The thinnest iPhone ever. With the power of pro inside.</p>
              <span className="text-gray-900 font-semibold text-base">From ₹119900.00*</span>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center p-6 transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(0,0,0,0.18)] hover:scale-105 hover:animate-glow-fade">
              <img src="/17.png" alt="iPhone 17" className="w-48 h-48 object-cover rounded-2xl mb-4" />
              <span className="text-orange-500 font-bold text-sm mb-2">New</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">iPhone 17</h3>
              <p className="text-gray-700 text-center mb-2">Even more delightful. Even more durable.</p>
              <span className="text-gray-900 font-semibold text-base">From ₹82900.00*</span>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center p-6 transition-all duration-300 hover:shadow-[0_0_40px_0_rgba(0,0,0,0.18)] hover:scale-105 hover:animate-glow-fade">
              <div className="w-48 h-48 flex items-center justify-center mb-4">
                <img src="/16.png" alt="iPhone 16" className="w-40 h-40 object-contain rounded-2xl" style={{background: '#ffffffff'}} />
              </div>
              <span className="text-gray-900 font-bold text-sm mb-2">&nbsp;</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">iPhone 16</h3>
              <p className="text-gray-700 text-center mb-2">Amazing performance.<br />Durable design.</p>
              <span className="text-gray-900 font-semibold text-base">From ₹69900.00*</span>
            </div>
          </div>
          <style>{`
            @keyframes glow-fade {
              0% { box-shadow: 0 0 0 0 rgba(0,0,0,0.0); opacity: 1; }
              50% { box-shadow: 0 0 40px 0 rgba(0,0,0,0.18); opacity: 0.85; }
              100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.0); opacity: 1; }
            }
            .hover\:animate-glow-fade:hover {
              animation: glow-fade 0.8s cubic-bezier(.7,.2,.3,1);
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}

export default Body;