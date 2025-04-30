"use client"

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { icons } from "../../../public";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const Navbar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Search query:", e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 bg-[#FFFFFF]">
      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-[40px]">
        {/* Logo */}
        <div className="flex items-center w-full sm:w-full md:w-auto justify-between md:justify-start">
          <img className="w-[26px] h-[34px]" alt="Logo" src={icons.logo.src} />
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-[22px] h-[22px] text-[#6a6a6a]" />
            ) : (
              <MenuIcon className="w-[22px] h-[22px] text-[#6a6a6a]" />
            )}
          </button>
        </div>

        {/* Mobile Menu (shown when toggled) */}
        <div
          className={cn(
            "w-full md:hidden flex flex-col gap-2 mt-4",
            isMobileMenuOpen ? "flex" : "hidden"
          )}
        >
          {/* Date Picker */}
          <div className="flex flex-col w-full h-[52px] items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className="flex items-center justify-between pl-4 pr-2 py-2 flex-1 self-stretch w-full bg-white rounded-[99px] border border-solid border-[#E5E5E5] shadow-[0px_3px_8px_#0000001a] cursor-pointer"
                >
                  <span
                    className={cn(
                      "font-normal text-sm",
                      date ? "text-[#2A2A2A]" : "text-[#6A6A6A]"
                    )}
                  >
                    {date ? format(date, "PPP") : "Select date"}
                  </span>
                  <div className="flex justify-center items-center size-[35.4px] bg-[#63CFA0] rounded-[89.1px]">
                    <img
                      src={icons.calender.src}
                      className="w-[15px] h-[15px] text-white"
                      alt="Calendar"
                    />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Field */}
          <div className="flex w-full h-[52px] items-center justify-between pl-4 pr-2 py-2 bg-white rounded-[99px] border border-solid border-[#E5E5E5] shadow-[0px_3px_8px_#0000001a]">
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent text-[#2A2A2A] text-sm focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none placeholder:text-[#6A6A6A]"
            />
            <div>
              <div className="flex items-center justify-center w-[35.4px] h-[35.4px] p-[7.2px] bg-[#F0F0F0] rounded-[89.1px]">
                <img
                  src={icons.search.src}
                  className="w-[15.75px] h-[15.75px] text-[#6a6a6a]"
                  alt="Search"
                />
              </div>
            </div>
          </div>

          {/* Leaderboard Button */}
          <Button
            variant="ghost"
            className="flex items-center gap-[5px] px-[16px] py-[14px] bg-[#F4F5EF] rounded-[99px] hover:bg-[#F4F5EF]/90"
          >
            <img src={icons.medal.src} className="w-[13px] h-[18px] text-[#2A9D8F]" alt="Medal" />
            <span className="font-medium text-variable-collection-secondary-pure-green text-base">
              Leaderboard
            </span>
          </Button>

          {/* Login/Signup Button */}
          <Button
            variant="outline"
            className="flex items-center gap-[5px] px-[16px] py-[14px] bg-transparent rounded-[99px] border-variable-collection-secondary-pure-green text-variable-collection-secondary-pure-green text-base hover:bg-transparent"
          >
            Login / Sign up
          </Button>
        </div>

        {/* Desktop Search and Date Selection */}
        <div className="hidden md:flex items-center gap-2">
          {/* Date Picker */}
          <div className="flex flex-col w-[200px] md:w-[220px] lg:w-[260px] h-[52px] items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <div
                  className="flex items-center justify-between pl-4 pr-2 py-2 flex-1 self-stretch w-full bg-white rounded-[99px] border border-solid border-[#E5E5E5] shadow-[0px_3px_8px_#0000001a] cursor-pointer"
                >
                  <span
                    className={cn(
                      "font-normal text-sm",
                      date ? "text-[#2A2A2A]" : "text-[#6A6A6A]"
                    )}
                  >
                    {date ? format(date, "PPP") : "Select date"}
                  </span>
                  <div className="flex justify-center items-center size-[35.4px] bg-[#63CFA0] rounded-[89.1px]">
                    <img
                      src={icons.calender.src}
                      className="w-[15px] h-[15px] text-white"
                      alt="Calendar"
                    />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Field */}
          <div className="flex w-[200px] md:w-[220px] lg:w-[260px] h-[52px] items-center justify-between pl-4 pr-2 py-2 bg-white rounded-[99px] border border-solid border-[#E5E5E5] shadow-[0px_3px_8px_#0000001a]">
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent text-[#2A2A2A] text-sm focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none placeholder:text-[#6A6A6A]"
            />
            <div>
              <div className="flex items-center justify-center w-[35.4px] h-[35.4px] p-[7.2px] bg-[#F0F0F0] rounded-[89.1px]">
                <img
                  src={icons.search.src}
                  className="w-[15.75px] h-[15.75px] text-[#6a6a6a]"
                  alt="Search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {/* Leaderboard Button */}
          <Button
            variant="ghost"
            className="flex items-center gap-[5px] px-[16px] h-[50px] py-[14px] bg-[#F4F5EF] rounded-[99px] hover:bg-[#F4F5EF]/90"
          >
            <img src={icons.medal.src} className="w-[13px] h-[18px] text-[#2A9D8F]" alt="Medal" />
            <span className="font-medium text-variable-collection-secondary-pure-green text-base">
              Leaderboard
            </span>
          </Button>

          {/* Login/Signup Button */}
          <Button
            variant="outline"
            className="flex items-center gap-[5px] px-[16px] h-[48px] py-[14px] bg-transparent rounded-[99px] border-variable-collection-secondary-pure-green text-variable-collection-secondary-pure-green text-base hover:bg-transparent"
          >
            Login / Sign up
          </Button>

          {/* User Menu */}
          <div className="flex items-center gap-2.5 h-[49px] pl-2.5 pr-2 py-1.5 bg-white rounded-[99px] border border-solid border-[#E5E5E5]">
            <MenuIcon className="w-[22px] h-[22px] text-[#6a6a6a]" />
            <Avatar className="size-[31px]">
              <AvatarImage src={icons.people.src} className="w-full h-full" />
            </Avatar>
          </div>
        </div>

        {/* Mobile User Menu (always visible) */}
        <div
          className={cn(
            "md:hidden flex items-center gap-2.5 pl-2.5 pr-2 py-1.5 bg-white rounded-[99px] border border-solid border-[#E5E5E5]",
            isMobileMenuOpen ? "hidden" : "flex"
          )}
        >
          <Avatar className="size-[31px]">
            <AvatarImage src={icons.people.src} className="w-full h-full" />
          </Avatar>
        </div>
      </div>
    </header>
  );
};