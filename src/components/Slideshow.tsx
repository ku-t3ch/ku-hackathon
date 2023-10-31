import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Slideshow() {
  const slides = [
    {
      url: "slideshow-items/bangkhen-blur.png",
    },
    {
      url: "slideshow-items/kampangsan-blur.png",
    },
    {
      url: "slideshow-items/sakonnakhon-blur.png",
    },
    {
      url: "slideshow-items/sriracha-blur.png",
    },
    {
      url: "slideshow-items/supanburi-blur.png",
    },
  ];

  const arrowStyle: string =
    "z-20 hidden md:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] text-2xl p-2 text-white cursor-pointer";

  const [currIndex, setCurrIndex] = useState(0);
  const prevSlide = (): void => {
    const isFirst = currIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const nextSlide = (): void => {
    const isLast = currIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const overlayStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${slides[currIndex].url})`,
  };

  return (
    <div className="h-screen w-full flex">
      <div
        style={overlayStyle}
        className="w-full h-full bg-center bg-cover flex flex-col justify-center"
      >
        <div className="z-10">
          <img
            src="home-title.png"
            alt="KU Hackathon Hero"
            className="w-[70%] md:w-[70%] mx-auto z-10 select-none"
            draggable="false"
          />
        </div>
        <div className={`${arrowStyle} left-5`}>
          <BsChevronCompactLeft onClick={prevSlide} size={40} />
        </div>
        <div className={`${arrowStyle} right-5`}>
          <BsChevronCompactRight onClick={nextSlide} size={40} />
        </div>
        <div className="flex justify-center py-2 absolute bottom-10 w-full z-20">
        {slides.map((slide, index) => (
          <div className="cursor-pointer">
            <RxDotFilled
              key={index}
              onClick={() => setCurrIndex(index)}
              className={`mx-1 ${
                currIndex === index ? "text-[#0DBC58]" : "text-white"
              }`}
              size={30}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
