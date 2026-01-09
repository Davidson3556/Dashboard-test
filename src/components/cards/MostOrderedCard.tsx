"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const foodItems = [
  {
    name: "Fresh Salad Bowl",
    price: 45000,
    image: "/icons/salad.png",
  },
  {
    name: "Chicken Noodles",
    price: 75000,
    image: "/icons/noodles.png",
  },
  {
    name: "Smoothie Fruits",
    price: 45000,
    image: "/icons/fruit.png",
  },
  {
    name: "Hot Chicken Wings",
    price: 45000,
    image: "/icons/wings.png",
  },
];

export function MostOrderedCard() {
  return (
    <Card className="shadow-sm border-gray-100">
      <CardHeader className="pb-2">
        <p className="text-[14px] font-normal tracking-[0.5px] text-[#000000]">Most Ordered Food</p>
        <p className="text-[12px] font-normal tracking-[0.5px] text-[#000000]/50">Adipiscing elit, sed do eiusmod tempor</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {foodItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span 
                  className="font-normal"
                  style={{ 
                    fontSize: '12px', 
                    lineHeight: '20px', 
                    letterSpacing: '0.5px',
                    color: '#273240'
                  }}
                >
                  {item.name}
                </span>
              </div>
              <span 
                className="font-normal"
                style={{ 
                  fontSize: '12px', 
                  lineHeight: '20px', 
                  letterSpacing: '0.5px',
                  color: 'rgba(39, 50, 64, 0.7)'
                }}
              >
                IDR {item.price.toLocaleString().replace(/,/g, '.')}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
