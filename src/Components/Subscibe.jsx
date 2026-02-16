import React from "react";

function Subscribe() {
  return (
    <div className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Image with Angles */}
        <div className="flex justify-center lg:justify-start relative">
          
          {/* Pink angled layer */}
          <div className="absolute w-[320px] h-[420px] md:w-[380px] md:h-[500px]
                          bg-[#ff0047] -rotate-6
                          ">
          </div>

          {/* Black border angled layer */}
          <div className="absolute w-[320px] h-[420px] md:w-[380px] md:h-[500px]
                          border-4 border-black rotate-3
                        ">
          </div>

          {/* Main Image */}
          <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px]
                          overflow-hidden border-4 border-black
                        ">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=900"
              alt="Subscribe"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 leading-tight">
            Subscribe Our Newsletter
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-md">
            Stay updated with our latest news, exclusive offers, and insights
            delivered straight to your inbox.
          </p>

          {/* Input + Button */}
          <div className="mt-10 relative max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-14 pl-5 pr-36 border-2 border-black 
                         font-medium outline-none"
            />

            <button
              className="absolute top-1 right-1 h-12 px-6 
                         bg-[#ff0047] text-white font-bold uppercase
                         transition-all duration-300 hover:bg-black"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Subscribe;
