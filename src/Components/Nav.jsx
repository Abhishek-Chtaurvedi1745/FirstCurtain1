import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const blindsData = [
  { title: "Roman Blinds", slug: "roman-blinds" },
  { title: "Roller Blinds", slug: "roller-blinds" },
  { title: "Wood & PVC Blinds", slug: "wood-blind-pvc" },
  { title: "Honeycomb Shades", slug: "honeycomb-shade" },
  // { title: "Magic Blinds", slug: "magic-blinds" },
  { title: "Venetian Blinds", slug: "venetian-blind" },
  { title: "Vertical Blinds", slug: "vertical-blinds" },
  // { title: "Vertical Sheer Blinds", slug: "vertical-sheers-blinds" },
  { title: "Vitrom Blinds", slug: "vitrom-blinds" },
  { title: "Shadow Blinds", slug: "shadow-blinds" },
  { title: "Rainbow Blinds (Combi)", slug: "rainbow-blind-combi" },
  { title: "Outdoor Roller Blinds", slug: "outdoor-roller-blinds" },
  { title: "Bamboo Blinds", slug: "bamboo-blinds" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [blindOpen, setBlindOpen] = useState(false);
  const [blindClickCount, setBlindClickCount] = useState(0);

  const navigate = useNavigate();
  const menuItems = ["Home", "About", "Curtain", "Blinds", "Contact", "Cleaning"];

  const handleBlindClick = () => {
    if (blindClickCount === 0) {
      setBlindOpen(true); // open dropdown first click
      setBlindClickCount(1);
    } else {
      navigate("/blinds"); // second click navigates
      setIsOpen(false); // close mobile menu
      setBlindOpen(false);
      setBlindClickCount(0);
    }
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center h-20">

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center h-full font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li key={item} className="relative py-2">

              {item === "Blinds" ? (
                <div className="relative group">
                  <Link
                    to="/blinds"
                    className="flex items-center gap-1 py-1 px-5 hover:bg-[#0383b3] hover:text-white hover:shadow-[4px_4px_0_black] transition-all duration-300"
                  >
                    Blinds <ChevronDown size={16} />
                  </Link>

                  <ul className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 max-h-80 overflow-y-auto">
                    {blindsData.map((blind, index) => (
                      <li key={index}>
                        <Link
                          to={`/blinds/${blind.slug}`}
                          className="block px-5 py-3 hover:bg-[#0383b3] hover:text-white transition"
                        >
                          {blind.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="flex items-center h-full py-1 px-5 hover:bg-[#0383b3] hover:text-white hover:shadow-[4px_4px_0_black] transition-all duration-300"
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* GET QUOTE */}
        <div className="ml-auto">
          <Link to="/contact">
            <button className="bg-[#0383b3] hover:bg-black text-white px-6 py-2.5 rounded-md font-bold transition-colors duration-300 shadow-lg">
              Get Quote
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center ml-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center ml-4 -mt-[60px] pb-3">
 
  <a
    href="https://wa.me/6596905777"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg animate-vibrate transition-all"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
    >
      <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 .01 5.36 0 12a11.96 11.96 0 001.69 6.13L0 24l5.93-1.67A11.91 11.91 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.22-3.48-8.52zm-8.53 17.14a9.71 9.71 0 01-5.14-1.49l-.37-.22-3.52.99.94-3.44-.24-.36a9.71 9.71 0 011.54-12.52 9.78 9.78 0 0112.52-1.54 9.72 9.72 0 015.13 8.46c0 5.38-4.38 9.75-9.76 9.75zm5.44-7.67c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.05-.17-.29-.02-.45.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.66-.51-.17 0-.37 0-.57 0s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.1 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
    </svg>
  </a>
</div>


      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col text-gray-800 font-semibold">

            {menuItems.map((item) => (
              <li key={item}>

                {item === "Blinds" ? (
                  <div className="flex flex-col">
                    {/* Blinds heading clickable with special logic */}
                    <button
                      className="w-full flex justify-between items-center p-5 hover:bg-[#0383b3] hover:text-white"
                      onClick={handleBlindClick}
                    >
                      Blinds
                      <ChevronDown
                        size={18}
                        onClick={(e) => {
                          e.preventDefault(); // prevent navigation when clicking arrow
                          setBlindOpen(!blindOpen);
                          setBlindClickCount(1); // consider arrow click as first click
                        }}
                      />
                    </button>

                    {blindOpen && (
                      <ul className="bg-gray-50 max-h-72 overflow-y-auto">
                        {blindsData.map((blind, index) => (
                          <li key={index}>
                            <Link
                              to={`/blinds/${blind.slug}`}
                              className="block pl-10 py-3 hover:bg-[#0383b3] hover:text-white"
                              onClick={() => {
                                setIsOpen(false);
                                setBlindOpen(false);
                                setBlindClickCount(0);
                              }}
                            >
                              {blind.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block p-5 hover:bg-[#0383b3] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}

            <li className="p-5">
              <Link to="/contact">
                <button className="w-full bg-[#0383b3] text-white py-3 font-bold">
                  Get Quote
                </button>
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
