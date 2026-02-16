import React from 'react';
import Slider from '../Components/Slider'; 
import GoogleReviews from '../Components/GoogleReviews';

const categories = [ { image: "/assets/rollerb.jpg", }, { image: "/assets/rollerb1.jpg" }, { image: "/assets/rollerb2.jpg" }, { image: "/assets/rollerb3.jpg" } ];
const reasons = [
  {
    title: "20 years+\nexperience",
    description: "We specialized in the curtain industry for over 20 years, and have a deep insight into choosing suitable products for customers.",
    image: "/assets/20y.webp"
  },
  {
    title: "Quality guarantee",
    description: "We are confident that keeping high-quality standards is our motto, and customers are satisfied with every single curtain.",
    image: "/assets/qltg.webp"
  },
  {
    title: "SG Local Factory",
    description: "We have a local factory in Singapore, direct suppliers to keep the prices great, perfect after-sales service, and produce quickly.",
    image: "/assets/sg.webp"
  },
   {
    title: "Free quotation & fair price",
    description: "We provide fast estimate quotations and fair price tables.",
    image: "/assets/fq.webp"
  }
];

function ContactUs() {
  return (
    <>
      
      <section className="pb-20 bg-white">
        <div className="">
          <div className="flex flex-col lg:flex-row items-stretch overflow-hidden shadow-2xl">
            <div className="lg:w-1/2">
              <img 
                src="/assets/rollerb4.jpg" 
                alt="Contact Interior"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>

            <div className="lg:w-1/2 bg-[#3f97c3] p-10 md:p-16 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-6">Curtains & Blinds
Dimout Package
For New BTO</h3>
              <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                Experience the quality of our blinds and curtains in person. Our experts are ready to help you transform your space.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold tracking-widest">Our Location</p>
                    <p className="text-xl font-medium">123 Interior Way, Design City, DC</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-lg text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-bold tracking-widest">Email Us</p>
                    <p className="text-xl font-medium">hello@yourbrand.com</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
                Day & Night Curtains <br />
                <span className="text-blue-600">Memory Fold & Ripple Fold(S-fold)</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                Discover the perfect balance of light control and privacy with our signature folding techniques.
              </p>
            </div>

            <div className="lg:w-2/5 relative">
              <div className="h-full  overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="assets/rollerb3.jpg" 
                  alt="Interior Design"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">Our Collections</h2>
            <div className="flex justify-center items-center mt-3">
              <div className="w-10 h-0.5 bg-blue-600"></div>
              <div className="w-2 h-2 bg-blue-600 rotate-45 mx-2"></div>
              <div className="w-10 h-0.5 bg-blue-600"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden shadow-lg mb-3 aspect-[4/5] bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x800?text=Image+Not+Found" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     <Slider/>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-widest">
            Why Choose FirstCurtain ?
          </h2>
        </div>

   <div className="grid grid-cols-1 gap-12">
  {reasons.map((item, index) => (
    <div
      key={index}
      className="group flex flex-col items-center text-center"
    >
      
      <div className="w-full h-[2px] bg-gray-600 mb-6 rounded-full transition-all duration-300"></div>

      
      <div className="flex flex-col items-center gap-6 w-full md:flex-row md:justify-between md:items-center md:text-left">
        
        
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
          <div className="w-20 h-20 transition-transform duration-500 group-hover:scale-110">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-2xl md:text-4xl uppercase tracking-wide text-left md:text-left">
            {item.title}
          </h3>
        </div>

        
        <p className="leading-relaxed max-w-md text-left md:text-left mx-auto md:mx-0">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
    <GoogleReviews/>
    </>
  );
}

export default ContactUs;