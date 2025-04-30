import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Heart,
  Image as ImageIcon,
  MoreVertical,
  Share,
  Users,
} from "lucide-react";
import React from "react";
import { icons } from "../../../public";

export default function EventDetailsSection() {
  // Event details data
  const eventData = {
    title: "Road to the Football Finals",
    location: "Bashundhara Sports Complex",
    dateTime: "Mar 14 from 7:30 PM - 9:30 PM",
    tags: [
      { name: "Football", bgColor: "bg-[#e6f8f8]" },
      { name: "Relay", bgColor: "bg-variable-collection-swimming" },
      { name: "Female", bgColor: "bg-[#ffe7ef]" },
      { name: "Age: Below 25", bgColor: "bg-[#efedff]" },
    ],
    about:
      "Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own\nmushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get\ninto the nuts and bolts of tomorrow's high-rise buildings.",
    location_details: {
      name: "NDE Field",
      address:
        "Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois",
    },
    highlights: [
      { icon: <Calendar className="w-[18px] h-[18px]" />, text: "Mon, 2 Dec" },
      {
        icon: <Clock className="w-[18px] h-[18px]" />,
        text: "7.30 AM - 8.30 AM",
      },
      {
        icon: <ImageIcon className="w-[18px] h-[18px]" />,
        text: "Arrive 15 min before start",
      },
      {
        icon: <Users className="w-[18px] h-[18px] -rotate-90" />,
        text: "Venue booked",
      },
    ],
    refundPolicy: [
      "Full refund if host cancels the game",
      "Full refund if you cancel 24+ hours in advance",
      "Full refund if game is cancelled due to low attendance",
    ],
    host: {
      name: "Alex Mercer",
      activitiesHosted: 23,
      rating: 4.5,
    },
    booking: {
      spotsLeft: 6,
      price: "320tk /player",
      priceNote: "(both)",
    },
  };

  return (
    <div className="flex flex-col items-start gap-2.5 pt-10 pb-0   relative self-stretch w-full">
      <div className="flex items-start gap-[60px] relative self-stretch w-full">
        <div className="flex flex-col items-start relative flex-1 self-stretch">
          {/* Header Section */}
          <div className="self-stretch pb-14 inline-flex justify-between items-start">
            <div className="size- inline-flex flex-col justify-start items-start gap-3">
              <h1 className="justify-center text-neutral-900 text-5xl font-black font-s-black leading-[64px]">Road to the Football Finals</h1>
              <div className="w-[344px] flex flex-col justify-start items-start gap-4">
                <p className="self-stretch justify-center text-[#494949] text-2xl font-normal font-display leading-snug">Bashundhara Sports Complex</p>
                <p className="self-stretch justify-center text-[#494949] text-2xl font-normal font-['Satoshi-Regular'] leading-snug ">Mar 14 from 7:30 PM - 9:30 PM</p>
              </div>
            </div>
            <div className="size- flex justify-center items-center gap-4">
              <div className="size-[42px] p-2 bg-[#f6f6f6] rounded-full outline-[1.18px] outline-offset-[-1.18px] outline-neutral-200 flex justify-center items-center overflow-hidden">
                <img src={icons.share.src} className="size-[18.20px]  " />
              </div>
              <div className="size-[42px] p-2 bg-[#f6f6f6] rounded-full outline-[1.18px] outline-offset-[-1.18px] outline-neutral-200 flex justify-center items-center overflow-hidden">
                <img src={icons.favorite.src} className="" />
              </div>

              <div className="size-[26px]">
                <img src={icons.three_dots.src} className=" size-[26px]" />
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="w-full h-auto bg-transparent p-0 justify-between border-b-[1.6px] border-variable-collection-deep-light-gray-stroke">
              <TabsTrigger
                value="info"
                className="flex-1 py-8 data-[state=active]:border-b-[1.6px] data-[state=active]:border-variable-collection-secondary-terra-cotta data-[state=active]:text-variable-collection-secondary-terra-cotta data-[state=active]:shadow-none font-medium text-2xl leading-5 font-['Satoshi-Medium',Helvetica]"
              >
                Info
              </TabsTrigger>
              <TabsTrigger
                value="player"
                className="flex-1 py-8 data-[state=active]:shadow-none font-medium text-2xl leading-5 font-['Satoshi-Medium',Helvetica]"
              >
                Player
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="flex-1 py-8 data-[state=active]:shadow-none font-medium text-2xl leading-5 font-['Satoshi-Medium',Helvetica]"
              >
                Comments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-0 p-0">
              {/* Tags Section */}
              <div className="flex flex-wrap items-center gap-[8px_8px] px-0 py-[60px] border-b border-variable-collection-deep-light-gray-stroke">
                <div className="flex flex-wrap items-start gap-[4px_40px] flex-1">
                  <div className="flex flex-wrap items-center gap-[6px_12px] flex-1">
                    {eventData.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`px-6 py-5 ${tag.bgColor} border-none font-normal text-variable-collection-body text-2xl font-['Satoshi-Regular',Helvetica]`}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-3 px-2.5 py-[5px]">
                    <div className="relative w-10 h-10">
                      <div className="inline-flex items-end gap-[0.8px] relative top-2 left-1.5">
                        <div className="relative w-1.5 h-2 bg-variable-collection-primary-jithbo-green" />
                        <div className="relative w-1.5 h-3.5 bg-variable-collection-difficulty-bar-s-default" />
                        <div className="relative w-1.5 h-5 bg-variable-collection-difficulty-bar-s-default" />
                        <div className="relative w-1.5 h-[26px] bg-variable-collection-difficulty-bar-s-default" />
                      </div>
                    </div>
                    <div className="font-normal text-variable-collection-body text-2xl leading-10 mt-[-2px] font-['Satoshi-Regular',Helvetica]">
                      Beginner
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="flex flex-col items-start gap-10 px-0 py-[60px] border-b border-variable-collection-deep-light-gray-stroke">
                <h2 className="self-stretch h-7 mt-[-1px] font-bold text-variable-collection-tertiary-night-black text-[32px] leading-7 font-['Satoshi-Bold',Helvetica]">
                  About this event
                </h2>

                <div className="flex flex-col items-start gap-3 self-stretch w-full">
                  <p className="self-stretch h-[69px] mt-[-1px] font-normal text-variable-collection-tertiary-night-black text-base leading-6 font-['Satoshi-Regular',Helvetica]">
                    {eventData.about}
                  </p>

                  <Button
                    variant="link"
                    className="h-[21px] p-0 font-normal text-variable-collection-primary-blue text-base leading-6 underline font-['Satoshi-Regular',Helvetica]"
                  >
                    Read more
                  </Button>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex flex-col items-start gap-10 px-0 py-[60px] border-b border-variable-collection-deep-light-gray-stroke">
                <h2 className="mt-[-1px] font-bold text-variable-collection-tertiary-night-black text-[32px] leading-7 font-['Satoshi-Bold',Helvetica]">
                  Location
                </h2>

                <div className="flex w-[720px] items-start gap-3">
                  <div className="flex flex-col items-start gap-1 flex-1">
                    <h3 className="mt-[-1px] font-bold text-variable-collection-secondary-gray-blue text-2xl leading-normal font-['Satoshi-Bold',Helvetica]">
                      {eventData.location_details.name}
                    </h3>
                    <p className="self-stretch font-normal text-variable-collection-body text-lg leading-normal font-['Satoshi-Regular',Helvetica]">
                      {eventData.location_details.address}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="px-4 py-[15px] rounded-[99px] border-variable-collection-secondary-gray-blue font-medium text-variable-collection-secondary-gray-blue text-lg font-['Satoshi-Medium',Helvetica]"
                  >
                    Open maps
                  </Button>
                </div>
              </div>

              {/* Good to Know Section */}
              <div className="flex flex-col items-start gap-8 px-0 py-[60px] border-b border-variable-collection-deep-light-gray-stroke">
                <h2 className="mt-[-1px] font-bold text-variable-collection-tertiary-night-black text-[32px] leading-7 font-['Satoshi-Bold',Helvetica]">
                  Good to know
                </h2>

                <div className="flex items-center gap-3 overflow-x-scroll">
                  <Card className="w-[300px] h-[250px] bg-variable-collection-secondary-terra-cotta rounded-2xl border-none">
                    <CardContent className="p-6">
                      <h3 className="self-stretch mt-[-1px] font-bold text-variable-collection-offwhite text-2xl leading-normal font-['Satoshi-Bold',Helvetica] mb-4">
                        Highlights
                      </h3>
                      <div className="flex flex-col items-start gap-[9px]">
                        {eventData.highlights.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 self-stretch w-full"
                          >
                            {item.icon}
                            <span className="font-medium text-variable-collection-offwhite text-lg leading-normal mt-[-1px] font-['Satoshi-Medium',Helvetica]">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="w-[300px] h-[250px] bg-variable-collection-secondary-pure-green rounded-2xl border-none">
                    <CardContent className="p-6">
                      <h3 className="self-stretch mt-[-1px] font-bold text-variable-collection-offwhite text-2xl leading-normal font-['Satoshi-Bold',Helvetica] mb-4">
                        Refund & cancellation policy
                      </h3>
                      <div className="font-medium text-variable-collection-offwhite text-lg leading-normal font-['Satoshi-Medium',Helvetica]">
                        {eventData.refundPolicy.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button
                          variant="link"
                          className="p-0 font-normal text-variable-collection-main-BG-solid-white text-base leading-normal font-['Satoshi-Regular',Helvetica]"
                        >
                          Learn more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hosted By Section */}
              <div className="flex flex-col items-start gap-8 px-0 py-[60px]">
                <h2 className="mt-[-1px] font-bold text-variable-collection-tertiary-night-black text-[32px] leading-7 font-['Satoshi-Bold',Helvetica]">
                  Hosted by
                </h2>

                <Card className="w-[720px] bg-variable-collection-secondary-gray-blue rounded-2xl border-none">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-6">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src="/image-155.png" alt="Alex Mercer" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col w-[141px] items-start gap-1.5">
                        <h3 className="self-stretch mt-[-1px] font-bold text-variable-collection-solid-white text-2xl leading-[22px] font-['Satoshi-Bold',Helvetica]">
                          {eventData.host.name}
                        </h3>

                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-1 self-stretch w-full">
                            <span className="w-6 mt-[-1px] font-medium text-variable-collection-solid-white text-base leading-[22px] font-['Satoshi-Medium',Helvetica]">
                              {eventData.host.activitiesHosted}
                            </span>
                            <span className="mt-[-1px] font-normal text-variable-collection-tertiary-light-gray text-base leading-[22px] font-['Satoshi-Regular',Helvetica]">
                              activities hosted
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="w-6 mt-[-1px] font-medium text-variable-collection-solid-white text-base leading-[22px] font-['Satoshi-Medium',Helvetica]">
                              {eventData.host.rating}
                            </span>
                            <span className="mt-[-1px] font-normal text-variable-collection-tertiary-light-gray text-base leading-[22px] font-['Satoshi-Regular',Helvetica]">
                              host rating
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-[296px] h-[42px] items-center gap-4">
                      <Button className="flex-1 bg-variable-collection-tertiary-light-apricot text-variable-collection-tertiary-night-black rounded-[99px] font-medium text-base leading-[22px] font-['Satoshi-Medium',Helvetica]">
                        Message
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-variable-collection-tertiary-light-apricot text-variable-collection-tertiary-light-apricot rounded-[99px] font-medium text-base leading-[22px] font-['Satoshi-Medium',Helvetica]"
                      >
                        View profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Sidebar */}
        <div className="w-[400px] p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="self-stretch  flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch px-4 py-[18px] bg-white/0 rounded-2xl  outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-between items-center overflow-hidden">
              <div className="flex-1 flex justify-between items-center">
                <div className="text-center justify-start text-[#da6049] text-base font-medium font-s-medium">6 spots left</div>
                <div className="size- flex justify-start items-center gap-1">
                  <div className="justify-start"><span className="text-neutral-900 text-lg font-bold font-s-medium">320tk /player </span><span className="text-[#808080] text-sm font-normal font-s-regular">(both)</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch p-4 bg-[#63cfa0] rounded-[99px] inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-neutral-900 text-lg font-bold font-s-bold tracking-tight">Join event</div>
          </div>
        </div>
      </div>
    </div>
  );
}
