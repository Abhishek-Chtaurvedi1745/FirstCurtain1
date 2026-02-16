import React from "react";
import './Footer.css';
function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wider relative">
            About Us
          </h3>
          <div className="relative mb-6 flex">
            <div className="h-[3px] w-16 bg-[#0383b3]"></div>
            <div className="absolute left-[140px] -translate-x-[114px] -top-1.5 w-3 h-3 bg-[#0383b3]"></div>
          </div>
          <p className="text-gray-700 leading-relaxed ft">
            First Curtains provides the best quality of day and night curtains and blinds for your home. Get cheap curtains in Singapore that come in an array of unique materials.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wider relative ">
            Quick Links
          </h3>
          <div className="relative mb-6 flex">
            <div className="h-[3px] w-16 bg-[#0383b3]"></div>
            <div className="absolute left-[140px] -translate-x-[114px] -top-1.5 w-3 h-3 bg-[#0383b3]"></div>
          </div>
          <ul className="space-y-3 ft">
           <li>
  <a href="/" className="hover:text-[#0383b3] transition-colors">
    Home
  </a>
</li>
<li>
  <a href="/about" className="hover:text-[#0383b3] transition-colors">
    About
  </a>
</li>
{/* <li>
  <a href="/services" className="hover:text-[#0383b3] transition-colors">
    Services
  </a>
</li>
<li>
  <a href="/portfolio" className="hover:text-[#0383b3] transition-colors">
    Portfolio
  </a>
</li> */}
<li>
  <a href="/contact" className="hover:text-[#0383b3] transition-colors">
    Contact
  </a>
</li>
{/* <li>
  <a href="/blog" className="hover:text-[#0383b3] transition-colors">
    Blog
  </a>
</li> */}
<li>
  <a href="/cleaning" className="hover:text-[#0383b3] transition-colors">
    Cleaning
  </a>
</li>

          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wider relative">
            Contact Us
          </h3>
          <div className="relative mb-6 flex">
            <div className="h-[3px] w-16 bg-[#0383b3]"></div>
            <div className="absolute left-[140px] -translate-x-[114px] -top-1.5 w-3 h-3 bg-[#0383b3]"></div>
          </div>
          <p className="text-gray-700 mb-2 ft">21 Toh Guan Rd E, #05-14 Toh Guan Centre, Singapore 608609</p>
          <p className="text-gray-700 mb-2 ft">Email: firstcurtains@gmail.com</p>
          <p className="text-gray-700 mb-4 ft">Phone: +6596905777</p>
          <div className="flex flex-wrap gap-4 mt-2 ft">
            <a href="#" className="hover:text-[#0383b3] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#0383b3] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#0383b3] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#0383b3] transition-colors">Instagram</a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wider relative">Location</h3>

          {/* Embedded Google Map */}
          <div className="w-full h-48 rounded overflow-hidden shadow-md">
            <iframe
              title="First Curtains Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.3968851982536!2d103.7547136!3d1.3375284999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106d0b449225%3A0xdca6c9cbf7ef9ef1!2sFirst%20Curtains!5e1!3m2!1sen!2sin!4v1770012666018!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm ft">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
