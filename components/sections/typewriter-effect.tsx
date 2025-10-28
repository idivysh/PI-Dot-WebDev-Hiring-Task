"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "learning",
    },
    {
      text: "experiences",
    },
    {
      text: "with",
    },
    {
      text: "People and AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="mt-30 flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Industry-first global learning curriculum designed with academicians and employers from across the globe and implemented with AI
      </p>
      <div className="mt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          View Programs
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Partner With Us
        </button>
        <div className="mt-50"></div>
      </div>
    </div>
    
  );
}