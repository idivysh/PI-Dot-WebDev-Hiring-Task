"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[0rem] rounded-2xl w-full">
      <TextRevealCard
        text="You lead with clarity."
        revealText="I move with creativity. "
      >
        <TextRevealCardTitle>
          At PI DOT, we've assembled a diverse team of innovators, educators, and technologists who share a common vision of transforming India's knowledge landscape. Our team combines deep industry expertise with fresh perspectives to create solutions that truly make a difference.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Collaboration is at our core - we believe that the best ideas emerge when passionate people work together towards a shared goal.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}