import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    isBox: true,
    title: "Curtains",
    subtitle: "WE BUILD THE FUTURE",
    description:
      "An irresistible range of decorative home accessories so brighten up your home",
    image:
      "/assets/crt14.jpg",
  },
  {
    id: 2,
    isBox: false,
    title: "Blinds",
    description:
      "Our window blinds are versatile and stylish with practical screening and shade",
    image:
      "assets/vitromblind.jpg",
  },
  {
    id: 3,
    isBox: false,
    title: "Accessories",
    description:
      "An irresistible range of decorative home accessories so brighten up your home",
    image:
      "assets/romanb.jpg",
  },
  {
    id: 4,
    isBox: false,
    title: "Cleaning",
    description:
      "Professional curtain, sofa, and carpet cleaning with safe eco-friendly solutions.",
    image:
      "/assets/carpet.jpeg",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="relative flex items-center"
          >
            <motion.div
              animate={{
                height: current === index ? 60 : 30,
                backgroundColor:
                  current === index
                    ? "#0383b3"
                    : "rgba(255,255,255,0.3)",
              }}
              className="w-1 rounded-full"
            />
           <span
  className={`absolute left-6 hidden md:block text-white text-xs font-bold transition-opacity ${
    current === index ? "opacity-100" : "opacity-0"
  }`}
>
  0{index + 1}
</span>

          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-10 md:px-32 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={current}>
            {slides[current].isBox ? (
              /* FIRST SLIDE (BOX STYLE) */
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_#0383b3] max-w-2xl"
              >
                {slides[current].subtitle && (
                  <span className="text-[#0383b3] font-black tracking-[0.3em] text-sm block mb-4">
                    {slides[current].subtitle}
                  </span>
                )}

                <h1 className="text-white text-4xl md:text-7xl font-black uppercase mb-6">
                  {slides[current].title}
                </h1>

                <p className="text-gray-200 text-lg mb-8">
                  {slides[current].description}
                </p>

                <button className="bg-[#0383b3] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm">
                  Explore Project
                </button>
              </motion.div>
            ) : (
              /* OTHER SLIDES */
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                {slides[current].subtitle && (
                  <span className="text-[#0383b3] font-black tracking-[0.3em] text-sm block mb-4">
                    {slides[current].subtitle}
                  </span>
                )}

                <h1 className="text-white text-5xl md:text-8xl font-black uppercase mb-6">
                  {slides[current].title}
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-10 border-l-4 border-[#0383b3] pl-6">
                  {slides[current].description}
                </p>

                <button className="bg-[#0383b3] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm">
                  View Details
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Banner;
