'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { icons } from "../../../public";
import ChatComponent from "./comments";
import Info from "./info";
import Players from "./players";
import Popup from "./popup";

export default function EventDetailsSection() {

  const [open, setOpen] = useState(false);
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
            <TabsList className="flex w-full h-auto p-0 bg-transparent">
              {[
                { id: "info", label: "Info", active: true },
                { id: "player", label: "Player", active: false },
                { id: "comments", label: "Comments", active: false },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`flex-1 py-8 rounded-none  border-b-variable-collection-deep-light-gray-stroke
                     border-[1.6px] data-[state=active]:border-b-variable-collection-secondary-terra-cotta data-[state=active]:shadow-none ${tab.active
                      ? "text-variable-collection-secondary-terra-cotta"
                      : "text-variable-collection-tertiary-night-black"
                    } font-s-medium font-medium text-2xl leading-5`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>


            <TabsContent value="info" className="mt-0 p-0">
              {/* Tags Section */}
              <Info />
            </TabsContent>
            <TabsContent value="player" className="mt-0 p-0">
              <Players />
            </TabsContent>
            <TabsContent value="comments" className="mt-0 p-0">
              <ChatComponent />
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Sidebar */}
        <div className="w-[400px] p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="self-stretch  flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch px-4 py-[18px] bg-white/0 rounded-2xl  outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-between items-center overflow-hidden">
              <div className="flex-1 flex justify-between items-center">
                <p className="text-center justify-start text-[#da6049] text-base font-medium font-s-medium">6 spots left</p>
                <div className="size- flex justify-start items-center gap-1">
                  <p className="justify-start"><span className="text-neutral-900 text-lg font-bold font-s-medium">320tk /player </span><span className="text-[#808080] text-sm font-normal font-s-regular">(both)</span></p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="self-stretch p-4 bg-[#63cfa0] rounded-[99px] inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-neutral-900 text-lg font-bold font-s-bold tracking-tight">Join event</div>
          </div>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} />
    </div>
  );
}
