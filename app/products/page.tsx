"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/components/sections/resizable-navbar";
import { BackgroundBeamsWithCollisionDemo } from "@/components/sections/background-beams-with-collision";
import { ThreeDCardDemo } from "@/components/sections/3d-card";
import { TextGenerateEffectDemo } from "@/components/sections/text-generate-effect";

const cardData = [
  {
    title: "Axiom",
    description: "Axiom is a comprehensive suite of tools designed to streamline your workflow and enhance productivity.",
    imageUrl: "/assets/Axiom-icon-white.svg",
    link: "https://axiom.example.com",
  },
  {
    title: "Genesis",
    description: "Genesis is a powerful platform for building and deploying modern web applications with ease.",
    imageUrl: "/assets/Genesis.svg",
    link: "https://genesis.example.com",
  },
  {
    title: "Edusphere",
    description: "Edusphere is an innovative learning management system that empowers educators and engages students.",
    imageUrl: "/assets/Edusphere.svg",
    link: "https://edusphere.example.com",
  },
];

export default function Home() {
  return (
    <AuroraBackground className="justify-start">
      <NavbarDemo />
      <div>
        <BackgroundBeamsWithCollisionDemo />
      </div>
      <BackgroundBeams />
      <TextGenerateEffectDemo />
      <div className="flex flex-row space-x-20">
        {cardData.map((card, index) => (
          <ThreeDCardDemo
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </div>
      <footer className="bg-black-800 p-20" />
    </AuroraBackground>
  );
}