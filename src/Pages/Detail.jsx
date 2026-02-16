import { useParams } from "react-router-dom";
import GoogleReviewsSlider from "../Components/GoogleReviews";
import { FaWhatsapp } from "react-icons/fa";
import Slider from "../Components/Slider";

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

const blindsData = [
{
  slug: "roman-blinds",
  title: "Roman Blinds",
  heroImage: "/assets/romanb1.jpg",
  shortText: "Elegant fabric blinds with soft folds.",
  description: "First Curtains provides the perfect roman blind installation service for spaces like the bedroom or living. We have an inspiring collection of roman blinds in natural textures and luxury textures plus our Deluxe perfect Raise headrail for smooth operation. this blinds make a decadent choice for bedroom and living decorated in a more traditional manner. Check out the different types of blinds in Singapore & find the one that best suits your needs.",
  featureImage: "/assets/romanb1.jpg",

  gallery: [
    "/assets/romanb1.jpg",
    "/assets/romanb2.jpg",
    "/assets/romanb3.jpg",
    "/assets/romanb4.jpg",
    "/assets/romanb5.jpg",
    "/assets/romanb6.jpg",
    "/assets/romanb7.jpg",
    "/assets/romanb8.jpg",
    "/assets/romanb9.jpg",
    "/assets/romanb10.jpg",
    "/assets/romanb11.jpg",
    "/assets/romanb12.jpg",
  ],

  features: [
    { title: "Luxury Fabric", text: "Premium textures and finishes." },
    { title: "Light Control", text: "Balanced light & privacy." },
    { title: "Custom Fit", text: "Tailor-made for your windows." },
  ],
},


  {
    slug: "roller-blinds",
    title: "Roller Blinds",
    heroImage: "/assets/rollerb1.jpg",
    shortText: "Minimal, modern & practical.",
    description:
      "First Curtains have been a very prominent supplier of roller blind in Singapore. simply a kind of a blind for the windows which can be rolled by pulling a simple pulley attached.Singapore is one of the countries in the world which experiences more or less favorable weather conditions throughout the year. But for most of the year, the weather remains hot and humid. Therefore, Singaporeans usually opt for blinds which protect their rooms from being excessively hot and humid. Our roller blinds are available in various designs and lengths which are apt for homes as well as offices. First Curtains is one of the most well-known companies in Singapore which have been providing the best quality material in Singapore for many years now. Over the years, First Curtains have become a trusted brand and continues to enjoy the patronage of the millions of customers from Singapore and also abroad.Back in the past, roller blinds were considered to be the decor of choice for the rich and the wealthy but with times all people have embraced the usage of this roller blinds in their homes and offices. The best part is that this is an item of utility and also adds to the decor of the interiors. They are available in various dimensions and designs which suits the taste of the large pool of the customers who are interested in purchasing them. While in the process of purchasing  this type of blinds, you should be very specific regarding the blind size. This has to be taken into consideration that they should perfectly fit in your window. Mere having a good design may not be enough; the size should be commensurate to the window aperture. The right strategy while choosing a roller blind from First Curtains is to let them know about your requirement and budget thoroughly. The team will suggest you design as per your requirement and choice. This will facilitate you to choose the right shade and design. Our roller blinds are available in different varieties like opaque, translucent etc. You may choose as per your requirement and taste.",
    featureImage:
      "/assets/rollerb3.jpg",

      gallery: [
  "/assets/rollerb.jpg",
  "/assets/rollerb1.jpg",
  "/assets/rollerb2.jpg",
  "/assets/rollerb3.jpg",
  "/assets/rollerb4.jpg",
  "/assets/rollerb5.jpg",
  "/assets/rollerb6.jpg",
  "/assets/rollerb7.jpg",
  "/assets/rollerb8.jpg",
  "/assets/rollerb9.jpg",
  "/assets/rollerb10.jpg",
  "/assets/rollerb11.jpg",
  "/assets/rollerb12.jpg",
  "/assets/rollerb13.jpg",
  "/assets/rollerb14.jpg",
],


    features: [
      { title: "Modern Look", text: "Clean & minimal design." },
      { title: "Easy Operation", text: "Smooth chain mechanism." },
      { title: "Blackout Option", text: "Total light blockage." },
    ],
  },

  {
    slug: "wood-blind-pvc",
    title: "Wood & PVC Blinds",
    heroImage: "/assets/woodpvc1.jpg",
    shortText: "Natural wood look with durable PVC.",
    description:
      "Wood venetian blinds are  much in demand in Singapore, and they are popular because they provide your house with complete protection from the hot and humid weather conditions in Singapore.Wood is undoubtedly one of the favorite materials of homeowners when it comes to furniture, and wooden elements often appear in interior decoration. Wooden furniture or wood venetian blinds  provide users with a great sense of comfort and peacefulness. Installing wood venetian blind in Singapore also makes you feel closer to nature.First Curtains is a well-known Wood Blind supplier in Singapore. See below for gallery and more information.When we are considering the different varieties of the blinds which are available with First Curtains, then the wooden venetian blinds are indeed the most expensive variety available. The wood venetian blinds are also available in different varieties of the wood and with different designs. The cost of the wood venetian blinds differs as per the quality of the wood and the design that it possess.This Blind also have another major advantage—they are easy to clean. In order to clean these wood blinds some wood polish has to be mixed in some water. Then a towel has to be dipped in it and the individual slats are to be cleaned with this towel. The high-quality wood venetian blinds are very sophisticated and durable at the same time. They provide immense protection against all odd weather conditions effectively and enhance the decor of the house or office tremendously. The discount faux wood venetian blinds & honeycomb blind are the most in demand for their great looks and the great affectivity.",
    featureImage:
      "/assets/woodpvc16.jpg",
        gallery: [
  "/assets/woodpvc.jpg",
  "/assets/woodpvc1.jpg",
  "/assets/woodpvc2.jpg",
  "/assets/woodpvc3.jpg",
  "/assets/woodpvc4.jpg",
  "/assets/woodpvc5.jpg",
  "/assets/woodpvc6.jpg",
  "/assets/woodpvc7.jpg",
  "/assets/woodpvc8.jpg",
  "/assets/woodpvc9.jpg",
  "/assets/woodpvc10.jpg",
  // "/assets/woodpvc11.jpg",
  "/assets/woodpvc12.jpg",
  "/assets/woodpvc13.jpg",
  "/assets/woodpvc14.jpg",
  "/assets/woodpvc15.jpg",
  "/assets/woodpvc16.jpg",
],
    features: [
      { title: "Premium Finish", text: "Elegant wooden texture." },
      { title: "Durable Material", text: "Long-lasting & sturdy." },
      { title: "Easy Maintenance", text: "Simple cleaning." },
    ],
  },

  {
    slug: "honeycomb-shade",
    title: "Honeycomb Shades",
    heroImage: "/assets/honeyc1.jpg",
    shortText: "Energy-efficient & stylish.",
    description:
      "The honeycomb blinds come in different varieties which are marked by different brands. These honeycomb blinds are cellular blinds and are being highly preferred by the millions of the homeowners and the reputed designers in Singapore. They are elegant, stylish and have an exhaustive list of utilities which make them the most desired objects by the interior designers. The best part is that they are available in numerous shades and fabrics and are quite affordable. The major characteristic of the honeycomb blind is that they are the best things for the insulated windows. The weather in Singapore is hot and humid most of the times. Thus, the requirement of the insulated windows and the honeycomb blinds is huge.First Curtains supplies numerous famous brands of the honeycomb blinds to their customers. The honeycomb blinds are the most efficient items which are required for the creation of an efficient and healthy home. The major characteristic of the honeycomb blind is that they prevent the loss of the heat from the room during the winters and the gain of the heat within the room during the summers. The honeycomb blinds are able to decrease the recycling waste which is a great relief to the environment.The Dexter variety of the honeycomb blinds are known for their great power of insulation and thus very extensively used in the lengths and breadths of Singapore. This brand of the honeycomb blind was established at around a century ago and is well-known for the best quality product and the unmatched customer service that they provide. They are available in multiple colors and designs which may suit as per your requirements exactly. There are various kinds of the fabrics which are being used and the cost depends on the nature of the fabric being used in the manufacturing of the honeycomb blinds. First curtains are actively engaged in the supplying of the different varieties of the honeycomb blinds which may fit your bill the right way. They are available in various budgets and you may choose the variety which may suit your pocket perfectly.If you are in Singapore and are looking for the window insulation solutions, then take the right decision of purchasing a good quality honeycomb blind which may fit your bill perfectly.",
    featureImage:
      "/assets/honeyc3.jpg",
    gallery: [
  "/assets/honeyc.jpg",
  "/assets/honeyc1.jpg",
  "/assets/honeyc2.jpg",
  "/assets/honeyc3.jpg",
  "/assets/honeyc4.jpg",
],

features: [
      { title: "Energy Saving", text: "Thermal insulation." },
      { title: "Soft Light", text: "Diffused natural light." },
      { title: "Modern Design", text: "Contemporary appeal." },
    ],
  },

  {
    slug: "magic-blinds",
    title: "Magic Blinds",
    heroImage: "/assets/magicblind.jpg",
    shortText: "Dual fabric for flexible light control.",
    description:
      "Windows are the centerpiece of the attraction of the house/room. Therefore the covering that you use on them needs to be easily functional and practical. The covering should enhance the entire look of your room and it should also go with the interior of the room. As per the basic rule of interior decoration, everything in the room should be in color coordination with each other.People are now switching to magic blinds as these blinds look better and sophisticated. They are quite popular in the market especially in other countries, both at home as well as offices. One of the biggest advantages of these blinds is that they are easy to handle.From sharp and sophisticated to warm and cozy the magic blinds can be used for all purpose. At FirstCurtains we offer an array of options in vertical blinds in terms of color, shades, and length. You can pick the one that suits your requirement the best and goes well with your interior. These blinds are perfect for use for both residential and commercial applications.FirstCurtains deals in Magic Blind that are really helpful in preventing strong sunlight shining through windows. These blinds are adjustable in order to provide privacy and to control light. One of the major advantages of these blinds is that they are easy to install and use in day to day life. All in all cover your windows in style with Magic blinds offered by FirstCurtains.",
    featureImage:
      "/assets/magicblind1.jpg",
         gallery: [
  "/assets/magicblind.jpg",
  "/assets/magicblind1.jpg",
],
    features: [
      { title: "Day & Night", text: "Dual-layer fabric." },
      { title: "Smooth Control", text: "Adjust light instantly." },
      { title: "Stylish Look", text: "Modern interiors." },
    ],
  },

  {
    slug: "venetian-blind",
    title: "Venetian Blinds",
    heroImage: "/assets/venetianblind.jpg",
    shortText: "Classic horizontal slat blinds.",
    description:
      "With horizontal panels and a few strings as a pulley system, Venetian blinds are a simple, stylish and practical feature in any room.  The design is such that there is easy access to the view outside the window, as well as an easy fix to when the sun is high in the sky and too glaring, simply adjust the amount of sunlight streaming into a room with the pull of a string.  However, the elegance and the difference of venetian blinds are that they may not be the staple furniture in a room much like curtains can be.  They blend in to almost any environment, so there would be no more stress about matching the curtains to the rest of the room.  At the same time, Venetian blinds lend its own charm, especially when the evening/ morning sun is filtered through them, and sections of the room are decorated with the shadows of the horizontal panels.  A truly Instagram- worthy sight. Versatile and useful, you would want Venetian blinds in any part of your home/work life. ",
    featureImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",

          gallery: [
  "/assets/venetianblind.jpg",
  "/assets/venetianblind1.jpg",
  "/assets/venetianblind2.jpg",
  
],
    features: [
      { title: "Adjustable Slats", text: "Control light direction." },
      { title: "Classic Style", text: "Timeless look." },
      { title: "Strong Build", text: "Metal & PVC options." },
    ],
  },

  {
    slug: "vertical-blinds",
    title: "Vertical Blinds",
    heroImage: "/assets/vertc3.jpg",
    shortText: "Perfect for large windows & doors.",
    description:
      "Vertical blinds are an amazing and inexpensive fix for covering large windows.  They are flexible yet durable, thus lending a sleekness and elegance to the room.  Although usually purchased in white, first curtains also offer vertical blinds in a variety of colours that liven up the space. While they have the decorative nature of curtains, they are very practical and can give your room a more modern feel. Vertical blinds give a wide amount of natural light adjustment ability, with simply a pull of a string or a rod.  They are versatile, easy to use and do not need a lot of cleaning, making it a great choice for living rooms and offices especially.  Privacy is easily achieved, and the view outside the window easily accessible.  Vertical blinds are definitely a popular choice for any potential place. Elegant and very useful, Vertical blinds are definitely a must-have in your home or office.",
    featureImage:
      "/assets/vertc2.jpg",

          gallery: [
  "/assets/vertc1.jpg",
  "/assets/vertc2.jpg",  
  "/assets/vertc3.jpg",  
],

    features: [
      { title: "Wide Coverage", text: "Large window solution." },
      { title: "Easy Control", text: "Rotate & slide panels." },
      { title: "Office Friendly", text: "Professional look." },
    ],
  },

  {
    slug: "vertical-sheers-blinds",
    title: "Vertical Sheer Blinds",
    heroImage: "/assets/Verticalsheerblind.jpg",
    shortText: "Soft sheer elegance.",
    description:
      "Usually, homes with stylish glass expanses for windows have only one problem: privacy.  With vertical sheer blinds, privacy is easily achieved.  While functionally similar to its cousin, the vertical blinds, sheer blinds maintain privacy while also allowing light to be distributed into the room, as well as allowing a view of the outside.  Thus, this makes sheer blinds especially ideal for living areas. Sheer blinds are also very aesthetically pleasing.  They are not only elegant but also add to the homely feeling of a room, shedding just the right amount of light in, for any occasion.  The translucent effect of the fabric also brings a soft glow to the area that relaxes the environment, adding a warmth to the room.  Sheer blinds come in a variety of colours and materials, simply get a consultation for the right material for your respective spaces. Elegant and stylish, Sheer blinds are a must have in any home or office.",
    featureImage:
      "/assets/vertc2.jpg",

         gallery: [
  "/assets/vertc1.jpg",
  "/assets/vertc2.jpg",  
  "/assets/vertc3.jpg",  
],

    features: [
      { title: "Luxury Feel", text: "Soft sheer fabric." },
      { title: "Light Diffusion", text: "Gentle daylight." },
      { title: "Modern Homes", text: "Premium interiors." },
    ],
  },

  {
    slug: "vitrom-blinds",
    title: "Vitrom Blinds",
    heroImage: "/assets/vitromblind.jpg",
    shortText: "Stylish layered blinds.",
    description:
      "Vitrom Blinds are perfect for the modern yet laid back look. They function like blinds, but come with benefits such as style and enhancing the decor of the room, adding a new layer of flare that makes a statement as compared to other types of blinds.  The cloth material also makes the room have a cozier feel compared to wooden, plastic or metal blinds.  Make your living area unique with these interesting blinds. Adjust the amount of light in the room easily with these blinds.  Simply pull the chord and reveal the sheer material behind that diffuses the light, giving the room a charming soft tint.  The sheer material also ensures a level of privacy, while allowing the outside scenery to be seen without it being too bright.   Practical and pretty, these blinds are a must have to bring out the decor in a room.",
    featureImage:
      "/assets/vitromblind.jpg",

       gallery: [
  "/assets/vitromblind.jpg",
],

    features: [
      { title: "Layered Design", text: "Enhanced control." },
      { title: "Elegant Look", text: "Modern style." },
      { title: "Durable Fabric", text: "Long-lasting quality." },
    ],
  },

  {
    slug: "shadow-blinds",
    title: "Shadow Blinds",
    heroImage: "/assets/shadowblind.jpg",
    shortText: "Soft light & privacy combined.",
    description:
      "Shadow blinds blend sheer and opaque fabric beautifully.",
    featureImage:
      "/assets/shadowblind1.jpg",

      
       gallery: [
  "/assets/shadowblind.jpg",
  "/assets/shadowblind1.jpg",
],
    features: [
      { title: "Smooth Layers", text: "Day-night balance." },
      { title: "Premium Fabric", text: "Soft texture." },
      { title: "Modern Appeal", text: "Stylish homes." },
    ],
  },

  {
    slug: "rainbow-blind-combi",
    title: "Rainbow Blinds (Combi)",
    heroImage: "/assets/rainb1.jpg",
    shortText: "Colorful & functional blinds.",
    description:
      "The Rainbow blinds (Combi Blinds) are a very common type of the blind which is often used by the citizens of Singapore. This is a fact that getting or shifting into a new home is really exciting but the factor which adds more to the entertainment is that how good you have worked on the interiors. If the interiors are amazing, then the joy of living is that space doubles for sure. One such element which can enrich your interiors is the rainbow blind. When we are talking about this particular variety of the blinds, then the most prominent rainbow blind (Combi Blinds) supplier in Singapore is First Curtains. They have the different varieties of the rainbow blinds (Combi Blinds) which may very aptly suit your requirement and choice.",
    featureImage:
    "/assets/rainb2.jpg",

         gallery: [
  "/assets/rainb1.jpg",
  "/assets/rainb2.jpg",  
  "/assets/rainb4.jpg",
  "/assets/rainb5.jpg",
  "/assets/rainb7.jpg",
  "/assets/rainb6.jpg",
],
    features: [
      { title: "Color Options", text: "Wide range of shades." },
      { title: "Dual Fabric", text: "Light flexibility." },
      { title: "Trendy Style", text: "Modern interiors." },
    ],
  },

  {
    slug: "outdoor-roller-blinds",
    title: "Outdoor Roller Blinds",
    heroImage: "/assets/outdoorblinds.jpg",
    shortText: "Weather-resistant outdoor solution.",
    description:
      "Singapore experiences a very hot and humid climate for most of the year. This is a prime reason why the outdoor blinds are much in demand. There are various kinds of the outdoor roller blinds which are being supplied by First Curtains. When it comes to the best outdoor roller blinds supplier, then First Curtains is the first name that reflects in the minds of the Singapore citizens. There are certain aspects which are taken into consideration while in the process of selecting the best and the most suitable outdoor roller curtains.The first thing that is to be taken into consideration is the type of the material which is being used in the outdoor roller curtains are to be noticed or scrutinized. There may be suitable materials for the preparation of the same like the vinyl or maybe fabric. Vinyl is a very tough material and possesses the required intensity to resist the pollution or the aging over the time. This material is also capable of withstanding acute weather conditions and thus fits the bill perfectly. They are either available in opaque or translucent varieties which are very effective in preventing the harsh weather conditions to enter your living or working space. There are also acrylic fabrics which are available that are used for the preparation of the outdoor roller curtains. They help in the maintaining of the privacy as well as keep your place comfortable. First Curtains is engaged in supplying all types of the outdoor roller curtains made from different materials.This is very crucial to decide before purchasing that where will you put your blind. The purpose of using the outdoor blind is also to be made very clear. There may be various purposes which may be served with the utilization of an outdoor blind. One purpose may be that you want to protect your wooden and other furniture from exposing them to direct sunlight. The other purpose may be that you want to protect your living or working space from the excessive heat and humidity. The outdoor roller blinds are to be selected as the priorities and requirements.The outdoor roller blinds may be operated in a variety of ways. This is to be ensured that which mode of operation seems more suitable to you and want to be incorporated in your outdoor blind. The cord and pulley operation and the motorized operation are the most preferred ones that are much in demand and are being readily supplied by First Curtains. There are also traditional types of the blinds which are available and this depends on your taste whether you want to portray a traditional look at your living space. Similarly, there are also modern looking outdoor roller blinds which are available with First Curtains. The trends reveal that these two types of the operations are most preferred. Also, the type of the manufacturing is to be taken into consideration when you make a purchasing decision.",
    featureImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",

      gallery: [
  "/assets/outdoorblinds.jpg",
  "/assets/outdoorblinds1.jpg",
  "/assets/outdoorblinds2.jpg",
  "/assets/outdoorblinds3.jpg",
  "/assets/outdoorblinds6.jpg",
  "/assets/outdoorblinds7.jpg",
],

    features: [
      { title: "Weather Proof", text: "Outdoor durability." },
      { title: "UV Protection", text: "Blocks harsh sunlight." },
      { title: "Privacy", text: "Outdoor comfort." },
    ],
  },

  {
    slug: "bamboo-blinds",
    title: "Bamboo Blinds",
    heroImage: "/assets/bamboblind.jpg",
    shortText: "Eco-friendly & natural style.",
    description:
      "Bamboo blinds are outdoor blinds that keep the heat and the sun out, and the cool air in.  They are perfect for protecting outdoor patio furniture from too much sun damage, and even function as a good shield from the rain.  All in all, bamboo blinds are the ideal outdoor blind, protecting sheltered venues with just enough protection from the outer elements. Whether it be an outdoor corridor, patio, outdoor cafe or balcony, bamboo blinds are a beautiful fix for finding shade.  Their wooden material create a natural and therefore relaxing feel to the area.  Although they provide sun and rain protection, they also allow for what is beyond them to be seen rather clearly, allowing whoever is within to still enjoy the scenery surrounding. Very practical yet stylish, bamboo blinds are essential in any outdoor venue. Bamboo blinds are useful in:Outdoor corridors, Patios, Balconies, Cafes, Outside of houses, And many more areas!",
    featureImage:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",

            gallery: [
  "/assets/bamboblind.jpg",
  "/assets/bamboblind1.jpg",
  "/assets/bamboblind2.jpg",
  "/assets/bamboblind3.jpg",
  "/assets/bamboblind4.jpg",
  "/assets/bamboblind5.jpg",
  "/assets/bamboblind6.jpg",
  "/assets/bamboblind7.jpg",
],


    features: [
      { title: "Eco Friendly", text: "Natural bamboo material." },
      { title: "Light Filtering", text: "Soft natural light." },
      { title: "Rustic Look", text: "Earthy interiors." },
    ],
  },
];


function Detail() {
  const { slug } = useParams();
  const item = blindsData.find((b) => b.slug === slug);

  if (!item) {
    return (
      <div className="text-center py-24">
        <h1 className="text-3xl font-bold">Content not found</h1>
        <p className="text-gray-500 mt-2">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="pb-20 bg-white">
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden">
          <div className="lg:w-1/2">
            <img
              src={item.heroImage}
              alt={item.title}
              className="w-full h-full min-h-[400px] object-cover"
            />
          </div>

          <div className="lg:w-1/2 bg-[#3f97c3] p-10 md:p-16 flex flex-col justify-center text-white">
            <h1 className="text-4xl font-extrabold mb-6">
              {item.title}
            </h1>

            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              {item.shortText}
            </p>

    <a
  href="https://wa.me/+6596905777"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1ebe5d] transition">
    <FaWhatsapp className="text-xl" />
    Fast Quote
  </button>
</a>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Why Choose <span className="text-blue-600">{item.title}</span>?
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="lg:w-2/5 relative">
              <div className="overflow-hidden shadow-2xl relative z-10">
                <img
                  src={item.featureImage}
                  alt={item.title}
                  className="w-full h-[500px] object-cover transform hover:scale-110 transition duration-700"
                />
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-100 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {item.gallery && item.gallery.length > 0 && (
  <section className="py-15 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900">
          {item.title} Gallery
        </h2>
        <p className="text-gray-500 mt-3">
          Explore our recent installations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {item.gallery.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-xl group"
          >
            <img
              src={img}
              alt={`${item.title} ${index + 1}`}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

    </div>
  </section>
)}
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
      {/* LINE */}
      <div className="w-full h-[2px] bg-gray-600 mb-6 rounded-full transition-all duration-300"></div>

      {/* CONTENT */}
      <div className="flex flex-col items-center gap-6 w-full md:flex-row md:justify-between md:items-center md:text-left">
        
        {/* IMAGE + TITLE */}
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

        {/* DESCRIPTION */}
        <p className="leading-relaxed max-w-md text-left md:text-left mx-auto md:mx-0">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
    <Slider/>
      <GoogleReviewsSlider/>
    </>
  );
}

export default Detail;
