"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { StickyBannerDemo } from "@/components/sections/sticky-banner";
import { ColourfulTextDemo } from "@/components/sections/colourful-text";
import { WobbleCardDemo } from "@/components/sections/wobble-card";
import { AnimatedTooltipPreview } from "@/components/sections/animated-tooltip";
import { HeroScrollDemo } from "@/components/sections/container-scroll-animation";
import { TextRevealCardPreview } from "@/components/sections/text-reveal-card";
import { AnimatedPinDemo } from "@/components/sections/3d-pin";

export default function Home() {
  return (
    <main>
      <StickyBannerDemo />
      <AuroraBackground className="justify-start">
        <NavbarDemo />
        <ColourfulTextDemo />
        <div className="my-20">
          <WobbleCardDemo />
        </div>
        <AnimatedTooltipPreview />
        <div>
          <HeroScrollDemo />
        </div>
        <TextRevealCardPreview />
        <AnimatedPinDemo />
        <footer className="bg-black-800 p-30" />
        <BackgroundBeams />
      </AuroraBackground>
    </main>
   );
}