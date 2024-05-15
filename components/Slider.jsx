"use client";

import { SliderData } from "@/utils/constance";
import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // nextSlide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // prevSlide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // array checking
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-[2.7rem]   font-bold text-center p-4">Gallery</h1>

      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowAltCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px]  cursor-pointer select-none z-[2] text-white/70
                transition-all hover:scale-90 hover:text-white/50"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  className="rounded-2xl"
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowAltCircleRight
                onClick={nextSlide}
                size={50}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] transition-all hover:scale-90 hover:text-white/50"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
