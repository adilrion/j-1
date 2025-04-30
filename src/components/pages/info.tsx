import React from 'react'
import { icons } from '../../../public'

const Info = () => {
  return (
    <><div className=" py-[60px] border-b border-neutral-200  w-full">
      <div className="flex-1 flex justify-between items-center gap-10 flex-wrap ">
        <div className="flex-1 flex justify-start items-center gap-3 flex-wrap content-center">
          <div className="h-[57px] px-6 py-5 bg-[#e6f8f8] rounded-[48px] flex justify-center items-center gap-2">
            <p className="text-center justify-center text-[#494949] text-2xl font-normal  leading-tight">Football</p>
          </div>
          <div className="h-[57px] px-5 py-4 bg-[#e6f8f8] rounded-[48px] flex justify-center items-center gap-2">
            <p className="text-center justify-center text-[#494949] text-2xl font-normal  leading-tight">Relay</p>
          </div>
          <div className="h-[57px] px-5 py-4 bg-[#ffe7ef] rounded-[48px] flex justify-center items-center gap-2">
            <p className="text-center justify-center text-[#494949] text-2xl font-normal ">Female</p>
          </div>
          <div className="h-[57px] px-6 py-5 bg-[#efedff] rounded-[48px] flex justify-center items-center gap-2">
            <p className="text-center justify-center text-[#494949] text-2xl font-normal ">Age: Below 25</p>
          </div>
        </div>
        <div className="size- px-2.5 py-[5px] flex justify-start items-center gap-3">
          <div className="size-10 relative overflow-hidden">
            <div className="size- left-[6px] top-[8px] absolute inline-flex justify-start items-end gap-[0.80px]">
              <div className="w-1.5 h-2 bg-[#63cfa0]" />
              <div className="w-1.5 h-3.5 bg-[#cffce8]" />
              <div className="w-1.5 h-5 bg-[#cffce8]" />
              <div className="w-1.5 h-[26px] bg-[#cffce8]" />
            </div>
          </div>
          <div className="justify-center text-[#494949] text-2xl font-normal  leading-10">Beginner</div>
        </div>
      </div>
    </div>

      {/* About Section */}
      <div className="self-stretch py-[60px] border-b border-neutral-200 inline-flex flex-col justify-start items-start gap-10">
        <h4 className="self-stretch h-7 justify-center text-neutral-900 text-[32px] font-bold font-s-bold leading-7">About this event</h4>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <p className="self-stretch h-[69px] justify-center text-neutral-900 text-base font-normal  leading-normal">Learn about the capital’s first beavers in 400 years from the Ealing Beaver project, make your own<br />mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get<br />into the nuts and bolts of tomorrow’s high-rise buildings.</p>
          <button className=" h-[21px] text-[#0096ed] underline underline-offset-4  text-base font-normal">
            Read more
          </button>
        </div>
      </div>

      {/* Location Section */}
      <div className="self-stretch py-[60px] border-b border-neutral-200 inline-flex flex-col justify-start items-start gap-10 w-full">
        <div className="justify-center text-neutral-900 text-[32px] font-bold font-s-bold leading-7">Location</div>
        <div className="w-[720px] inline-flex justify-start items-start gap-3">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="justify-start text-[#4e566b] text-2xl font-bold font-s-bold">NDE Field</div>
            <div className="self-stretch justify-start text-[#494949] text-lg font-normal ">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</div>
          </div>
          <div className=" flex justify-start items-center gap-1.5">
            <button className=" px-4 w-[126px] h-[43px] py-[15px] rounded-[99px]  outline-1 outline-offset-[-1px] outline-[#4e566b] flex  items-center gap-1 text-center justify-center text-[#4e566b] text-lg font-medium font-s-medium">
              Open maps
            </button>
          </div>
        </div>
      </div>

      {/* Good to Know Section */}
      <div className="self-stretch py-[60px] border-b border-neutral-200 inline-flex flex-col justify-start items-start gap-8 overflow-hidden w-full">
        <div className="justify-start text-neutral-900 text-[32px] font-bold font-s-bold leading-snug">Good to know</div>
        <div className="size- inline-flex justify-start items-center gap-3">
          <div className="w-[300px] h-[250px] pl-6 pr-[34px] py-6 bg-[#da6049] rounded-2xl inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-[#f6f6f6] text-2xl font-bold font-s-bold">Highlights</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-[9px] font-medium font-s-medium">
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="size-[18px]  ">
                  <img src={icons.calender2.src} className="w-full h-full " />
                </div>
                <div className="size- flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#f6f6f6] text-lg ">Mon, 2 Dec</div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="size-[18px]  ">
                  <img src={icons.clock.src} className="w-full h-full " />
                </div>
                <div className="size- flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#f6f6f6] text-lg font-medium  ">7.30 AM - 8.30 AM</div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="size-[18px]  ">
                  <img src={icons.clock.src} className="w-full h-full " />
                </div>
                <div className="size- flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#f6f6f6] text-lg font-medium  ">Arrive 15 min before start</div>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="size-[18px]  ">
                  <img src={icons.venue.src} className="w-full h-full " />
                </div>
                <div className="size- flex justify-center items-center gap-2.5">
                  <div className="justify-start text-[#f6f6f6] text-lg font-medium ">Venue booked</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[250px] pl-6 pr-[34px] py-6 bg-[#34735f] rounded-2xl inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-[#f6f6f6] text-2xl font-bold font-s-bold">Refund & cancellation policy</div>
            <ul className="self-stretch justify-start text-[#f6f6f6] text-lg   font-s-medium list-disc list-inside">

              <li>
                Full refund if host cancels the game
              </li>
              <li>
                Full refund if game is cancelled due to low attendance
              </li>
              <li>
                Full refund if game is cancelled due to low attendance
              </li>
            </ul>
            <div className="self-stretch inline-flex justify-end items-end gap-2.5">
              <div className="justify-start text-white text-base font-normal  ">Learn more</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hosted By Section */}
      <div className="self-stretch py-[60px] inline-flex flex-col justify-start items-start gap-8">
        <div className="justify-center text-neutral-900 text-[32px] font-bold font-s-bold leading-7">Hosted by</div>
        <div className="w-[720px] px-6 py-[27px] bg-[#4e566b] rounded-2xl inline-flex justify-between items-center">
          <div className="size- flex justify-start items-center gap-6">
            <div className="size-24 rounded-[99px] overflow-hidden">
              <img className="w-full h-full " src={icons.man.src} />
            </div>
            <div className="w-[141px] inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-white text-2xl font-bold font-s-bold leading-snug">Alex Mercer</div>
              <div className="size- flex flex-col justify-start items-start">
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <div className="w-6 justify-start text-white text-base font-medium font-s-medium leading-snug">23 </div>
                  <div className="justify-start text-[#f6f6f6] text-base font-normal  leading-snug">activities hosted</div>
                </div>
                <div className="size- inline-flex justify-start items-center gap-1">
                  <div className="w-6 justify-start text-white text-base font-medium font-s-medium leading-snug">4.5</div>
                  <div className="justify-start text-[#f6f6f6] text-base font-normal  leading-snug">host rating</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[296px] h-[42px] flex justify-start items-center gap-4">
            <button className="flex-1 px-[27px] py-2.5 bg-[#fde8cd] rounded-[99px] flex justify-center items-center gap-2.5 overflow-hidden text-neutral-900 text-base font-medium h-[42px] font-s-medium">
              Message
            </button>
            <button className="flex-1 px-4 py-2.5 h-[42px] rounded-[99px] outline-1 outline-offset-[-1px] outline-[#fde8cd] flex justify-center items-center gap-2.5 overflow-hidden font-s-medium text-[#fde8cd] text-base font-medium   leading-snug">
              View profile
            </button>
          </div>
        </div>
      </div></>
  )
}

export default Info