import React from "react";
import { Skiper49 } from "./ui/skiper49";
import Sticker from "./Sticker";
import { MarginNote, CurlyArrow } from "./HandDrawn";

export default function ClinicSpace() {
  return (
    <section
      className="relative w-full bg-[#F6EFE6] text-[#2A1D17] py-24 md:py-32 overflow-hidden border-b border-[#C08B6B]/15"
      id="clinic"
    >
      {/* Decorative center Sparkle with Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/30 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title and Intro */}
        <div className="text-center mb-16 md:mb-20 relative">
          <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
            OUR SACRED SANCTUARY
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#2A1D17] tracking-[0.08em] uppercase font-normal mt-2">
            Inside the Clinic
          </h2>
          <p className="mt-3 font-editorial text-base sm:text-xl text-[#3D2B22]/90 tracking-normal font-normal max-w-lg mx-auto leading-relaxed">
            A quiet space designed for clean medical standards, privacy, and genuine, relaxed comfort.
          </p>

          {/* Margin Note & Arrow */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <MarginNote text="easy ground-floor parking" rotate={2} />
            <CurlyArrow direction="down-left" label="take a virtual tour" />
          </div>
        </div>

        {/* 3D Swiper Coverflow Carousel Component */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-5xl">
            <Skiper49 />
          </div>
        </div>

        {/* Decorative Side Stickers */}
        <div className="absolute bottom-20 left-12 hidden md:block">
          <Sticker type="flower" initialRotate={-7} />
        </div>
        <div className="absolute top-1/4 right-16 hidden lg:block">
          <Sticker type="location" initialRotate={5} />
        </div>

      </div>
    </section>
  );
}
