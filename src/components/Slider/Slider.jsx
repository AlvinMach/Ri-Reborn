import React, { useState, useEffect } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import {Link} from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Ri REBORN",
      description: "Your trusted source for quality products. With years of experience, we deliver only the best to our customers.",
      img: "https://cdn.pixabay.com/photo/2024/08/10/16/24/worker-8959737_1280.jpg",
      bg: "bg-blue-500",
      url: "/shop",
    },
    {
      id: 2,
      title: "Stay Safe, Work Smart",
      description: "Discover Our Durable and High-Quality Protective Clothing for Every Industry.",
      img: "https://images.pexels.com/photos/8961029/pexels-photo-8961029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bg: "bg-green-500",
      url: "/shop",
    },
    {
      id: 3,
      title: "Unleash the Beauty of Nature",
      description: "Our Premium Gemstones are Handpicked for Quality. Elevate Your Collection Today!",
      img: "https://images.pexels.com/photos/9031621/pexels-photo-9031621.jpeg",
      bg: "bg-purple-500",
      url: "/shop",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [currentSlide]);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* Slide container */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* Text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center p-8">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-white">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-white">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                
              </Link>
            </div>

            {/* Image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <img
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <div
          className="w-10 h-10 bg-slate-300 flex items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={prevSlide}
        >
          <BiLeftArrowCircle size={40} />
        </div>
        <div
          className="w-10 h-10 bg-slate-300 flex items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={nextSlide}
        >
          <BiRightArrowCircle size={40} />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              currentSlide === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
