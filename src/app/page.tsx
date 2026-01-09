"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { OrderTimeCard } from "@/components/cards/OrderTimeCard";
import { RatingCard } from "@/components/cards/RatingCard";
import { MostOrderedCard } from "@/components/cards/MostOrderedCard";
import { OrderCard } from "@/components/cards/OrderCard";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="ml-0 lg:ml-[240px]">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 lg:p-6">
          <h1 className="text-[18px] font-medium tracking-[0.5px] text-[#1F384C] mb-6">Dashboard</h1>

          <Card className="grid grid-cols-1 lg:grid-cols-3 mb-6">
            <div className="col-span-1 lg:col-span-2">
              <RevenueCard />
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-[#E2E7E7]">
              <OrderTimeCard />
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RatingCard />
            <MostOrderedCard />
            <OrderCard />
          </div>
        </main>
      </div>
    </div>
  );
}
