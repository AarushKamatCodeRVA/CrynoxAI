"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Spotlight />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
          Your AI Tutor <br /> that does't suck...
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center">
          A clean, modern AI tutor powered by Google's Gemini AI with features you've probably never seen before!
        </p>
      </div>
    </div>
  );
}
