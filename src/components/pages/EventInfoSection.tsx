import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight
} from "lucide-react";
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
  ];

  // Custom skill level indicator component
  const SkillLevelIndicator = () => (
    <div className="inline-flex gap-1.5 px-[5px] py-[2.5px] items-center">
      <div className="relative w-5 h-5">
        <div className="inline-flex items-end gap-[0.4px] relative top-1 left-[3px]">
          <div className="h-1 w-[3px] bg-variable-collection-primary-jithbo-green" />
          <div className="h-[7px] w-[3px] bg-variable-collection-primary-jithbo-green" />
          <div className="h-2.5 w-[3px] bg-variable-collection-primary-jithbo-green" />
          <div className="h-[13px] w-[3px] bg-variable-collection-primary-jithbo-green" />
        </div>
      </div>
      <span className="font-normal text-[#494949] text-xs leading-5 whitespace-nowrap">
        Advanced
      </span>
    </div>
  );

  return (
    <section className="w-full gap-2.5 p-10 bg-variable-collection-main-BG-solid-white flex flex-col">
      <div className=" w-[1440px] mx-auto px-10">
        <div className="gap-3 w-full flex flex-col">
          <header className="flex items-center justify-between py-3">
            <h2 className="font-s-bold text-[#261b36] text-2xl leading-8">
              Other events you may like
            </h2>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 bg-variable-collection-BG-2-light-yellow rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 bg-variable-collection-BG-2-light-yellow rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </header>

          <div className="flex items-center gap-4 w-full">
            {events.map((event, index) => (
              <div key={index} className="w-full  rounded-[30px] border border-neutral-200 flex flex-col overflow-hidden">
                {/* Image Section */}
                <div className="relative w-full h-[116px]">
                  <img
                    src={event.image}
                    alt="Event Image"
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 bg-white flex flex-col gap-2 ">
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
                      {/* Signal Bars (Fixed Width Issue) */}
                      <div className="flex items-end gap-[1px]">
                        <div className="w-1 h-1 bg-[#63cfa0]" />
                        <div className="w-1 h-2 bg-[#63cfa0]" />
                        <div className="w-1 h-3 bg-[#63cfa0]" />
                        <div className="w-1 h-4 bg-[#63cfa0]" />
                      </div>
                      <span className="text-[#494949] text-xs font-normal   leading-tight">Advanced</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-medium font-s-medium text-[#34735f]">
                      {event.title}
                    </h2>
                    <div className="flex items-center gap-1 text-sm text-neutral-900">
                      <span>{event.date}</span>
                      <span className="size-[2.50px] bg-neutral-900 rounded-full" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-[8.65] text-sm text-neutral-900">
                      <img src={icons.location.src} className="" />
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

    </section>
  );
}
