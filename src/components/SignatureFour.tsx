import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Sticker, { StickerType } from "./Sticker";
import { CurlyArrow } from "./HandDrawn";

interface SignatureItem {
  num: string;
  title: string;
  tagline: string;
  description: string;
  whatsappMsg: string;
  imageSrc: string;
  stickerType: StickerType;
  hasArrow?: boolean;
}

export default function SignatureFour() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef
  });

  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const idx = Math.round(scrollLeft / width);
    if (idx >= 0 && idx < 4) {
      setActiveMobileIdx(idx);
    }
  };

  const signatures: SignatureItem[] = [
    {
      num: "01",
      title: "LIP FILLERS",
      tagline: "Lips, but make them yours.",
      description: "Soft, natural volume and quiet hydration. We shape to your natural proportions and never overfill. Subtle, balanced, undetectable.",
      whatsappMsg: "Hi ViCare, I would like to ask Dr. Juhi about lip fillers.",
      imageSrc: "/images/fillers-after.jpg",
      stickerType: "lip-fillers",
      hasArrow: true
    },
    {
      num: "02",
      title: "LIP TINTING",
      tagline: "Wake up with a natural blush.",
      description: "Restores even, healthy rose-peach color to pale or hyperpigmented lips. Fresh, softly blushed, everyday confidence without lip stain.",
      whatsappMsg: "Hi ViCare, I would like to ask about lip tinting.",
      imageSrc: "/images/gallery-photo3.jpg",
      stickerType: "lip-tinting"
    },
    {
      num: "03",
      title: "DRIP & SIP",
      tagline: "Sip something. We'll handle the glow.",
      description: "Physician-compounded intravenous micronutrient and hydration blends. Relax in our quiet clinic lounge while your cells get replenished.",
      whatsappMsg: "Hi ViCare, I would like to book a Drip & Sip lounge session.",
      imageSrc: "/images/clinic-waheguru.jpg",
      stickerType: "drip-sip"
    },
    {
      num: "04",
      title: "WEIGHT LOSS",
      tagline: "Healthy, doctor-guided protocols.",
      description: "No crash diets or internet shortcuts. Comprehensive body composition analysis, metabolic support, and sensible medical supervision.",
      whatsappMsg: "Hi ViCare, I would like to consult on medical weight management.",
      imageSrc: "/images/clinic-reception.jpg",
      stickerType: "weight-loss"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F6EFE6] py-24 md:py-32 overflow-hidden"
      id="signature"
    >
      {/* Decorative center hairline with Sparkle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/30 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      {/* Floating Flower sticker on top edge */}
      <div className="absolute top-12 left-10 hidden sm:block pointer-events-auto">
        <Sticker type="flower" initialRotate={-6} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20 text-center relative">
        <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
          OUR FAVORITE FOUR
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#2A1D17] tracking-[0.08em] uppercase font-normal mt-2">
          Treatments People Re-Book
        </h2>
        <p className="mt-3 font-editorial text-base sm:text-xl text-[#3D2B22]/90 tracking-normal font-normal max-w-lg mx-auto">
          Honest care for lips, skin and wellness under Dr. Juhi Ochwani.
        </p>

        {/* Playful hand-drawn curly arrow */}
        <div className="hidden lg:block absolute -bottom-10 right-28">
          <CurlyArrow direction="down-left" label="this one's our most asked-for" />
        </div>
      </div>

      {/* HORIZONTAL DESKTOP STAGE / NATURAL HORIZONTAL MOBILE ROW */}
      <div className="relative w-full">
        {/* On Desktop: Scroll Driven Pinned Horizontal Move */}
        <div className="hidden lg:block h-[150vh] relative">
          <div className="sticky top-1/4 overflow-hidden w-full">
            <motion.div style={{ x: xTranslation }} className="flex gap-8 px-12 w-[220%]">
              {signatures.map((sig, idx) => (
                <SignatureCard key={sig.num} sig={sig} idx={idx} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile / Tablet: Smooth Horizontal Scroll List with Snap */}
        <div
          onScroll={handleMobileScroll}
          className="lg:hidden flex overflow-x-auto gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ touchAction: "pan-y" }}
        >
          {signatures.map((sig, idx) => (
            <div key={sig.num} className="snap-center shrink-0 w-[85vw] max-w-[340px]">
              <SignatureCard sig={sig} idx={idx} />
            </div>
          ))}
        </div>

        {/* Dot Indicators for Mobile Carousel */}
        <div className="lg:hidden flex justify-center gap-2 mt-4">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIdx === idx ? "bg-[#C08B6B] w-4" : "bg-[#C08B6B]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ sig, idx }: { sig: SignatureItem; idx: number }) {
  const bookUrl = `https://wa.me/919058383905?text=${encodeURIComponent(sig.whatsappMsg)}`;

  return (
    <motion.div
      className="group relative flex flex-col justify-between bg-[#2A1D17] text-[#F6EFE6] p-8 md:p-10 w-full h-[520px] rounded-t-[140px] border border-[#C08B6B]/20 overflow-hidden transition-all duration-500 hover:border-[#C08B6B] shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Washi tape strip at the top corner of the photo */}
      <div className="washi-tape absolute top-4 right-6 w-16 h-4 rotate-12 z-20 pointer-events-none" />

      {/* Real photo background with luxury dark gradient */}
      <img
        src={sig.imageSrc}
        alt={sig.title}
        className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105 pointer-events-none"
        loading="lazy"
      />
      
      {/* Sunset skin glow behind lip cards */}
      {sig.num === "02" && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#D9A39B]/20 via-transparent to-transparent pointer-events-none" />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1511] via-[#2A1D17]/80 to-[#1F1511]/60 pointer-events-none" />

      {/* Curved Arched Niches Border Line decoration inside */}
      <div className="absolute inset-4 rounded-t-[124px] border border-[#C08B6B]/15 pointer-events-none group-hover:border-[#C08B6B]/40 transition-colors duration-500" />

      {/* TOP: Numbering & Die-cut Sticker */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="font-display text-5xl md:text-6xl tracking-widest text-[#B9A58E]/25 group-hover:text-[#C08B6B]/45 font-normal transition-colors duration-500">
          {sig.num}
        </span>
        <div className="mt-2">
          <Sticker type={sig.stickerType} initialRotate={idx % 2 === 0 ? 5 : -4} />
        </div>
      </div>

      {/* MIDDLE: Content */}
      <div className="relative z-10 flex flex-col gap-2 mt-4">
        <span className="font-editorial text-base tracking-normal text-[#C08B6B] font-normal">
          {sig.tagline}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-[#F6EFE6] tracking-[0.08em] uppercase font-normal">
          {sig.title}
        </h3>
        <p className="text-xs md:text-sm font-sans text-[#E8D9C6]/85 leading-relaxed tracking-normal font-light">
          {sig.description}
        </p>
      </div>

      {/* BOTTOM: Action and Medical Notice */}
      <div className="relative z-10 flex flex-col gap-3 mt-6 border-t border-[#C08B6B]/15 pt-5">
        <a
          href={bookUrl}
          target="_blank"
          rel="no-referrer"
          className="flex items-center gap-2 text-[11px] font-sans font-medium tracking-[0.2em] text-[#C08B6B] uppercase hover:text-[#F6EFE6] active:scale-95 transition-all self-start group/btn"
        >
          <span>Ask About This</span>
          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
        <span className="text-[9px] font-sans text-[#B9A58E]/60 italic tracking-wide">
          * Doctor consultation determines the right personal plan.
        </span>
      </div>
    </motion.div>
  );
}
