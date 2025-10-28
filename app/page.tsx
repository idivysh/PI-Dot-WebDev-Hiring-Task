"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { LayoutTextFlipDemo } from "@/components/sections/layout-text-flip";
import { GlobeDemo } from "@/components/sections/globe";
import { TypewriterEffectSmoothDemo } from "@/components/sections/typewriter-effect";
import { FloatingDockDemo } from "@/components/sections/floating-dock";

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <LayoutTextFlipDemo />
      <GlobeDemo />
      <TypewriterEffectSmoothDemo />
      <FloatingDockDemo />
      <BackgroundBeams />
    </AuroraBackground>
   );
}