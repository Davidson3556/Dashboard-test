"use client";

import { CardContent, CardHeader } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Image from "next/image";

const data = [
  { day: "01", current: 90, previous: 50 },
  { day: "02", current: 70, previous: 90 },
  { day: "03", current: 80, previous: 40 },
  { day: "04", current: 60, previous: 80 },
  { day: "05", current: 100, previous: 80 },
  { day: "06", current: 110, previous: 50 },
  { day: "07", current: 90, previous: 50 },
  { day: "08", current: 70, previous: 90 },
  { day: "09", current: 80, previous: 40 },
  { day: "10", current: 60, previous: 80 },
  { day: "11", current: 100, previous: 70 },
  { day: "12", current: 110, previous: 50 },
];

export function RevenueCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <p className="text-[14px] font-normal tracking-[0.5px] text-[#000000]">Revenue</p>
          <h3 className="text-[20px] font-medium tracking-[0.5px] text-[#000000] mt-1">
            IDR 7.852.000
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Image src="/icons/Arrow Up.svg" alt="Up" width={7} height={10} />
            <span className="text-[12px] font-semibold tracking-[0.5px] text-[#32D16D]">2.1%</span>
            <span className="text-[12px] font-normal tracking-[0.5px] text-[#000000]">vs last week</span>
          </div>
          <p className="text-[13px] font-normal tracking-[0.5px] text-[#000000]/50 mt-2">Sales from 1-12 Dec, 2020</p>
        </div>
        <a 
          href="#" 
          className="inline-flex items-center justify-center w-[109px] h-[32px] text-[12px] font-medium tracking-[0.5px] text-[#5A6ACF] bg-[#FBFCFE] border-[0.5px] border-[#DDE4F0] rounded-[5px] shadow-[0_2px_1px_rgba(64,72,82,0.05)] hover:bg-[#F5F6FA] transition-colors"
        >
          View Report
        </a>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} barGap={6} barCategoryGap="20%">
            <XAxis
              dataKey="day"
              axisLine={{ stroke: "#E2E7E7", strokeWidth: 1 }}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis hide domain={[0, 120]} ticks={[40, 80, 120]} />
            <CartesianGrid 
              horizontal={true}
              vertical={false}
              stroke="#E2E7E7"
              strokeDasharray="3 6"
              horizontalPoints={[]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="current" fill="#5A6ACF" radius={0} barSize={8} />
            <Bar dataKey="previous" fill="#E6E8EC" radius={0} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-[9px] h-[9px] rounded-full bg-[#5A6ACF]" />
            <span className="text-[12px] font-normal tracking-[0.5px] text-[#121212]/70">Last 6 days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[9px] h-[9px] rounded-full bg-[#D8D9DB]" />
            <span className="text-[12px] font-normal tracking-[0.5px] text-[#121212]/70">Last Week</span>
          </div>
        </div>
      </CardContent>
    </>
  );
}
