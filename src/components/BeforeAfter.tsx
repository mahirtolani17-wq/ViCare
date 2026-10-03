import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { galleryCases, GalleryCase } from "../data/gallery";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sticker from "./Sticker";
import { CurlyArrow, MarginNote } from "./HandDrawn";

export default function BeforeAfter() {
  return (
    <section
      className="relative w-full bg-[#1F1511] text-[#F6EFE6] py-24 md:py-32 overflow-hidden border-t border-b border-[#C08B6B]/15"
      id="gallery"
    >
      {/* Soft ambient copper aura */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C08B6B]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/20 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      {/* Floating Rotating Stamp Sticker */}
      <div className="absolute top-16 right-8 md:right-20 hidden sm:block pointer-events-auto z-20">
        <Sticker type="stamp-motto" initialRotate={-5} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Title Block */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
            CLINICAL PROOF · ZERO FILTERS
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#F6EFE6] tracking-[0.08em] uppercase font-normal mt-2">
            Real Patients, Real Light
          </h2>
          <p className="mt-3 font-editorial text-base sm:text-xl text-[#E8D9C6]/90 tracking-normal font-normal max-w-lg mx-auto">
            Medical lighting, standardized angles, no beauty mode. Drag the slider to compare.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <MarginNote text="real photos, real patients" rotate={-3} />
            <CurlyArrow direction="down-right" label="swipe, it's worth it" />
          </div>
        </div>

        {/* COMPARISON CARDS DISPLAY GRID (deckled cards on table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {galleryCases.map((caseItem, idx) => {
            const cardRotate = idx === 0 ? -1 : idx === 2 ? 1 : 0;

            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ transform: `rotate(${cardRotate}deg)` }}
                className="flex flex-col bg-[#2A1D17]/80 p-5 rounded-3xl border border-[#C08B6B]/25 hover:border-[#C08B6B]/60 transition-all shadow-xl hover:shadow-2xl relative deckled-card"
              >
                {/* Washi tape on one corner */}
                <div className="washi-tape absolute -top-3 left-8 w-14 h-4 -rotate-6 z-20 pointer-events-none" />

                {/* Card Title & Tagline */}
                <div className="mb-4 border-b border-[#C08B6B]/15 pb-3">
                  <h3 className="font-display text-xl tracking-[0.08em] text-[#F6EFE6] uppercase font-normal">
                    {caseItem.title}
                  </h3>
                  <p className="font-editorial text-xs tracking-normal text-[#C08B6B] font-normal mt-1">
                    {caseItem.tagline}
                  </p>
                </div>

                {/* Interactive Drag Slider Stage */}
                <ComparisonSlider caseItem={caseItem} />

                {/* Patient Note Footer */}
                <div className="mt-3 flex justify-between items-center text-[9px] font-sans tracking-wider text-[#B9A58E] uppercase">
                  <span>VICARE AESTHETIQUE</span>
                  <span>REFINE · EMPOWER</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Warning Label */}
        <div className="mt-16 text-center">
          <p className="text-xs font-sans text-[#B9A58E] tracking-wider leading-relaxed">
            * Individual anatomy varies. All therapies require an initial clinical assessment.
            <br />
            <span className="text-[#C08B6B] font-medium">Photographs shared with patient consent. Never filtered.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ caseItem }: { caseItem: GalleryCase }) {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isJawline = caseItem.id === "case-perfect-jawline";
  const imageFitClass = isJawline
    ? "w-full h-full object-contain p-2 transition-transform duration-300"
    : "w-full h-full object-cover object-center";

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;
      handleMove(e.touches[0].clientX);
    };

    const stopDrag = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#C08B6B]/20 bg-[#1F1511] select-none cursor-ew-resize shadow-2xl"
      onMouseDown={(e) => {
        e.preventDefault();
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX);
        }
      }}
    >
      {/* AFTER LAYER (Underneath - Background) */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ background: caseItem.afterGradient }}
      >
        {caseItem.afterImage ? (
          <img
            src={caseItem.afterImage}
            alt={`${caseItem.title} - After treatment`}
            className={imageFitClass}
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-radial-mesh opacity-25" />
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-[#2A1D17]/10" fill="currentColor">
              <path d="M20,60 C50,20 80,35 100,35 C120,35 150,20 180,60 C150,85 120,80 100,80 C80,80 50,85 20,60 Z" fill="#C08B6B" opacity="0.3" />
            </svg>
          </>
        )}

        {/* Small Cream Label BOX for 'AFTER' */}
        <div className="absolute right-4 top-4 bg-[#F6EFE6] text-[#2A1D17] text-[10px] font-sans font-bold tracking-[0.2em] px-2 py-1 rounded shadow-md z-10">
          {caseItem.afterLabel}
        </div>
      </div>

      {/* BEFORE LAYER (On top - Clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          background: caseItem.beforeGradient,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
        }}
      >
        {caseItem.beforeImage ? (
          <img
            src={caseItem.beforeImage}
            alt={`${caseItem.title} - Before treatment`}
            className={imageFitClass}
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-radial-mesh opacity-20" />
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 text-[#2A1D17]/10" fill="currentColor">
              <path d="M30,60 C55,35 80,45 100,45 C120,45 145,35 170,60 C145,75 120,70 100,70 C80,70 55,75 30,60 Z" fill="#B9A58E" opacity="0.35" />
            </svg>
          </>
        )}

        {/* Small Cream Label BOX for 'BEFORE' */}
        <div className="absolute left-4 top-4 bg-[#F6EFE6] text-[#2A1D17] text-[10px] font-sans font-bold tracking-[0.2em] px-2 py-1 rounded shadow-md z-10">
          {caseItem.beforeLabel}
        </div>
      </div>

      {/* ANNOTATIONS (Conditionally visible based on slider) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {caseItem.annotations.map((annot, i) => {
          const isBefore = annot.side === "before";
          const visible = isBefore ? sliderPos > 25 : sliderPos < 75;

          return (
            <div
              key={i}
              className={`absolute transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
              style={{
                top: annot.positionY,
                left: annot.positionX,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1F1511]/85 backdrop-blur-md border border-[#C08B6B]/40 text-[#F6EFE6] shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                <span className="text-[9px] font-sans font-medium tracking-wide">
                  {annot.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* DRAGGABLE DIVIDER LINE & GRIPPER */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-[2px] h-full bg-[#F6EFE6] shadow-[0_0_10px_rgba(0,0,0,0.5)] -ml-[1px]" />
        
        {/* Copper Grip Knob */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F6EFE6] border-2 border-[#C08B6B] flex items-center justify-center text-[#2A1D17] shadow-xl pointer-events-auto">
          <ChevronLeft size={12} className="-mr-1 text-[#2A1D17]" />
          <ChevronRight size={12} className="text-[#2A1D17]" />
        </div>
      </div>
    </div>
  );
}
