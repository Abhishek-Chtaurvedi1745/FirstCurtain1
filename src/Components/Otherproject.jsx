import React from 'react';
import fch from '../assets/fch.png'

function Otherproject() {
  return (
    <div className="py-16 px-6 md:px-16 bg-white">
      {/* 1. Main Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">Other Projects</h2>
        
        {/* Line + Square Decor */}
        <div className="relative mt-4 flex justify-center items-center">
          <div className="h-[2px] w-24 bg-[#0383b3]"></div>
          <div className="absolute w-3 h-3 bg-[#0383b3]"></div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        
        {/* Left Side: Image with Dynamic Shadow */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img 
              src={fch} 
              alt="Project Showcase" 
              className="w-full object-cover h-[400px] border-2  transition-all duration-300
              /* Default: Top-Left Shadow in Button Color */
              shadow-[-40px_40px_0px_#0383b3] 
              hover:shadow-[-15px_15px_0px_#000000]"
            />
          </div>
        </div>

        {/* Right Side: Content with Checkmark List */}
        <div className="w-full lg:w-1/2">
          {/* Sub-heading with line + square */}
          <div className="mb-6 mt-5">
            <p className='text-capital'>When</p>
            <h3 className="text-3xl font-bold text-gray-800">
              Quality, Reliability And Service Are The Key Factors
            </h3>
            <div className="relative mt-2 flex justify-start items-center">
              <div className="h-[2px] w-16 bg-[#0383b3]"></div>
              <div className="absolute w-2 h-2 bg-[#0383b3] left-7"></div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            In deciding on a provider of your window coverings and window treatments we would like to think our name First Curtains is at the forefront of your mind. As a top supplier of curtains in Singapore, First Curtains have been supplying a wide variety of curtains to consumers from all across the world.
          </p>
          <p>
            Though we sometimes use the terms curtains and blinds interchangeably, there are some differences between the two of them.
          </p>
          <p className=''><strong>We Are listed under top companies for providing Curtains and Blinds services under BEST IN SINGAPORE as well.</strong></p>

          {/* <button className="mt-10 py-3 px-8 bg-[#ff0047] text-white font-bold rounded border-2 border-black shadow-[5px_5px_0px_#000] hover:bg-black hover:shadow-[5px_5px_0px_#ff0047] transition-all duration-300">
            View All Projects
          </button> */}
        </div>

      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mt-[100px]">

       
        
        {/* Left Side: Image with Dynamic Shadow */}
      

        {/* Right Side: Content with Checkmark List */}

      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mt-[100px]">
        

        <div className="w-full lg:w-1/2">
          {/* Sub-heading with line + square */}
          <div className="mb-6 mt-5">
            <h3 className="text-3xl font-bold text-gray-800">
              
Dear Customer We specialise in curtain, roman blind, roller blind, vertical blind, venetian blind, bamboo blind, wood blind, PVC wood blind creation.
            </h3>
            <h3 className="text-3xl font-bold text-gray-800">
              亲爱的顾客 我们专于窗帘布，罗马帘，木帘，卷帘，垂直帘，百叶帘。。等等
            </h3>
            <div className="relative mt-2 flex justify-start items-center">
              <div className="h-[2px] w-16 bg-[#0383b3]"></div>
              <div className="absolute w-2 h-2 bg-[#0383b3] left-7"></div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
           First Curtains has been a very prominent curtain and blinds design company in Singapore and they are well-known for providing the best quality curtains and blinds which suits the requirements of millions of customers in Singapore. The demand for the blinds and curtains in Singapore is skyrocketing and this company has been consistently engaged in fulfilling the demands of the customers in this particular area.
          </p>

          {/* Feature List with Checkmark Sign */}
          <br />
        
         
          {/* Action Button */}
          <button className=" py-3 px-8 bg-[#0383b3] text-white font-bold  shadow-[5px_5px_0px_#000] hover:bg-black hover:shadow-[5px_5px_0px_#0383b3] transition-all duration-300">
            View All Projects
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img 
              src="/assets/abtimg.jpg" 
              alt="Project Showcase" 
              className="w-full object-cover h-[400px] transition-all duration-300
              /* Default: Top-Left Shadow in Button Color */
              shadow-[-40px_40px_0px_#0383b3] 
              hover:shadow-[-15px_15px_0px_#000000]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Otherproject;