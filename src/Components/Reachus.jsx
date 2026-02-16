import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Reachus() {
  const reachData = [
    {
      id: 1,
      label: "Email Us",
      icon: <Mail size={32} className="text-white" />,
      heading: "Contact Support",
      description:
        "Our team is available 24/7 to answer your technical questions and needs. Reach out anytime!",
      action: "mailto:firstcurtains@gmail.com"
    },
    {
      id: 2,
      label: "Call Us",
      icon: <Phone size={32} className="text-white" />,
      heading: "Direct Line",
      description:
        "96905777. Feel free to call us during business hours (9am - 6pm) for instant help.",
      action: "tel:+6596905777"
    },
    {
      id: 3,
      label: "Visit Us",
      icon: <MapPin size={32} className="text-white" />,
      heading: "Office Location",
      description:
        "123 Business Avenue, Suite 400, Digital Park, New York, NY 10001. Come say hello!",
      action:
        "https://www.google.com/maps/place/First+Curtains/data=!4m2!3m1!1s0x0:0xdca6c9cbf7ef9ef1?sa=X&ved=1t:2428&ictx=111"
    }
  ];

  return (
    <div className="py-24 px-6 md:px-16 bg-gray-50">
      {/* Main Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-gray-900 uppercase tracking-tighter">
          Reach Us
        </h2>

        <div className="relative mt-6 flex justify-center items-center">
          <div className="h-[3px] w-32 bg-[#0383b3]"></div>
          <div className="absolute w-4 h-4 bg-[#0383b3]"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reachData.map((item) => (
          <a
            key={item.id}
            href={item.action}
            target={item.action.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="bg-white rounded shadow-2xl overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer"
          >
            {/* Top Section */}
            <div className="w-full bg-[#0383b3] h-52 flex justify-center pt-12 relative">
              <span className="text-white font-black uppercase tracking-[0.2em] text-2xl relative z-10">
                {item.label}
              </span>

              <div className="absolute bottom-0 left-0 w-full leading-[0]">
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="h-24 w-full"
                >
                  <path
                    d="M0,60 C100,120 150,0 250,60 C350,120 400,0 500,60 L500,150 L0,150 Z"
                    className="fill-white"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 pt-0 flex flex-col items-center relative w-full">
              <div className="w-24 h-24 bg-[#0383b3] rounded-full flex items-center justify-center -mt-12 mb-8 shadow-xl border-[6px] border-white relative z-20 transition-all duration-700 group-hover:bg-black group-hover:scale-110 group-hover:rotate-[360deg]">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black text-gray-800 mb-5 uppercase tracking-tight">
                {item.heading}
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg font-medium px-2">
                {item.description}
              </p>

              <div className="mt-10 w-16 h-1.5 bg-[#0383b3] rounded-full transition-all duration-500 group-hover:w-40 group-hover:bg-black"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Reachus;
