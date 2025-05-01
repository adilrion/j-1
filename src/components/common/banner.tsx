'use client';

import { useEffect, useState } from 'react';
import { icons } from '../../../public';

export default function BannerSlider() {
  // Sample images - replace with your actual image URLs
  const images = [icons.g1.src, icons.g1.src, icons.g1.src];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalImages = images.length;

  // Navigate to next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };



  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full inline-flex flex-col lg:flex-row justify-start items-start gap-3 pt-10">
      {/* Main image container */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[360px] lg:w-[895px] relative bg-white rounded-3xl overflow-hidden">
        <div className="w-full h-full absolute overflow-hidden">
          {/* Main image - changes on slide */}
          <img
            src={images[currentIndex]}
            className="w-full h-full object-cover object-bottom transition-opacity duration-500"
            alt={`Slide ${currentIndex + 1}`}
          />

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-2 rounded-[50px] inline-flex justify-center items-center gap-2">
            <div className="flex justify-start items-center gap-[7px]">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`size-[7px] relative ${index === currentIndex ? 'bg-[#f6f6f6]' : 'opacity-30 bg-[#f6f6f6]'
                    } rounded-[50px] cursor-pointer`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Right side container with two smaller images - hidden on mobile/tablet */}
      <div className="hidden lg:flex lg:flex-1 h-[360px] flex-col justify-center items-start gap-3">
        {/* Top right image slot */}
        <div className="self-stretch flex-1 relative w-full h-[174px] bg-white rounded-3xl overflow-hidden">
          {/* Shows next image (current + 1) */}
          <img
            className="w-full h-full object-cover transition-opacity duration-500"
            src={images[(currentIndex + 1) % totalImages]}
            alt={`Next image`}
          />
        </div>

        {/* Bottom right image slot with overlay */}
        <div className="self-stretch flex-1 relative bg-neutral-900 rounded-3xl overflow-hidden">
          <div className="w-[453px] h-[174px] left-0 top-0 absolute blur-[25px]" />
          {/* Third image (current + 2) with overlay */}
          <img
            className="w-[489px] h-[174px] left-[-26px] top-0 absolute opacity-40 object-cover transition-opacity duration-500"
            src={images[(currentIndex + 2) % totalImages]}
            alt={`Third image`}
          />
          {/* Displays remaining photos count */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center text-white text-[32px] font-medium leading-tight">
            +{(totalImages - currentIndex - 2 + totalImages) % totalImages || totalImages} photos
          </div>
        </div>
      </div>
    </div>
  );
}