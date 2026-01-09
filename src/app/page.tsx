"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { OrderTimeCard } from "@/components/cards/OrderTimeCard";
import { RatingCard } from "@/components/cards/RatingCard";
import { MostOrderedCard } from "@/components/cards/MostOrderedCard";
import { OrderCard } from "@/components/cards/OrderCard";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="animate-pulse">
          <Image
            src="/Logo.png"
            alt="GoodFood Logo"
            width={120}
            height={48}
            className="w-auto h-auto"
          />
        </div>
        <div className="mt-8 flex space-x-2">
          <div className="w-2.5 h-2.5 bg-[#5A6ACF] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2.5 h-2.5 bg-[#5A6ACF] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2.5 h-2.5 bg-[#5A6ACF] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF] animate-[fadeIn_0.5s_ease-in]">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="ml-0 lg:ml-[240px]">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 lg:p-6">
          <h1 className="text-[18px] font-medium tracking-[0.5px] text-[#1F384C] mb-6">Dashboard</h1>

          <div className="flex flex-col lg:flex-row mb-6">
            <div className="flex-1 lg:flex-[2] pt-6">
              <RevenueCard />

            </div>
            <div className="flex-1 pt-6">
              <OrderTimeCard />
            </div>
          </div>

          <Separator className="bg-[#C8CBD9]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <RatingCard />
            </div>
            
            <div className="relative flex">
              <Separator orientation="vertical" className="hidden md:block bg-[#C8CBD9]" />
              <div className="flex-1 border-t md:border-t-0 border-[#C8CBD9] pt-6">
                <MostOrderedCard />
              </div>
            </div>

            <div className="relative flex md:col-span-2 lg:col-span-1">
              <Separator orientation="vertical" className="hidden lg:block bg-[#C8CBD9]" />
              <div className="flex-1 border-t lg:border-t-0 border-[#C8CBD9] pt-6">
                <OrderCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
