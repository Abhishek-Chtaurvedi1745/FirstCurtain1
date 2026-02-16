import React, { useState, useEffect } from "react";

const faqData = [
  {
    category: "Blinds",
    question: "How do I measure my window for blinds?",
    answer:
      "You need to measure the width and height of your window frame accurately. Always measure at three points and take the smallest measurement.",
  },
  {
    category: "Blinds",
    question: "What materials are available for blinds?",
    answer:
      "We offer wooden, faux wood, aluminum, and fabric blinds depending on your style preference.",
  },
  {
    category: "Curtains",
    question: "How to clean my curtains?",
    answer:
      "Most curtains can be machine washed or dry cleaned. Always check the care label for specific instructions.",
  },
  {
    category: "Services",
    question: "Do you provide installation?",
    answer:
      "Yes! We offer professional installation services for all blinds and curtains purchased.",
  },
  {
    category: "Services",
    question: "What is the warranty period?",
    answer: "We provide a 1-year warranty on all blinds and curtains.",
  },
];

function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("Blinds");
  const [openIndex, setOpenIndex] = useState(null);

  // Reset accordion when switching categories to prevent layout jumps
  useEffect(() => {
    setOpenIndex(null);
  }, [selectedCategory]);

  const filteredFaqs = faqData.filter(
    (faq) => faq.category === selectedCategory
  );

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* Added items-start to prevent the image from moving when FAQ expands */}
      <div className="mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Side Image */}
        <div className="md:w-1/2 sticky top-10">
          <img
            src="/assets/carpet.jpeg"
            alt="FAQ Image"
            className="w-full h-auto shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side FAQ */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>

          {/* Category Filters */}
          <div className="flex space-x-4 mt-4 bg-blue-600 rounded justify-around overflow-hidden">
            {["Blinds", "Curtains", "Services"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-6 font-semibold text-sm md:text-base transition-all duration-300 flex-1 ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white"
                    : "text-white hover:bg-black hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="mt-6 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={`${selectedCategory}-${index}`}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none text-lg md:text-xl"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold transition-transform duration-300">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {/* Animated transition area */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-4 border-t border-gray-200 text-gray-700 bg-gray-50">
                    {faq.answer}
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

export default FAQSection;