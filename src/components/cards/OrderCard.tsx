"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Image from "next/image";

const data = [
  { day: "01", current: 10, previous: 16 },
  { day: "02", current: 6, previous: 26 },
  { day: "03", current: 20, previous: 10 },
  { day: "04", current: 16, previous: 26 },
  { day: "05", current: 8, previous: 18 },
  { day: "06", current: 30, previous: 23 },
];

export function OrderCard() {
  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <p 
            className="font-normal"
            style={{ fontSize: '14px', lineHeight: '22px', letterSpacing: '0.5px', color: '#000000' }}
          >
            Order
          </p>
          <h3 
            className="font-medium mt-1"
            style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '0.5px', color: '#000000' }}
          >
            2.568
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Image
              src="/icons/Arrow Down.svg"
              alt="Down"
              width={7}
              height={10}
            />
            <span 
              className="font-semibold"
              style={{ fontSize: '12px', lineHeight: '12px', letterSpacing: '0.5px', color: '#F2383A' }}
            >
              2.1%
            </span>
            <span 
              className="font-normal"
              style={{ fontSize: '12px', lineHeight: '12px', letterSpacing: '0.5px', color: '#000000', opacity: 0.5 }}
            >
              vs last week
            </span>
          </div>
          <p 
            className="font-normal mt-2"
            style={{ fontSize: '12px', letterSpacing: '0.5px', color: '#000000', opacity: 0.5 }}
          >
            Sales from 1-8 Dec, 2020
          </p>
        </div>
        <a 
          href="#" 
          className="font-medium hover:opacity-90 transition-opacity"
          style={{ 
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.5px', 
            color: '#5A6ACF',
            backgroundColor: '#FBFCFE',
            border: '0.5px solid #DDE4F0',
            borderRadius: '5px',
            padding: '6px 16px',
            boxShadow: '0px 2px 1px rgba(64, 72, 82, 0.05)'
          }}
        >
          View Report
        </a>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={data} margin={{ left: 10, right: 10 }}>
            <CartesianGrid 
              horizontal={true}
              vertical={false}
              stroke="#E2E7E7"
              strokeWidth={1}
              strokeDasharray="3 6"
            />
            <XAxis
              dataKey="day"
              axisLine={{ stroke: '#E2E7E7', strokeWidth: 1 }}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide domain={[0, 30]} ticks={[0, 10, 20, 30]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="linear"
              dataKey="current"
              stroke="#5A6ACF"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="previous"
              stroke="#E6E8EC"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <div 
              className="rounded-full" 
              style={{ width: 9, height: 9, backgroundColor: '#5A6ACF' }}
            />
            <span 
              className="font-normal"
              style={{ fontSize: '12px', letterSpacing: '0.5px', color: 'rgba(18, 18, 18, 0.7)' }}
            >
              Last 6 days
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="rounded-full" 
              style={{ width: 9, height: 9, backgroundColor: '#D8D9DB' }}
            />
            <span 
              className="font-normal"
              style={{ fontSize: '12px', letterSpacing: '0.5px', color: 'rgba(18, 18, 18, 0.7)' }}
            >
              Last Week
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
