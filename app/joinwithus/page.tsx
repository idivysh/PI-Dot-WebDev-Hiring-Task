"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { LampDemo } from "@/components/sections/lamp";
import { CardHoverEffectDemo } from "@/components/sections/card-hover-effect";
import { LayoutGridDemo } from "@/components/sections/layout-grid";
import { CardStackDemo } from "@/components/sections/card-stack";
import { AnimatedModalDemo } from "@/components/sections/animated-modal";

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <LampDemo /> 
      <CardHoverEffectDemo />
      <div className="w-full max-w-7x1 px-4 py-16 sm:px-6 lg:px-8">
        <LayoutGridDemo />
      </div>
      <CardStackDemo />
      < AnimatedModalDemo />
      <BackgroundBeams />
    </AuroraBackground>
   );
}
