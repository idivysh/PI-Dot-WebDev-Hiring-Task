"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { MovingBorderDemo } from "./moving-border";


const content = [
  {
    title: "Edusphere",
    description:
      "Revolutionizing children’s learning through global experiential experiences with people and AI.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
        src="/assets/Edusphere-icon-black.svg"
        alt="logo"
        width={200}
        height={200}
        className="filter invert"
        />
      </div>
    ),
  },
  {
    title: "Genesis",
    description:
      "Bridging the gap between academia and industry with corporate-led training programs.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
        src="/assets/Genesis-icon-black.svg"
        alt="logo"
        width={200}
        height={200}
        className="filter invert"
        />
      </div>
    ),
  },

  {
    title: "AXIOM Creative Studio",
    description:(
      <>
      Your full-service creative outsourcing studio, purpose-built to excelerate growth and scale.
      <div className="mt-20">
        <MovingBorderDemo />
      </div>
      </>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
        src="/assets/Axiom-icon-black.svg"
        alt="logo"
        width={200}
        height={200}
        className="filter invert"
        />
        
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}