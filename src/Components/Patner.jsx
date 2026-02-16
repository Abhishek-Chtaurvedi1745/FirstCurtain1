import React, { useRef } from "react";

function Partner() {
  const partnerLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Slack_logo_2019.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Disney_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
  ];

  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDrag = (e) => {
    isDown.current = true;
    // Get the initial X position (supports mouse or touch)
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    startX.current = pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDown.current = false;
  };

  const moveDrag = (e) => {
    if (!isDown.current) return;
    
    // Determine current X position
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    const x = pageX - sliderRef.current.offsetLeft;
    
    // Calculate distance moved
    const walk = (x - startX.current) * 2; // Adjust the '2' to change scroll speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
          Our Partners
        </h2>
        <div className="relative mt-6 flex justify-center items-center">
          <div className="h-[3px] w-32 bg-[#0383b3]"></div>
          <div className="absolute w-4 h-4 bg-[#0383b3]"></div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-20 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none', 
          WebkitOverflowScrolling: 'touch' 
        }}
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={moveDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={moveDrag}
      >
        {/* Webkit hide for Chrome/Safari */}
        <style dangerouslySetInnerHTML={{__html: `
          div::-webkit-scrollbar { display: none; }
        `}} />

        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center py-4">
            <img
              src={logo}
              alt="Partner Logo"
              draggable="false" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;