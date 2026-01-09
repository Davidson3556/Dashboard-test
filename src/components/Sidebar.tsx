"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: "/icons/Chart.svg", label: "Dashboard", active: true },
  { icon: "/icons/Buy.svg", label: "Food Order" },
  { icon: "/icons/menu.svg", label: "Manage Menu" },
  { icon: "/icons/review.svg", label: "Customer Review" },
];

const otherItems: MenuItem[] = [
  { icon: "/icons/Setting.svg", label: "Settings" },
  { icon: "/icons/payment.svg", label: "Payment" },
  { icon: "/icons/account.svg", label: "Accounts" },
  { icon: "/icons/help.svg", label: "Help" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "w-[240px] h-screen bg-[#F1F2F7] flex flex-col fixed left-0 top-0 transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:flex",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="pt-5 pl-10 flex items-center justify-between pr-5">
          <Image
            src="/Logo.png"
            alt="GoodFood Logo"
            width={101}
            height={24}
            priority
          />
          {onClose && (
            <button 
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-black/5 rounded-full"
            >
              <X className="w-5 h-5 text-[#273240]" />
            </button>
          )}
        </div>

        <div className="px-5 mt-8">
          <span className="text-[10px] font-medium text-[#082431] uppercase tracking-wider px-3">
            Menu
          </span>
          <nav className="mt-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={cn(
                  "flex items-center gap-3 w-[200px] h-[42px] px-4 rounded-[5px] text-[12px] transition-colors tracking-[0.5px]",
                  item.active
                    ? "bg-[#707FDD]/10 font-medium text-[#5A6ACF]"
                    : "font-normal text-[#273240] hover:bg-[#707FDD]/5"
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={15}
                  height={15}
                />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="px-5 mt-8">
          <span className="text-[10px] font-medium text-[#082431] uppercase tracking-wider px-3">
            Others
          </span>
          <nav className="mt-3 space-y-1">
            {otherItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 w-[200px] h-[42px] px-4 rounded-[5px] text-[12px] font-normal text-[#273240] hover:bg-[#707FDD]/5 transition-colors tracking-[0.5px]"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={15}
                  height={15}
                />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
