"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation1";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ChatBot Assistant
              </span>
            </h1>
          </>
        }
      >
        <iframe
          src="/t2-chatbot/index.html"
          className="mx-auto rounded-2xl h-full w-full"
        />
      </ContainerScroll>
    </div>
  );
}