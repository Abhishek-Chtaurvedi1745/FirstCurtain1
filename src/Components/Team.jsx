import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Lead UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    }
  ];

  return (
    <div className="py-24 px-6 md:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
          Our Team
        </h2>
        <div className="relative mt-6 flex justify-center items-center">
          <div className="h-[3px] w-32 bg-[#ff0047]"></div>
          <div className="absolute w-4 h-4 bg-[#ff0047]"></div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center group transition-all duration-300 hover:shadow-[-25px_-25px_0px_#000000]"
          >
            {/* Image */}
            <div className="relative w-full">
              <div className="w-full aspect-square border-4 border-black overflow-hidden shadow-[-25px_-25px_0px_#ff0047] transition-all duration-500 group-hover:shadow-none">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center w-full px-4 py-6 transition-all duration-300 group-hover:bg-[#ff0047]">
              <h3 className="text-2xl font-black uppercase leading-tight text-gray-900 transition-colors duration-300 group-hover:text-white">
                {member.name}
              </h3>

              <p className="text-sm font-bold uppercase tracking-widest mt-2 mb-6 text-[#ff0047] transition-colors duration-300 group-hover:text-white">
                {member.position}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                {[ 
                  { icon: <Facebook size={18} />, link: "#" },
                  { icon: <Linkedin size={18} />, link: "#" },
                  { icon: <Twitter size={18} />, link: "#" },
                  { icon: <Instagram size={18} />, link: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-black transition-all duration-300 group-hover:bg-black group-hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
