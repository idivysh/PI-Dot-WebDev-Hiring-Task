"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Our Comprehensive Solutions`;


export function TextGenerateEffectDemo() {
  return (
    <div className="text-center">
      <TextGenerateEffect words={words} />
      <p className="text-lg text-white mt-4">
        Tailored to meet your unique business challenges and drive sustainable
        growth
      </p>
    </div>
  );
}