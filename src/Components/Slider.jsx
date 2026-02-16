import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const slides = [
  { image: "/assets/romanb1.jpg", title: "Roman Blinds", slug: "roman-blinds" },
  { image: "/assets/rollerb1.jpg", title: "Roller Blinds", slug: "roller-blinds" },
  { image: "/assets/woodpvc1.jpg", title: "Wood Blind - PVC Blinds", slug: "wood-blind-pvc" },
  { image: "/assets/honeyc1.jpg", title: "Honeycomb Shade", slug: "honeycomb-shade" },
  // { image: "/assets/magicblind.jpg", title: "Magic Blinds", slug: "magic-blinds" },
  { image: "/assets/venetianblind.jpg", title: "Venetian Blind", slug: "venetian-blind" },
  { image: "/assets/vertc1.jpg", title: "Vertical Blinds", slug: "vertical-blinds" },
  // { image: "/assets/Verticalsheerblind.jpg", title: "Vertical Sheers Blinds", slug: "vertical-sheers-blinds" },
  { image: "/assets/vitromblind.jpg", title: "Vitrom Blinds", slug: "vitrom-blinds" },
  { image: "/assets/shadowblind.jpg", title: "Shadow Blinds", slug: "shadow-blinds" },
  { image: "/assets/rainb1.jpg", title: "Rainbow Blind (Combi)", slug: "rainbow-blind-combi" },
  { image: "/assets/outdoorblinds.jpg", title: "Outdoor Roller Blinds", slug: "outdoor-roller-blinds" },
  { image: "/assets/bamboblind.jpg", title: "Bamboo Blinds", slug: "bamboo-blinds" },
];

export default function BlogSlider() {
  const { slug } = useParams();

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isAnimating, setIsAnimating] = useState(true);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // 🔹 Remove current opened blog
  const filteredSlides = slug
    ? slides.filter(item => item.slug !== slug)
    : slides;

  // 🔹 Responsive slides
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // 🔹 Reset index on route change
  useEffect(() => {
    setIndex(0);
  }, [slug, visible]);

  // 🔹 Ultra-smooth auto slide
  useEffect(() => {
    if (filteredSlides.length <= visible) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setIndex(prev =>
        prev < filteredSlides.length - visible ? prev + 1 : 0
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [filteredSlides.length, visible]);

  // 🔹 Remove jerk when snapping back
  useEffect(() => {
    if (index === 0) {
      setIsAnimating(false);
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [index]);

  // 🔹 Controls
  const nextSlide = () => {
    setIsAnimating(true);
    setIndex(index < filteredSlides.length - visible ? index + 1 : 0);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setIndex(index > 0 ? index - 1 : Math.max(filteredSlides.length - visible, 0));
  };

  // 🔹 Touch swipe
  const onTouchStart = e => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  if (filteredSlides.length <= visible) return null;

  return (
    <section className="relative w-full py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex ${
              isAnimating
                ? "transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                : ""
            }`}
            style={{
              transform: `translate3d(-${(index * 100) / visible}%,0,0)`,
              willChange: "transform",
            }}
          >
            {filteredSlides.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="inline-block mt-2 text-blue-600 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
