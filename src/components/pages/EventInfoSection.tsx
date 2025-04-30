'use client';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { icons } from "../../../public";

export default function EventInfoSection() {
  // Event data for mapping
  const events = [
    {
      id: 1,
      title: "Legends Rise on the Field",
      image: icons.s1.src,
      date: "Thu, Dec 5",
      time: "12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      attending: "6/8 attending",
      spotsLeft: "2 spots left",
      price: 320,
      tags: ["Football", "Below 25y"],
      level: "Advanced",
    },
    {
      id: 2,
      title: "Chasing Glory: Football Showdown",
      image: icons.s2.src,
      date: "Thu, Dec 5",
      time: "12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      attending: "6/8 attending",
      spotsLeft: "2 spots left",
      price: 320,
      tags: ["Football", "Below 25y"],
      level: "Advanced",
    },
    {
      id: 3,
      title: "United We Play, United Win",
      image: icons.s3.src,
      date: "Thu, Dec 5",
      time: "12.30AM - 12.30PM",
      location: "Bashundhara Sports Complex",
      attending: "6/8 attending",
      spotsLeft: "2 spots left",
      price: 320,
      tags: ["Football", "Below 25y"],
      level: "Advanced",
    },
    {
      id: 4,
      title: "Football Champions League",
      image: icons.s1.src,
      date: "Fri, Dec 6",
      time: "1.30PM - 3.30PM",
      location: "Bashundhara Sports Complex",
      attending: "7/8 attending",
      spotsLeft: "1 spot left",
      price: 350,
      tags: ["Football", "All Ages"],
      level: "Advanced",
    },
    {
      id: 5,
      title: "Weekend Football Tournament",
      image: icons.s2.src,
      date: "Sat, Dec 7",
      time: "10.00AM - 1.00PM",
      location: "Bashundhara Sports Complex",
      attending: "5/8 attending",
      spotsLeft: "3 spots left",
      price: 300,
      tags: ["Football", "Below 25y"],
      level: "Intermediate",
    },
  ];

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // State to track number of visible cards based on screen size
  const [visibleCards, setVisibleCards] = useState(3);

  // Calculate total slides based on visible cards
  const totalSlides = Math.max(0, events.length - visibleCards);

  // Update visible cards count based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle sliding to a specific index
  const slideToIndex = (index:number) => {
    if (sliderRef.current) {
      // @ts-ignore
      const slideWidth = sliderRef.current.querySelector('.event-card').offsetWidth;
      const gapWidth = 16; 
      // @ts-ignore
      sliderRef.current.scrollTo({
        left: index * (slideWidth + gapWidth),
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Handle next slide
  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, totalSlides);
    slideToIndex(nextIndex);
  };

  // Handle previous slide
  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    slideToIndex(prevIndex);
  };

  return (
    <section className="w-full gap-2.5 p-4 md:p-6 lg:p-10 bg-variable-collection-main-BG-solid-white flex flex-col">
      <div className="w-[1440px]  mx-auto px-4 lg:px-10">
        <div className="gap-3 w-full flex flex-col">
          <header className="flex items-center justify-between py-3">
            <h2 className="font-s-bold text-[#261b36] text-xl md:text-2xl leading-8">
              Other events you may like
            </h2>

            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 md:w-12 md:h-12 bg-variable-collection-BG-2-light-yellow rounded-full flex items-center justify-center"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 md:w-12 md:h-12 bg-variable-collection-BG-2-light-yellow rounded-full flex items-center justify-center"
                onClick={handleNext}
                disabled={currentIndex >= totalSlides}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </header>

          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="flex items-stretch gap-4 w-full transition-all duration-300"
              style={{ scrollSnapType: "x mandatory", overflowX: "hidden" }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  className="event-card flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)] rounded-[30px] border border-neutral-200 flex flex-col overflow-hidden"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[116px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-4 bg-white flex flex-col gap-2">
                    {/* Tags and Level */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="px-2.5 py-1 h-[25px] bg-[#d9f2e6] rounded-full text-[#494949] text-xs font-medium ">
                          Football
                        </span>
                        <span className="px-2.5 py-1 h-[25px] bg-[#efedff] rounded-full text-[#494949] text-xs font-medium">
                          Below 25y
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        {/* Signal Bars */}
                        <div className="flex items-end gap-[1px]">
                          <div className="w-1 h-1 bg-[#63cfa0]" />
                          <div className="w-1 h-2 bg-[#63cfa0]" />
                          <div className="w-1 h-3 bg-[#63cfa0]" />
                          <div className="w-1 h-4 bg-[#63cfa0]" />
                        </div>
                        <span className="text-[#494949] text-xs font-normal leading-tight">
                          {event.level}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl md:text-2xl font-medium font-s-medium text-[#34735f] line-clamp-2">
                        {event.title}
                      </h2>
                      <div className="flex items-center gap-1 text-sm text-neutral-900">
                        <span>{event.date}</span>
                        <span className="size-[2.50px] bg-neutral-900 rounded-full" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-[8.65] text-sm text-neutral-900">
                        <img src={icons.location.src} className="w-4 h-4" alt="Location" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Footer Section */}
                    <div className="mt-auto flex justify-between items-end">
                      <span className="text-sm text-neutral-900">6/8 attending</span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-sm text-[#aa3333] font-medium">2 spots left</span>
                        <div className="flex items-center gap-1">
                          <img src={icons.taka.src} className="size-[18px]"></img>
                          <span className="text-2xl text-neutral-900">
                            320
                            <span className="text-lg text-[#808080]">/person</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}