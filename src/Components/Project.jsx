import React, { useState } from "react";
import { Search, Link as LinkIcon } from "lucide-react";

function Project() {
  const [filter, setFilter] = useState("All");

  const projects = [
 
  { id: 1, title: "Bamboo Blinds", category: "Bamboo Blinds", image: "assets/bamboo.jpg", rowSpan: 2 },
  { id: 2, title: "Bamboo Blinds", category: "Bamboo Blinds", image: "assets/bamboblind.jpg" },

 
  { id: 5, title: "Shadow Blinds", category: "Shadow Blinds", image: "assets/shadowblind1.jpg", colSpan: 2 },
  { id: 4, title: "Shadow Blinds", category: "Shadow Blinds", image: "assets/shadowblind.jpg" },


  { id: 3, title: "Outdoor Roller Blinds", category: "Outdoor Roller Blinds", image: "assets/outdoorblinds.jpg", rowSpan: 2 },
  { id: 6, title: "Vitrom Blinds", category: "Vitrom Blinds", image: "assets/vitromblind.jpg" },


  { id: 7, title: "Vertical Sheers blinds", category: "Vertical Sheers blinds", image: "assets/Verticalsheerblind.jpg", rowSpan: 2 },
  { id: 8, title: "Vertical Blinds", category: "Vertical Blinds", image: "assets/vertc1.jpg" },
  { id: 9, title: "Vertical Blinds", category: "Vertical Blinds", image: "assets/cc.jpg" },
  { id: 31, title: "Vertical Blinds", category: "Vertical Blinds", image: "assets/vertc3.jpg" },


  { id: 11, title: "Venetian Blinds", category: "Venetian Blinds", image: "assets/venetianblind1.jpg", colSpan: 2 },
  { id: 10, title: "Venetian Blinds", category: "Venetian Blinds", image: "assets/venetianblind.jpg" },
  { id: 12, title: "Venetian Blinds", category: "Venetian Blinds", image: "assets/venetianblind2.jpg" },


  { id: 13, title: "Magic Blinds", category: "Magic Blinds", image: "assets/magicblind.jpg", rowSpan: 2 },
  { id: 14, title: "Magic Blinds", category: "Magic Blinds", image: "assets/magicblind1.jpg" },
  { id: 15, title: "Magic Blinds", category: "Magic Blinds", image: "assets/maginblind2.jpg" },


  { id: 17, title: "Honey Comb Shade", category: "Honey Comb Shade", image: "assets/honeyc1.jpg", colSpan: 2 },
  { id: 16, title: "Honey Comb Shade", category: "Honey Comb Shade", image: "assets/honeyc.jpg" },
  { id: 18, title: "Honey Comb Shade", category: "Honey Comb Shade", image: "assets/honeyc2.jpg" },
  { id: 19, title: "Honey Comb Shade", category: "Honey Comb Shade", image: "assets/honeyc3.jpg", colSpan: 2 },
  { id: 20, title: "Honey Comb Shade", category: "Honey Comb Shade", image: "assets/honeyc4.jpg" },

  
  { id: 23, title: "Roller Blinds", category: "Roller Blinds", image: "assets/rollerb2.jpg", colSpan: 2 },
  { id: 21, title: "Roller Blinds", category: "Roller Blinds", image: "assets/rollerb.jpg" },
  { id: 22, title: "Roller Blinds", category: "Roller Blinds", image: "assets/rollerb1.jpg" },
  { id: 24, title: "Roller Blinds", category: "Roller Blinds", image: "assets/rollerb3.jpg" },

 
  { id: 25, title: "Wood and PVC Blinds", category: "Wood and PVC Blinds", image: "assets/woodpvc.jpg", rowSpan: 2 },
  { id: 26, title: "Wood and PVC Blinds", category: "Wood and PVC Blinds", image: "assets/woodpvc1.jpg" },
  { id: 27, title: "Wood and PVC Blinds", category: "Wood and PVC Blinds", image: "assets/woodpvc2.jpg" },
  { id: 28, title: "Wood and PVC Blinds", category: "Wood and PVC Blinds", image: "assets/woodpvc3.jpg" },


  { id: 29, title: "Roman Blinds", category: "Roman Blinds", image: "assets/romanb4.jpg", colSpan: 2 },
  { id: 30, title: "Roman Blinds", category: "Roman Blinds", image: "assets/romanb5.jpg" },
];


  const categories = [
    "All",
    "Bamboo Blinds",
    "Outdoor Roller Blinds",
    "Shadow Blinds",
    "Vitrom Blinds",
    // "Vertical Sheers blinds",
    "Vertical Blinds",
    "Venetian Blinds",
    // "Magic Blinds",
    "Honey Comb Shade",
    "Roller Blinds",
    "Wood and PVC Blinds",
    "Roman Blinds",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="px-6 md:px-16 bg-gray-50">
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Blinds</h2>
        <div className="relative mt-4 flex justify-center items-center">
          <div className="h-[2px] w-24 bg-[#0383b3]"></div>
          <div className="absolute w-3 h-3 bg-[#0383b3]"></div>
        </div>
      </div>

      
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === cat
                ? "bg-[#0383b3] text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-[#0383b3] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[300px] grid-flow-dense">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`relative overflow-hidden shadow-lg group rounded-lg
              ${project.colSpan ? "lg:col-span-2" : ""}
              ${project.rowSpan ? "lg:row-span-2" : ""}
            `}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#0383b3]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
              <div className="flex gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="p-3 bg-white/20 rounded-full text-white">
                  <Search size={20} />
                </div>
                <div className="p-3 bg-white/20 rounded-full text-white">
                  <LinkIcon size={20} />
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold">
                {project.title}
              </h3>

              <div className="w-12 h-[2px] bg-white my-3"></div>

              <p className="text-white/80 uppercase tracking-widest text-sm font-semibold">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
