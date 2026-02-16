import React from "react";

function CommercialandResidential() {
  const sections = [
    {
      title: "Client Satisfaction",
      image:
        "/assets/crt16.jpg",
      content:
        "We may be a small team but we’re big on service excellence and customer satisfaction, to bring to your dream curtain in Singapore.",
    },
    {
      title: "Fast and Accurate",
      image:
        "/assets/crt12.jpg",
       content:
        "Our typical lead time to supply and fit your blinds or curtains is just 10 days.",
    },
    {
      title: "Custom Made",
      image:
        "/assets/crt8.jpg",
       content:
        "Specialist of all custom made curtains & drapes, blinds, sofa re-upholstery, solar film, wallpaper for residential homes, offices, rental properties and commercial application.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto mt-5 mb-5 ">
      {sections.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[300px] overflow-hidden group my-10 lg:my-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0  bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-[#0383b3]/85 transition-colors duration-500 flex items-center justify-center px-4">
            <OverlayContent
              title={item.title}
              content={item.content}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* 🔹 Overlay Content */
function OverlayContent({ title, content }) {
  return (
    <div className="text-center text-white transition-transform duration-500 group-hover:translate-y-4">
      <h2 className="text-3xl font-bold tracking-wide">
        {title}
      </h2>

      {/* Line + Square */}
      <div className="relative mt-5 flex justify-center items-center">
        <div className="h-[2px] w-24 bg-[#0383b3] transition-colors duration-500 group-hover:bg-white"></div>
        <div className="absolute w-3 h-3 bg-[#0383b3] transition-colors duration-500 group-hover:bg-white"></div>
      </div>

      {/* Optional Content */}
      {content && (
        <p className="mt-4 text-sm group-hover:opacity-100 transition-opacity duration-500">
          {content}
        </p>
      )}
    </div>
  );
}

export default CommercialandResidential;
