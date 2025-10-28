"use client";
import React from "react";
import { ColourfulText } from "@/components/ui/colourful-text";
import { motion } from "motion/react";

export function ColourfulTextDemo() {
  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden py-50">
      {/* <motion.img
        src="https://assets.aceternity.com/linear-demo.webp"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      /> */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-sans">
          Empower Elevate
        </h1>
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white relative z-2 font-sans">
          <ColourfulText text="Excelerate." />
        </h1>
        <div className="mt-4">
          <p className="text-white text-center">
            PI DOT is where empowerment meets innovation, and where exceleration (excel + acceleration) shapes the future.
          </p>
          <p className="text-white text-center">
            We're committed to driving people, businesses, and communities beyond conventional boundaries 
          </p>
          <p className="text-white text-center">
            into realms of exceptional potential.
          </p>
        </div>
      </div>
    </div>
    
  );
}