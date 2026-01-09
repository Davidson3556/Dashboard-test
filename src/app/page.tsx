import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { OrderTimeCard } from "@/components/cards/OrderTimeCard";
import { RatingCard } from "@/components/cards/RatingCard";
import { MostOrderedCard } from "@/components/cards/MostOrderedCard";
import { OrderCard } from "@/components/cards/OrderCard";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Sidebar />

      <div className="ml-[240px]">
        <TopNav />

        <main className="p-6">
          <h1 className="text-[18px] font-medium tracking-[0.5px] text-[#1F384C] mb-6">Dashboard</h1>

          <Card className="grid grid-cols-3 mb-6">
            <div className="col-span-2">
              <RevenueCard />
            </div>
            <div className="border-l border-[#E2E7E7]">
              <OrderTimeCard />
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            <RatingCard />
            <MostOrderedCard />
            <OrderCard />
          </div>
        </main>
      </div>
    </div>
  );
}
