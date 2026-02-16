import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/Updated-Logo3.jpg';

function Navtop() {
  return (
    <div className="bg-white text-black py-3 px-3 md:px-16 border-b border-gray-100 sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2 flex-nowrap">
        
        {/* LOGO */}
        <div className="flex items-center shrink-0">
          <img src={logo} alt="logo" className="h-8 md:h-12" />
        </div>

       
        <div className="flex items-center gap-2 md:gap-6 flex-nowrap">
          
          
         <a href="mailto:firstcurtains@gmail.com" className="block">
  <div className="flex items-center gap-2 group cursor-pointer bg-gray-50 p-1.5 md:p-2 rounded-xl border hover:bg-white transition">
    
    <div className="bg-white w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-[#0383b3] transition">
      <Mail size={18} className="text-[#0383b3] group-hover:text-white" />
    </div>

    <div className="hidden md:flex flex-col">
      <span className="text-[16px] text-[#013f7f]">Email Us:</span>
      <span className="text-[16px] text-black">firstcurtains@gmail.com</span>
    </div>

  </div>
</a>

          {/* PHONE */}
       <a
  href="tel:+6596905777"
  className="block"
>
  <div className="flex items-center gap-2 group cursor-pointer bg-gray-50 p-1.5 md:p-2 rounded-xl border hover:bg-white transition">
    
    <div className="bg-white w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-[#0383b3] transition">
      <Phone size={18} className="text-[#0383b3] group-hover:text-white" />
    </div>

    <div className="hidden md:flex flex-col">
      <span className="text-[16px] uppercase text-[#013f7f]">Call:</span>
      <span className="text-[16px] text-black">
        +6596905777
      </span>
    </div>

  </div>
</a>

          {/* TIME
          <div className="flex items-center gap-2 group cursor-pointer bg-gray-50 p-1.5 md:p-2 rounded-xl border hover:bg-white transition">
            <div className="bg-white w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-[#0383b3] transition">
              <Clock size={18} className="text-[#0383b3] group-hover:text-white" />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[13px] font-bold uppercase">Hours</span>
              <span className="text-[16px] font-bold">Mon–Sat 09:00</span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Navtop;
