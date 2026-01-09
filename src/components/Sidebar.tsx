"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

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

export function Sidebar() {
  return (
    <aside className="w-[240px] h-screen bg-[#F1F2F7] flex flex-col fixed left-0 top-0">
      <div className="pt-5 pl-10">
        <Image
          src="/Logo.png"
          alt="GoodFood Logo"
          width={101}
          height={24}
          priority
        />
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
  );
}
