import React, { useEffect, useRef, useState } from "react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/blog1.jpg",
      date: "October 24, 2025",
      title: "See How Roman Blinds Fit Your Space Today",
      description:
        "Would you like to make a few change ups with your interiors? If so, then one of the elements which you may consider would be your window blinds. One of the classic items you might want to look into would be Roman blinds. They’ve got a lot of advantages which you can seize, so you can ensure a much more spruced up the room.",
    },
    {
      id: 2,
      image: "/assets/blog2.jpg",
      date: "October 20, 2025",
      title: "Your Guide To Curtain Shopping",
      description:
        "Your choice of curtain can make or break the design of your room. That is why it matters to choose the right curtains for your homes. Here are some of the things that you should keep in mind when shopping for curtains Singapore.",
    },
    {
      id: 3,
      image: "/assets/blog3.jpg",
      date: "October 15, 2025",
      title: "Handling blinds for Windows – Different kinds for different designs",
      description:
        "The trend in curtains has perhaps reached its highest peak that people seek to deviate from using such. One of the popular alternative is the use of blinds. It is a window alternative that makes use of different materials and has different features to address the specific concerns in window treatment. Aside from that, the different types of blinds also blend with the interior of the room at home. If you are on your way to buy blinds in Singapore, know its various kinds so you’d be fully satisfied and happy as you hang the blinds and refresh your eyes from the new attraction of your home interior.",
    },
    {
      id: 4,
      image: "/assets/blog4.jpg",
      date: "October 10, 2025",
      title: "Window treatments with quirky blinds and curtain ideas for DIY warriors",
      description:
        "There’s no point in spending too much to achieve your dream window interiors for your home. The DIY designs and solutions can be a great light bulb moment to save at the same time give complement a room that has already been planned and designed beforehand.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const startX = useRef(0);
  const endX = useRef(0);

  /* 🔹 Responsive slides */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalDots = Math.ceil(blogPosts.length / itemsPerView);

  /* 🔹 Touch handlers */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;
    const threshold = 80;

    if (distance > threshold && current < totalDots - 1) {
      setCurrent((prev) => prev + 1);
    } else if (distance < -threshold && current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  /* 🔹 Auto-slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalDots);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalDots]);

  return (
    <div className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
          Latest Blogs
        </h2>
        <div className="relative mt-6 flex justify-center items-center">
          <div className="h-[3px] w-32 bg-[#0383b3]"></div>
          <div className="absolute w-4 h-4 bg-[#0383b3]"></div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="px-6"
                style={{ minWidth: `${100 / itemsPerView}%` }}
              >
                <div className="flex flex-col group bg-white">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0383b3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Date */}
                  <div className="mb-4 flex">
                    <span className="bg-[#0383b3] text-white px-4 py-1.5 rounded-md font-bold text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000]">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-4 leading-tight group-hover:text-[#0383b3] transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow line-clamp-2">
                    {post.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto">
                    <button className="py-3 px-8 bg-[#0383b3] text-white font-bold shadow-[5px_5px_0px_#000] hover:bg-black hover:shadow-[5px_5px_0px_#0383b3] transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-[#0383b3] scale-125"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
