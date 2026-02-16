import React from "react";

const sections = [
  {
    title: "Sofa Cleaning Service",
    text: "Sofa Cleaning Service Your sofa is the centerpiece of your home, but in Singapore’s tropical climate, it can easily become a haven for sweat, oils, and invisible bacteria. First Curtain offers a specialized sofa cleaning service designed to revitalize your upholstery while preserving its texture and color. We use safe, fabric-friendly solutions to lift away dirt and neutralize odors, effectively removing the grime that accumulates from daily lounging. Perfect for everything from fabric L-shapes to delicate armchairs, our treatment leaves your furniture looking spotless, smelling fresh, and ready for guests.",
    image: "/assets/sofa.jpeg",
  },
  {
    title: "Carpet Cleaning Service",
    text: "Carpet Cleaning Service At First Curtain, we understand that carpets in Singapore face unique challenges, from high humidity that breeds mold to the everyday dust of city living. Our professional carpet cleaning service goes beyond surface vacuuming, utilizing deep-extraction technology to eliminate stubborn stains, trapped allergens, and dust mites hidden deep within the fibers. Whether it is a plush rug in your living room or high-traffic office carpeting, we restore freshness and hygiene without using harsh chemicals. Give your carpets a new lease on life and ensure a healthier indoor environment for your family or employees.",
    image: "/assets/carpet.jpeg",
  },
  {
    title: "Curtain and Blinds Cleaning Service",
    text: "Curtains and Blinds Cleaning Service Curtains and blinds often act as giant filters, trapping dust and pollutants from the outside air—a common issue in Singapore’s urban landscape. First Curtain provides a hassle-free cleaning service that tackles this buildup efficiently, preventing the circulation of allergens in your home. We handle your window coverings with the utmost care, ensuring shrinkage-free cleaning for heavy drapes and delicate handling for venetian or roller blinds. Whether you require on-site cleaning for convenience or deep off-site washing, we ensure your curtains hang beautifully and your view remains crystal clear.",
    image: "/assets/curtain.jpeg",
  },
];

export default function BannerContentPage() {
  return (
    <div className="w-full">

      <section className="w-full h-[130px] md:h-[200px] lg:h-[400px] bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/banner.jpeg')" }}>
        <div className="">
        </div>
      </section>

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
                {/* Image Right */}
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
    </div>
  );
}
