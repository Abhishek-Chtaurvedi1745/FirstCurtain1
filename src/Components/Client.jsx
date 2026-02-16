import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import raymond from '../assets/raymond.jpg'
import jake from '../assets/jakesmith.jpg'

function Client() {
  const testimonials = [
    {
      id: 1,
      name: "Raymond Lim",
      position: "Business Contractor",
      image: raymond,
      text: "It was easy to choose from varieties of Curtains and Blinds, it was helpful for furnishing my home. All the best..",
    },
    {
      id: 2,
      name: "Jake Smith",
      position: "Salient Corp",
      image: jake,
      text: "Fantastic services, Good Quality materials of Curtains and affordable rate in competition. Great Job!",
    },
    {
      id: 3,
      name: "Sam Murray",
      position: "Lead Architect",
      image: "", 
      text: "Great service provided by First Curtain, Quality product, High standard service.. Thankyou David and All the best!",
    },
    {
      id: 4,
      name: "Eva Tan",
      position: "Executive Manager",
      image: "",
      text: "I've great experience with First curtains, They have been cost effective and quick service... Thankyou again First Curtains",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#02729c] py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 opacity-10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 opacity-20 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
      
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4">
            What Our <span className="text-cyan-300">Client Says</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="h-1 w-12 bg-cyan-400 rounded-full"></span>
            <span className="h-1 w-4 bg-white/50 rounded-full"></span>
            <span className="h-1 w-12 bg-cyan-400 rounded-full"></span>
          </div>
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">

          <Quote className="absolute top-10 right-10 text-white/10 w-24 h-24 rotate-12" />

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((client) => (
                <div
                  key={client.id}
                  className="flex-shrink-0 w-full flex md:flex-row flex-col justify-center items-center gap-10 min-h-[400px]"
                >

                  <div className="md:w-1/2 w-full flex flex-col items-center">
                    <div className="relative group">

                      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <img
                        src={client.image || "/api/placeholder/300/300"}
                        alt={client.name}
                        className="relative w-64 h-72 md:w-72 md:h-80 object-cover rounded-2xl shadow-2xl border border-white/20"
                      />
                    </div>
                    <h3 className="text-3xl text-white font-bold mt-8 tracking-tight">{client.name}</h3>
                    <p className="uppercase text-cyan-300 tracking-[0.2em] text-xs font-semibold mt-2 opacity-90">
                      {client.position}
                    </p>
                  </div>

                  <div className="md:w-1/2 w-full text-white text-center md:text-left px-4">
                    <div className="relative">
                      <p className="text-2xl mb-9 md:text-4xl font-light italic leading-snug opacity-95 text-pretty">
                        <span className="text-cyan-400 text-xl font-serif">“</span>
                        {client.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 right-8 md:right-12 flex gap-4">
            <button
              onClick={prevSlide}
              className="group w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center bg-white/5 hover:bg-white hover:text-[#0383b3] transition-all duration-300 shadow-lg active:scale-95"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="group w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white hover:bg-white hover:text-[#0383b3] transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>


        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                current === i ? "w-12 bg-cyan-400" : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Client;