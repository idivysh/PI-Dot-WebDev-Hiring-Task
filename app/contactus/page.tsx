"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { SignupFormDemo } from "@/components/sections/form";

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <BackgroundBeams />
      <SignupFormDemo />
    </AuroraBackground>
   );
}