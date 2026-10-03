import React from "react";
import Sticker from "./Sticker";
import { ArrowLeft } from "lucide-react";

export default function NotFound({ onGoHome }: { onGoHome?: () => void }) {
  const handleHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#2A1D17] text-[#F6EFE6] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none">
      {/* Background radial aura */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#C08B6B]/10 blur-3xl pointer-events-none" />

      {/* Die-cut sticker requested in prompt */}
      <div className="mb-6 relative">
        <div className="px-5 py-3 rounded-2xl bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-2xl rotate-[-4deg] inline-block">
          <span className="font-hand text-2xl font-bold text-[#2A1D17] block">
            Wrong turn. Come back.
          </span>
        </div>
      </div>

      <h1 className="font-display text-7xl md:text-9xl text-[#C08B6B] tracking-[0.15em] mb-2">
        404
      </h1>

      <p className="font-editorial text-xl md:text-2xl text-[#E8D9C6] max-w-md mx-auto mb-8 font-normal">
        Looks like you stepped into an empty treatment room.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={handleHome}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C08B6B] text-[#2A1D17] font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E8D9C6] active:scale-95 transition-all cursor-pointer shadow-xl"
        >
          <ArrowLeft size={14} />
          <span>Back to Clinic</span>
        </button>

        <a
          href="https://wa.me/919058383905"
          className="px-8 py-3.5 rounded-full border border-[#C08B6B]/50 text-[#F6EFE6] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#C08B6B]/20 active:scale-95 transition-all"
        >
          Ask on WhatsApp
        </a>
      </div>

      <div className="mt-12 flex items-center gap-3 text-xs text-[#B9A58E]">
        <Sticker type="sparkle-star" className="scale-75" />
        <span className="font-sans tracking-widest uppercase text-[10px]">
          ViCare Skin Clinic · Bhat, Ahmedabad
        </span>
      </div>
    </div>
  );
}
