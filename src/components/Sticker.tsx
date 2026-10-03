import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

export type StickerType =
  | "google-rating"
  | "lip-fillers"
  | "lip-tinting"
  | "drip-sip"
  | "weight-loss"
  | "open-hours"
  | "location"
  | "stamp-motto"
  | "copper-foil"
  | "doctor-ribbon"
  | "call-target"
  | "whatsapp-target"
  | "sparkle-star"
  | "flower"
  | "arch-window"
  | "squiggle";

interface StickerProps {
  type: StickerType;
  initialRotate?: number; // e.g. -6, 4, 8
  className?: string;
  mobileHidden?: boolean; // if true, hidden on small screens so max 2 are visible per mobile screen
  zIndex?: number;
}

export default function Sticker({
  type,
  initialRotate = 3,
  className = "",
  mobileHidden = false,
  zIndex = 20
}: StickerProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isKissed, setIsKissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const handleTap = () => {
    if (type === "lip-fillers" || type === "lip-tinting") {
      setIsKissed(true);
      setTimeout(() => setIsKissed(false), 800);
    }
  };

  const renderStickerContent = () => {
    switch (type) {
      case "google-rating":
        return (
          <div className="w-24 h-24 rounded-full bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] flex flex-col items-center justify-center p-2 text-center shadow-lg relative overflow-hidden select-none">
            {/* Glossy sheen */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/40 rounded-full blur-[1px] pointer-events-none" />
            <div className="flex items-center gap-1 text-[#C08B6B] text-xs font-bold font-sans">
              <span>★</span>
              <span className="text-[#2A1D17] font-display text-sm tracking-wide">4.9</span>
            </div>
            <span className="text-[9px] font-sans font-semibold tracking-wider text-[#2A1D17] uppercase mt-0.5">
              ON GOOGLE
            </span>
            <span className="text-[8px] font-hand font-bold text-[#C08B6B] -mt-0.5">
              37 reviews
            </span>
          </div>
        );

      case "lip-fillers":
        return (
          <div
            onClick={handleTap}
            className="px-4 py-2 rounded-full bg-[#D9A39B] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none relative overflow-hidden cursor-pointer"
          >
            {/* Gloss */}
            <div className="absolute top-0 left-2 w-12 h-2 bg-white/40 rounded-full blur-[0.5px]" />
            <svg viewBox="0 0 40 24" className="w-5 h-3 text-[#2A1D17] fill-current">
              <path d="M4 12 Q 12 3 20 10 Q 28 3 36 12 Q 28 21 20 16 Q 12 21 4 12 Z" />
            </svg>
            <span className="font-hand text-base font-bold tracking-tight text-[#2A1D17]">
              {isKissed ? "mwah! 💋" : "Lip fillers"}
            </span>
          </div>
        );

      case "lip-tinting":
        return (
          <div
            onClick={handleTap}
            className="px-4 py-2 rounded-full bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none cursor-pointer"
          >
            <svg viewBox="0 0 32 18" className="w-5 h-3 text-[#D9A39B] fill-[#D9A39B]">
              <path d="M2 9 C8 2, 14 7, 16 9 C18 7, 24 2, 30 9 C24 16, 18 13, 16 13 C14 13, 8 16, 2 9 Z" />
            </svg>
            <span className="font-hand text-base font-bold tracking-tight text-[#2A1D17]">
              Lip tinting
            </span>
          </div>
        );

      case "drip-sip":
        return (
          <div className="px-3.5 py-2 rounded-2xl bg-[#E8D9C6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none">
            {/* Hand-drawn Drip & Cup */}
            <span className="text-sm">💧☕</span>
            <div className="flex flex-col leading-none">
              <span className="font-hand text-sm font-bold text-[#2A1D17]">Drip & Sip</span>
              <span className="text-[8px] font-sans font-medium uppercase text-[#C08B6B] tracking-wider">wellness bar</span>
            </div>
          </div>
        );

      case "weight-loss":
        return (
          <div className="px-3.5 py-2 rounded-2xl bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none">
            <span className="text-[#C08B6B] font-hand text-lg">♥</span>
            <div className="flex flex-col leading-none">
              <span className="font-hand text-sm font-bold text-[#2A1D17]">Weight loss</span>
              <span className="text-[8px] font-sans tracking-widest text-[#B9A58E] uppercase">Dr-supervised</span>
            </div>
          </div>
        );

      case "open-hours":
        return (
          <div className="px-3.5 py-1.5 rounded-full bg-[#2A1D17] text-[#F6EFE6] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-sans text-[11px] font-medium tracking-wider uppercase text-[#F6EFE6]">
              Open till 8 pm
            </span>
          </div>
        );

      case "location":
        return (
          <div className="px-3.5 py-1.5 rounded-full bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-1.5 select-none">
            <span className="text-[#C08B6B] text-xs">📍</span>
            <span className="font-hand text-sm font-bold text-[#2A1D17]">
              Bhat, Ahmedabad
            </span>
          </div>
        );

      case "stamp-motto":
        return (
          <div className="w-24 h-24 rounded-full border-[4px] border-[#F6EFE6] bg-[#C08B6B] shadow-xl flex items-center justify-center p-1 relative overflow-hidden select-none">
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              className="w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#2A1D17]">
                <path
                  id="textPath-motto"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase">
                  <textPath href="#textPath-motto" startOffset="0%">
                    REFINE • ENHANCE • EMPOWER •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs text-[#F6EFE6] font-display font-normal">V+</span>
            </div>
          </div>
        );

      case "copper-foil":
        return (
          <div className="w-16 h-16 rounded-full border-[4px] border-[#F6EFE6] shadow-xl flex items-center justify-center foil-shine select-none relative overflow-hidden">
            <div className="absolute inset-0 bg-[#C08B6B]/20" />
            <svg
              width="26"
              height="26"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M24 32 L47 72 L70 32"
                stroke="#2A1D17"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M74 54 H90 M82 46 V62"
                stroke="#2A1D17"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );

      case "doctor-ribbon":
        return (
          <div className="px-4 py-2 rounded-xl bg-[#2A1D17] text-[#F6EFE6] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none">
            <span className="text-[#C08B6B] text-xs">✦</span>
            <div className="flex flex-col leading-tight">
              <span className="font-hand text-base font-bold text-[#E8D9C6]">Led by Dr. Juhi Ochwani</span>
              <span className="text-[8px] font-sans tracking-widest text-[#B9A58E] uppercase">MBBS, PGDCC · Aesthetic Physician</span>
            </div>
          </div>
        );

      case "call-target":
        return (
          <a
            href="tel:+919058383905"
            className="px-4 py-2 rounded-full bg-[#F6EFE6] text-[#2A1D17] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none hover:bg-[#E8D9C6] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#C08B6B] cursor-pointer"
            aria-label="Call clinic directly: 090583 83905"
          >
            <span className="text-xs">📞</span>
            <span className="font-hand text-base font-bold text-[#2A1D17]">Call us</span>
          </a>
        );

      case "whatsapp-target":
        return (
          <a
            href="https://wa.me/919058383905?text=Hi%20ViCare,%20I'd%20like%20to%20say%20hi%20and%20ask%20about%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#2A1D17] text-[#F6EFE6] border-[4px] border-[#F6EFE6] shadow-lg flex items-center gap-2 select-none hover:bg-[#3D2B22] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#C08B6B] cursor-pointer"
            aria-label="Say hi on WhatsApp to ViCare"
          >
            <span className="text-xs text-[#C08B6B]">💬</span>
            <span className="font-hand text-base font-bold text-[#F6EFE6]">Say hi on WhatsApp</span>
          </a>
        );

      case "sparkle-star":
        return (
          <div className="w-10 h-10 rounded-full bg-[#F6EFE6] border-[3px] border-[#F6EFE6] shadow-md flex items-center justify-center text-[#C08B6B] select-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        );

      case "flower":
        return (
          <div className="w-11 h-11 rounded-full bg-[#D9A39B] border-[3px] border-[#F6EFE6] shadow-md flex items-center justify-center text-[#F6EFE6] select-none">
            <span className="text-lg">🌸</span>
          </div>
        );

      case "arch-window":
        return (
          <div className="w-10 h-14 rounded-t-full rounded-b-sm bg-[#E8D9C6] border-[3px] border-[#F6EFE6] shadow-md flex items-center justify-center text-[#2A1D17] select-none">
            <div className="w-6 h-10 rounded-t-full border border-[#C08B6B]/40 flex items-center justify-center">
              <span className="text-[8px] font-display text-[#C08B6B]">V</span>
            </div>
          </div>
        );

      case "squiggle":
        return (
          <div className="px-3 py-1 rounded-full bg-[#F6EFE6] border-[3px] border-[#F6EFE6] shadow-md flex items-center justify-center select-none">
            <svg width="34" height="12" viewBox="0 0 40 12" fill="none">
              <path
                d="M2 6 Q 7 1, 12 6 T 22 6 T 32 6 T 38 6"
                stroke="#C08B6B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      drag={!isTouchDevice && !shouldReduceMotion}
      dragElastic={0.25}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
      whileHover={isTouchDevice || shouldReduceMotion ? {} : { scale: 1.08, rotate: initialRotate - 2, y: -4 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      initial={{ rotate: initialRotate }}
      style={{ zIndex, touchAction: isTouchDevice ? "pan-y" : "auto" }}
      className={`inline-block filter drop-shadow-md select-none ${
        isTouchDevice ? "" : "cursor-grab active:cursor-grabbing"
      } ${mobileHidden ? "hidden sm:inline-block" : "inline-block"} ${className}`}
    >
      {renderStickerContent()}
    </motion.div>
  );
}
