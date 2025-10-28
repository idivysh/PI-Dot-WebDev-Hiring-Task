"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { LayoutTextFlipDemo } from "@/components/sections/layout-text-flip";
import { GlobeDemo } from "@/components/sections/globe";
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect";
import { FloatingDockDemo } from "@/components/sections/floating-dock";
import { HeroScrollDemo } from "@/components/sections/container-scroll-animation1";

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <div >
        <HeroScrollDemo />
      </div>
      <div className="flex flex-row w-full items-center">
        <div className="w-1/2">
          <LayoutTextFlipDemo />
        </div>
        <div className="w-1/2 h-[50rem] pt-20">
          <GlobeDemo />
        </div>
      </div>
      <TypewriterEffectSmoothDemo />
      <FloatingDockDemo />
      <BackgroundBeams />
    </AuroraBackground>
   );
}