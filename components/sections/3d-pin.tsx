"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="mt-90 h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="M Vamshi Krishna,
               Founder & CEO, PI DOT"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[35rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Message From Our CEO
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              <b>Words from our visionary leader............ </b>I believe the opportunities we get, the lifestyle we live, and the experiences we gather are all limited by the amount of 'luck' we have as individuals. PI DOT brings the cofactor of luck into people's lives, transforming it into an experiential journey.
            </span>
          </div>
          <img
            src="/assets/Vamshi-c.jpg"
            alt="CEO Image"
            className="mt-4 rounded-lg shadow-lg"
          />
        </div>
      </PinContainer>
    </div>
  );
}