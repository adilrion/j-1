import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  MapPin,
} from "lucide-react";
import React from "react";

export default function EventInfoSection() {
  // Event data for mapping
  const events = [
    {
      id: 1,
      title: "Legends Rise on the Field",
      image: "/date-drop-down-box.png",
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
      image: "/date-drop-down-box-2.png",
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
      image: "/date-drop-down-box-3.png",
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
      <div className="gap-3 w-full flex flex-col">
        <header className="flex items-center justify-between py-3">
          <h2 className="font-bold text-[#261b36] text-2xl leading-8">
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
          {events.map((event) => (
            <Card
              key={event.id}
              className="flex-1 rounded-[30px] overflow-hidden border-[1.25px] border-variable-collection-deep-light-gray-stroke"
            >
              <div
                className="w-full h-[116px] bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              <CardContent className="flex flex-col h-[218px] gap-1 p-4 bg-white">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1">
                    <Badge className="px-2.5 py-2 bg-[#d9f2e6] text-[#494949] rounded-3xl font-normal text-xs">
                      {event.tags[0]}
                    </Badge>
                    <Badge className="px-2.5 py-2 bg-[#efedff] text-[#494949] rounded-3xl font-normal text-xs">
                      {event.tags[1]}
                    </Badge>
                  </div>

                  <SkillLevelIndicator />
                </div>

                <div className="flex flex-col justify-between flex-1 w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="font-medium text-variable-collection-secondary-pure-green text-2xl leading-normal overflow-hidden text-ellipsis line-clamp-1">
                      {event.title}
                    </h3>

                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-[5px] w-full">
                        <div className="flex items-center gap-2.5">
                          <span className="font-normal text-neutral-900 text-sm">
                            {event.date}
                          </span>
                          <div className="w-[2.5px] h-[2.5px] bg-neutral-900 rounded-[1.25px]" />
                          <span className="font-normal text-neutral-900 text-sm">
                            {event.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-[5px] w-full">
                        <MapPin className="w-[17.5px] h-[17.5px]" />
                        <span className="font-normal text-neutral-900 text-sm">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-center w-full">
                    <div className="flex items-end justify-between w-full">
                      <span className="font-normal text-neutral-900 text-sm">
                        {event.attending}
                      </span>

                      <div className="flex flex-col items-end justify-center gap-1">
                        <span className="font-normal text-[#aa3333] text-sm">
                          {event.spotsLeft}
                        </span>

                        <div className="flex items-center gap-0.5">
                          <DollarSign className="w-[26px] h-[26px]" />
                          <div className="flex items-center">
                            <div className="font-normal text-2xl">
                              <span className="text-neutral-900">
                                {event.price}
                              </span>
                              <span className="text-[#808080] text-lg">
                                /person
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
