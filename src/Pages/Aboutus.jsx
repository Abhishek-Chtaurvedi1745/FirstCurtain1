import React from "react";
import { Link } from "react-router-dom";
import { FaCogs, FaShieldAlt, FaRocket, FaHeart } from "react-icons/fa";
import FAQSection from "../Components/FAQSection";



function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/assets/carpet.jpeg')" }}
        ></div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-10 md:p-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-gray-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

    <section className="py-20 bg-gray-50">
  <div className="max-w-8xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-12">
    

    <div className="md:w-1/2">            
      <img
        src="/assets/rollerb5.jpg"
        alt="About Section"
        className="w-full  shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>            

    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        20+ Years of Experience in Blinds Business
      </h2>
      <p className="text-gray-600 leading-relaxed text-lg">
        We are committed to delivering the best services to our clients, combining innovation, expertise, and dedication. Our team works tirelessly to ensure every project is executed with excellence.
      </p>
      <p className="text-gray-600 leading-relaxed text-lg">
        With years of experience and a passion for quality, we aim to build long-lasting relationships with our clients and create solutions that make a real difference.
      </p>
      <button className="mt-4 py-2 px-4 bg-[#0383b3] text-white font-semibold  shadow-[3px_3px_0px_black] transition-all duration-300 hover:bg-black hover:shadow-[5px_5px_0px_#0383b3]">
        Learn More
      </button>
    </div>
  </div>
</section>
 <div className="text-center mb-[200px]">
      <h2 className="text-4xl md:text-5xl font-bold">Our Features</h2>

    
      <div className="flex items-center justify-center mt-4 space-x-2">
        <div className="w-10 h-1 bg-white"></div>
        <div className="w-2 h-2 bg-white"></div>
        <div className="w-10 h-1 bg-white"></div>
      </div>


      <p className="mt-4 text-black max-w-2xl mx-auto">
        Our platform offers the best features designed to make your experience seamless and enjoyable. Explore what makes us stand out.
      </p>
    </div>
   <section
  className="relative py-20"
  style={{
    backgroundImage: "url('/assets/rollerb9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative max-w-7xl -top-[224px] mx-auto px-6 md:px-16 text-white">


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          image: "/assets/truck.png",
          title: "Feature One",
          desc: "Manage tasks efficiently and improve productivity.",
        },
        {
          image: "assets/shield.png",
          title: "Feature Two",
          desc: "Secure and reliable features to protect your data.",
        },
        {
          image: "assets/time-icon.png",
          title: "Feature Three",
          desc: "Boost your workflow with fast efficient performance.",
        },
        {
          image: "assets/group.png",
          title: "Feature Four",
          desc: "Designed with love to a seamless experience.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center relative transition-all duration-500 hover:shadow-2xl group"
        >
          {/* Top Blue Box */}
          <div className="w-full bg-[#0383b3] h-[252px] relative flex justify-center items-center">
            <div className="text-white">
  {feature.image ? (
    <img
      src={feature.image}
      alt={feature.title}
      className="w-15 h-16 object-contain -mt-[47px]"
    />
  ) : (
    feature.icon
  )}
</div>


            <svg
              className="absolute bottom-0 w-full"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C100,120 150,0 250,60 C350,120 400,0 500,60 L500,150 L0,150 Z"
                className="fill-white"
              />
            </svg>
          </div>

          
          <div className="p-6 flex flex-col items-center space-y-4 -mt-4">
            <h3 className="text-xl font-bold text-gray-800 text-[30px] -mt-[10px]">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
<section
  className="relative py-20"
  style={{
    backgroundImage: "url('/assets/carpet.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="absolute inset-0 bg-white bg-opacity-90"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-16">

    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Quality Blinds & Curtains <br />
        <span className="text-[#0383b3]">
          From Local Family-Run Business
        </span>
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s.
      </p>
    </div>

  
    <div className="relative flex flex-col items-center group">

      
      <div
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          bg-gradient-to-br from-[#0383b3] to-[#026a92]
          shadow-2xl p-8 rounded-2xl w-[300px] h-[400px]
          hidden md:flex flex-col
          transition-all duration-300
          group-hover:-translate-x-4
          text-white text-center
        "
      >
        <div className="w-12 h-1 bg-white mx-auto mb-4 rounded-full"></div>

        <h4 className="text-2xl font-bold leading-snug">
          Want to see how <br /> it all works?
        </h4>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
            <div className="w-20 h-20 rounded-full bg-white text-[#0383b3] flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 ml-1" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.79 5.093 10.91 8 6.79 10.907V5.093z" />
              </svg>
            </div>
          </div>
        </div>

        <p className="text-sm opacity-90 tracking-wide">
          Watch our short introduction video
        </p>
      </div>

  
      <img
        src="/assets/rollerb7.jpg"
        alt="About Us"
        className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
      />

   
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          bg-gradient-to-br from-[#0383b3] to-[#026a92]
          text-white shadow-2xl p-8 rounded-2xl w-[300px] h-[400px]
          hidden md:flex flex-col items-center justify-between
          transition-all duration-300
          group-hover:translate-x-4
          text-center
        "
      >
        <div className="w-12 h-1 bg-white rounded-full mt-2"></div>

        <h4 className="text-2xl font-bold leading-snug">
          Jannal will help you to <br />
          your dreams come true
        </h4>

        <button
          className="
            py-3 px-6 bg-black text-white font-semibold
            shadow-[3px_3px_0px_white]
            transition-all duration-300
            hover:shadow-[6px_6px_0px_black]
            hover:-translate-y-1
          "
        >
          Click Here
        </button>

        <p className="text-sm opacity-90 tracking-wide mb-2">
          Premium Blinds & Curtains
        </p>
      </div>

      
      <div className="w-full max-w-md md:hidden flex flex-col gap-6 mt-6">

    
        <div className="bg-gradient-to-br from-[#0383b3] to-[#026a92] text-white p-6 rounded-2xl shadow-xl text-center">
          <h4 className="text-xl font-bold mb-4">
            Want to see how it all works?
          </h4>
          <div className="w-16 h-16 mx-auto rounded-full bg-white text-[#0383b3] flex items-center justify-center mb-4">
            ▶
          </div>
          <p className="text-sm">Watch our short introduction video</p>
        </div>

        
        <img
          src="/assets/rollerb2.jpg"
          alt="About Us"
          className="w-full rounded-lg shadow-lg object-cover"
        />

       
        <div className="bg-gradient-to-br from-[#0383b3] to-[#026a92] text-white p-6 rounded-2xl shadow-xl text-center">
          <h4 className="text-xl font-bold mb-4">
            Jannal will help you to your dreams come true
          </h4>
          <button className="py-2 px-5 bg-black text-white font-semibold shadow-[3px_3px_0px_white]">
            Click Here
          </button>
          <p className="text-sm mt-3">Premium Blinds & Curtains</p>
        </div>

      </div>

    </div>

  </div>
</section>

<FAQSection/>


    </div>
  );
}

export default AboutUs;
