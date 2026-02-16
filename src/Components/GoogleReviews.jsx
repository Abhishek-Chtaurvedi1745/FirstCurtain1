import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [ { name: "Nur Haslinda", rating: 5, text: "Managed to engage First Curtains after few rounds of searching of blinds from other companies. Emailed David for the free quotation and he responded very fast. We asked him to come down to our house for measurements and looking through at the designs samples. After the measurements, he quoted us with very affordable price. We cannot say no. We took Venetian blinds for living rooms and combi blinds for our rooms. The team did a great job in installing the blinds. Very fast. Overall we are very satisfied with the purchase. We will definitely recommend First Curtains to family and Friends. 😄", avatar: "/assets/nur.png", curtain: "/assets/rev.webp", }, { name: "JER YAP", rating: 5, text: "David makes good quality curtains and blinds at 👍🏻 prices. Have used him many times for various projects over the years - always been happy with results . Makes honest recommendations, punctual! Not pushy. Installers take pride in work.Never leave a mess👏🏻 .Thanks again", avatar: "", curtain: "/assets/rev2.webp", }, { name: "Venu Mallavarapu", rating: 5, text: "After reading the reviews, my wife and I went to this shop in Toh Guan Center on a Sunday. Devin showed us options and we shortlisted what we wanted in 30 min. Devin came to our house for measurements on next Wednesday. I made a deposit on Wednesday and the curtains were installed today (Saturday) afternoon. Though they said they will try their best to install with in 3-5 days, they kept their commitment. Very happy with their work and service. Price is also reasonable - value for money. will not hesitate to recommend.", avatar: "", curtain: "/assets/romanb1.jpg", }, { name: "Ler Lee Tan", rating: 5, text: "Nobel Curtain provided quality service. Their are professional, punctual and reliable! They pay attention to very detail as well as gave excellence advice. I would definitely recommend them to my friends and family!!!! Would engage their service again in a heartbeat!!!!!", avatar: "", curtain: "/assets/rollerb1.jpg", }, { name: "Jack Toh", rating: 5, text: "I have engaged First Curtains for installation of zip blind. The first installation had some issues with the blind but David Toh was quick and responsive to the rectification requests. After a few rectification, First Curtains offered to replace the entire set of zip blind at no cost on me, which to me demonstrated an excellent after sale service, and deserve commentable reviews.", avatar: "", curtain: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", }, ];

export default function GoogleReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [visible] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  // 🔹 Auto slide (smooth)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setIndex(prev => (prev < reviews.length - 1 ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // 🔹 Remove jerk on reset
  useEffect(() => {
    if (index === 0) {
      setIsAnimating(false);
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [index]);

  // 🔹 Controls
  const nextSlide = () => {
    setIsAnimating(true);
    setIndex(index < reviews.length - 1 ? index + 1 : 0);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setIndex(index > 0 ? index - 1 : reviews.length - 1);
  };

  // 🔹 Touch swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = e => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Google Reviews
        </h2>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200"
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
              transform: `translate3d(-${index * 100}%,0,0)`,
              willChange: "transform",
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-full px-3 flex-shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    {review.avatar && (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.287-3.974z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm lg:text-lg">
                    {review.text}
                  </p>

                  {review.curtain && (
                    <div className="flex justify-center">
                      <img
                        src={review.curtain}
                        alt="Curtain"
                        className="w-full lg:w-1/2 h-60 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
