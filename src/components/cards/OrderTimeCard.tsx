"use client";

import { useState } from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, PieSectorDataItem } from "recharts";

const legendData = [
  { name: "Afternoon", value: 40, orders: 1890, timeRange: "1pm - 4pm", color: "#5A6ACF" },
  { name: "Evening", value: 32, orders: 1512, timeRange: "5pm - 9pm", color: "#8593ED" },
  { name: "Morning", value: 28, orders: 1323, timeRange: "6am - 12pm", color: "#C7CEFF" },
];

const chartData = [
  { name: "Evening", value: 32, orders: 1512, timeRange: "5pm - 9pm", color: "#8593ED" },
  { name: "Morning", value: 28, orders: 1323, timeRange: "6am - 12pm", color: "#C7CEFF" },
  { name: "Afternoon", value: 40, orders: 1890, timeRange: "1pm - 4pm", color: "#5A6ACF" },
];

const renderActiveShape = (props: PieSectorDataItem) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 4}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

export function OrderTimeCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeData = activeIndex !== null ? chartData[activeIndex] : null;

  return (
    <>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <p className="text-[14px] font-normal tracking-[0.5px] text-[#000000]">Order Time</p>
          <p className="text-[13px] font-normal tracking-[0.5px] text-[#000000]/50 mt-1">From 1-6 Dec, 2020</p>
        </div>
        <a 
          href="#" 
          className="inline-flex items-center justify-center w-[109px] h-[32px] text-[12px] font-medium tracking-[0.5px] text-[#5A6ACF] bg-[#FBFCFE] border-[0.5px] border-[#DDE4F0] rounded-[5px] shadow-[0_2px_1px_rgba(64,72,82,0.05)] hover:bg-[#F5F6FA] transition-colors"
        >
          View Report
        </a>
      </CardHeader>
      <CardContent className="pt-8 flex flex-col items-center">
        <div className="flex flex-col items-center gap-8">
          <div className="relative flex items-center">
            <ResponsiveContainer width={124} height={124}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={38}
                  outerRadius={62}
                  startAngle={310}
                  endAngle={-270}
                  paddingAngle={0}
                  dataKey="value"
                  strokeWidth={0}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...({ activeIndex: activeIndex !== null ? activeIndex : undefined } as any)}
                  activeShape={renderActiveShape}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {activeData && (
              <div 
                className="absolute left-[110px] w-[140px] h-[109px] bg-[#37375C] rounded-lg flex flex-col items-center justify-center text-center z-10"
              >
                <p className="text-[12px] font-medium tracking-[0.3px] text-white">{activeData.name}</p>
                <p className="text-[12px] font-normal tracking-[0.3px] text-white/50">{activeData.timeRange}</p>
                <p className="text-[16px] font-semibold text-white mt-1">{activeData.orders.toLocaleString()} orders</p>
              </div>
            )}
          </div>
          
          <div className="flex items-start gap-6 pt-6">
            {legendData.map((item) => (
              <div key={item.name} className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <div
                    className="w-[9px] h-[9px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[12px] font-normal tracking-[0.5px] text-[#121212]/70">{item.name}</span>
                </div>
                <span className="text-[12px] font-normal tracking-[0.5px] text-[#121212]/70 ml-[17px]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </>
  );
}
