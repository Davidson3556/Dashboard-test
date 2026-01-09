"use client";

import { CardContent, CardHeader } from "@/components/ui/card";

interface RatingCircleProps {
  value: number;
  label: string;
  fillColor: string;
  arcColor: string;
  size: number;
  arcStartAngle?: number;
  arcEndAngle?: number;
  opacity?: number;
  style?: React.CSSProperties;
  valueSize?: number;
  labelSize?: number;
}

function RatingCircle({
  value,
  label,
  fillColor,
  arcColor,
  size,
  arcStartAngle = -45,
  arcEndAngle = 180,
  opacity = 1,
  style = {},
  valueSize = 18,
  labelSize = 11,
}: RatingCircleProps) {
  const strokeWidth = 2;
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const angleDiff = arcEndAngle - arcStartAngle;
  const arcLength = (angleDiff / 360) * circumference;

  return (
    <div 
      className="absolute" 
      style={{ 
        width: size, 
        height: size, 
        opacity,
        ...style 
      }}
    >
      {/* Outer arc/border */}
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
        style={{ transform: `rotate(${arcStartAngle}deg)` }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={arcColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Inner filled circle */}
      <div
        className="absolute rounded-full flex flex-col items-center justify-center"
        style={{
          width: size - 12,
          height: size - 12,
          backgroundColor: fillColor,
          top: 6,
          left: 6,
        }}
      >
        <span 
          className="font-normal text-white"
          style={{ fontSize: valueSize, letterSpacing: '0.5px' }}
        >
          {value}%
        </span>
        <span 
          className="font-normal text-white/80"
          style={{ fontSize: labelSize, letterSpacing: '0.32px' }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export function RatingCard() {
  return (
    <div>
      <CardHeader className="pb-2">
        <p className="text-[14px] font-normal tracking-[0.5px] text-[#000000]">Your Rating</p>
        <p className="text-[12px] font-normal tracking-[0.5px] text-[#000000]/50">Lorem ipsum dolor sit amet, consectetur</p>
      </CardHeader>
      <CardContent className="pt-2">
        <div style={{ position: 'relative', width: 260, height: 180 }}>
          <RatingCircle
            value={85}
            label="Food Taste"
            fillColor="#F99C30"
            arcColor="#FBBD6E"
            size={145}
            arcStartAngle={-90}
            arcEndAngle={135}
            opacity={0.9}
            style={{ top: 18, left: 100, zIndex: 10 }}
            valueSize={34}
            labelSize={13}
          />
            <RatingCircle
            value={85}
            label="Hygiene"
            fillColor="#6463D6"
            arcColor="#8B8AE5"
            size={100}
            arcStartAngle={-90}
            arcEndAngle={135}
            opacity={0.9}
            style={{ top: 0, left: 30, zIndex: 20 }}
            valueSize={21}
            labelSize={12}
          />
            <RatingCircle
            value={92}
            label="Packaging"
            fillColor="#2FBFDE"
            arcColor="#5DD4ED"
            size={122}
            arcStartAngle={-90}
            arcEndAngle={135}
            opacity={0.9}
            style={{ top: 105, left: 0, zIndex: 30 }}
            valueSize={24}
            labelSize={12}
          />
        </div>
      </CardContent>
    </div>
  );
}
