import React from "react";

const Curtain = () => {

  const galleryImages = [
  "/assets/crt1.jpg",
  "/assets/crt2.jpg",
  "/assets/crt3.jpg",
  "/assets/crt4.jpg",
  "/assets/crt5.jpg",
  "/assets/crt6.jpg",
  "/assets/crt7.jpg",
  "/assets/crt9.jpg",
  "/assets/crt10.jpg",
  "/assets/crt11.jpg",
  "/assets/crt12.jpg",
  "/assets/crt13.jpg",
  "/assets/crt14.jpg",
  "/assets/crt15.jpg",
  "/assets/crt16.jpg",
  "/assets/crt17.jpg",
  "/assets/crt18.jpg",
  "/assets/crt19.jpg",
  "/assets/crt20.jpg",
  "/assets/crt21.jpg",
  "/assets/crt22.jpg",
  "/assets/crt23.jpg",
  "/assets/crt24.jpg",
  "/assets/crt25.jpg",
  ];
  
  const sections = [
    {
    title: "Curtain and Blinds Cleaning Service",
    text: "Curtains and Blinds Cleaning Service Curtains and blinds often act as giant filters, trapping dust and pollutants from the outside air—a common issue in Singapore’s urban landscape. First Curtain provides a hassle-free cleaning service that tackles this buildup efficiently, preventing the circulation of allergens in your home. We handle your window coverings with the utmost care, ensuring shrinkage-free cleaning for heavy drapes and delicate handling for venetian or roller blinds. Whether you require on-site cleaning for convenience or deep off-site washing, we ensure your curtains hang beautifully and your view remains crystal clear.",
    image: "/assets/curtain.jpeg",
  },
  ];

  return (
    <div>
      <div className="relative w-full h-[450px]">
        <img
          src="/assets/crt24.jpg"
          alt="Curtain Banner"
          className="w-full h-full object-cover"
        />     
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Curtain
          </h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 text-left">
        <h2 className="text-4xl font-semibold mb-4 text-[#103449]">
          Get Quality Curtains at Discount
        </h2>
        <div>
        <p className="text-gray-600 leading-relaxed">
First Curtains provides the best quality of day and night curtains and blinds for your home. Get cheap curtains in Singapore that come in an array of unique materials, motifs, and designs, and be spoilt for choices. The window curtains we help install will not only be functional, but also help to transform and enhance the overall ambience of your space.
        </p>
        <br />
        <p>Most of us might need blackout curtains in Singapore, where the weather can get too sunny. Blackout curtains provide superior light blockage and privacy. In addition, blackout curtain is the preferred choice for keeping the room cool as it blocks out UV ray emitted by the sun. Dim-out curtains offer up to 90% light blockage however dim-out curtains offers easy maintenance as is washed on a regular basis.</p>
        <br />
        <p>Get your window curtains from us today!</p>
        </div>
        <br />
        <h4 className="text-2xl font-semibold">Call to Order Now: <span className="text-[rgb(249, 191, 30)]">98222292</span></h4>
      </div>
      {sections.map((section, idx) => (
        <section key={idx} className={`py-14 bg-white`}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12">
            {idx % 2 === 0 ? (
              <>

                <div className="lg:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover shadow-2xl transform hover:scale-105 transition duration-700"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-[32px] font-bold mb-1">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="lg:w-1/2">
                  <h2 className="text-[32px] font-bold mb-1">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.text}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover shadow-2xl transform hover:scale-105 transition duration-700"
                  />
                </div>
              </>
            )}
          </div>
        </section>
      ))}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h3 className="text-[32px] md:text-4xl font-semibold text-center mb-8">
          Curtain Gallery
        </h3>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden  shadow-lg"
            >
              <img
                src={image}
                alt={`Curtain ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curtain;
