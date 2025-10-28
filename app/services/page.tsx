"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { StickyScrollRevealDemo } from "@/components/sections/sticky-scroll-reveal";

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <BackgroundBeams />
      <StickyScrollRevealDemo />
    </AuroraBackground>
   );
}