import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/8487365/pexels-photo-8487365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209719/pexels-photo-209719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const totalSlides = data.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : (prev) => prev + 1);
  };

 
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); 

   
    return () => clearInterval(autoSlide);
  }, [currentSlide]);

  return (
    <div className="relative mb-11 rounded-lg mx-8 max-w-[1640px] h-[calc(80vh-60px)] overflow-hidden ">
      <div
        className="flex w-[700vw] h-full transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((img, index) => (
          <img
            key={index}
            className="w-[80%] mx-auto h-full object-cover"
            src={img}
            alt={`slide-${index}`}
          />
        ))}
      </div>
      <div className="absolute left-0 right-0 bottom-[100px] flex gap-2 justify-center">
        <div
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowCircleLeft />
        </div>
        <div
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowCircleRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
