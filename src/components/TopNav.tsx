"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

interface TopNavProps {
  onMenuClick?: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-[#1F384C]" />
        </button>

        <div className="relative flex-1 lg:flex-none">
          <input
            type="text"
            placeholder="Search"
            className="w-full lg:w-[625px] h-[32px] pl-4 pr-10 bg-[#F6F6FB] rounded-[5px] text-[12px] font-normal tracking-[0.5px] placeholder:text-[#1F384C]/30 text-[#1F384C] outline-none border-none"
          />
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={12}
            height={12}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none">
            <div className="w-[32px] h-[32px] rounded-full bg-[#FFE6CC] flex items-center justify-center shrink-0">
              <Image
                src="/icons/Emoticon.png"
                alt="Avatar"
                width={16}
                height={13}
              />
            </div>
            <span className="text-[12px] font-normal tracking-[0.5px] text-[#1F384C] hidden sm:inline">
              Delicious Burger
            </span>
            <ChevronDown className="w-4 h-4 text-[#1F384C]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative shrink-0">
          <Image
            src="/icons/Notif Icon.svg"
            alt="Notifications"
            width={13}
            height={16}
          />
          <Image
            src="/icons/Notif Sign.svg"
            alt="New notification"
            width={6}
            height={6}
            className="absolute -top-0.5 -right-0.5"
          />
        </div>
      </div>
    </header>
  );
}
