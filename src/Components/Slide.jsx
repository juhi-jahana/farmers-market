import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";


// Step 1: Store all image + text + author in one array
const slides = [
  {
    image: "/veg1.jpg",
    text: "Mauris porta nulla vitae aliquam luctus. Vestibulum non tempus libero.",
    author: "Victor Novak, Califor Agro Ltd.",
  },
  {
    image: "/veg2.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    author: "Sarah Walker, Green Fields",
  },
  {
    image: "/veg3.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    author: "James Carter, Farm Fresh",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center px-4 text-white"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text */}
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-3xl md:text-4xl font-semibold leading-relaxed">
          {currentSlide.text}
        </p>
        <p className="mt-6 text-lg font-bold">– {currentSlide.author}</p>

        {/* Arrows */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <button onClick={prevSlide}>
            <FaArrowLeft className="text-white text-2xl" />
          </button>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <button onClick={nextSlide}>
            <FaArrowRight className="text-white text-2xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;