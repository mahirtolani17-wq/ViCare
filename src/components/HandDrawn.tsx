import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Hand-drawn SVG annotations that feel like a designer marked up the page with a copper/sand pen.
 */

// Loose marker underline that draws itself
export function MarkerUnderline({
  color = "#C08B6B",
  className = ""
}: {
  color?: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && (document as any).fonts) {
      (document as any).fonts.ready.then(() => setFontsReady(true));
    } else {
      setFontsReady(true);
    }
  }, []);

  return (
    <svg
      key={fontsReady ? "fonts-loaded" : "fonts-waiting"}
      viewBox="0 0 160 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-3 inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M2 10 C 35 3, 90 12, 158 5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

// Circled word annotation - Perfect percentage-based bounding formula
export function HandCircle({
  children,
  color = "#C08B6B",
  className = ""
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && (document as any).fonts) {
      (document as any).fonts.ready.then(() => setFontsReady(true));
    } else {
      setFontsReady(true);
    }
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        key={fontsReady ? "fonts-ready" : "fonts-pending"}
        viewBox="0 0 110 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute pointer-events-none overflow-visible"
        style={{
          inset: "-14% -10%",
          width: "120%",
          height: "128%"
        }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 12 25 C 10 12, 50 4, 98 12 C 108 20, 104 38, 70 45 C 30 48, 5 38, 8 20 C 10 10, 35 6, 60 7"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </span>
  );
}

// Curly hand-drawn arrow
export function CurlyArrow({
  direction = "down-right",
  label = "",
  className = "",
  color = "#C08B6B"
}: {
  direction?: "down-right" | "down-left" | "right";
  label?: string;
  className?: string;
  color?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`inline-flex items-center gap-2 select-none pointer-events-none ${className}`}>
      {label && (
        <span className="font-hand text-lg md:text-xl text-[#C08B6B] tracking-normal -rotate-3 leading-none">
          {label}
        </span>
      )}
      <svg
        width="44"
        height="32"
        viewBox="0 0 54 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d={
            direction === "down-left"
              ? "M 48 4 C 36 2, 18 10, 14 26 M 14 26 L 8 18 M 14 26 L 22 24"
              : "M 6 4 C 18 2, 36 10, 40 26 M 40 26 L 46 18 M 40 26 L 32 24"
          }
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

// Margin note with tape
export function MarginNote({
  text,
  rotate = -3,
  className = ""
}: {
  text: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-block relative px-3 py-1.5 bg-[#F6EFE6]/90 text-[#2A1D17] border border-[#E8D9C6] rounded-sm shadow-sm select-none ${className}`}
    >
      {/* Washi tape strip at top edge */}
      <div className="washi-tape absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 -rotate-2 pointer-events-none" />
      <span className="font-hand text-base md:text-lg text-[#2A1D17] tracking-tight leading-tight block">
        {text}
      </span>
    </div>
  );
}
