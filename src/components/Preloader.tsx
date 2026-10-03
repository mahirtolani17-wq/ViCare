import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.2 seconds duration for the drawing and text transition, then trigger completion
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit transition to finish before calling parent complete
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#2A1D17]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Panel */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#2A1D17]"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Right Panel */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#2A1D17]"
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Dividing Hairline & Sparkle Star on Exit */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#C08B6B]/40"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ x: "-50%" }}
          >
            {/* 4-point Sparkle Star */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "50%", y: "-50%" }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: [0, 90, 180] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1.5, times: [0, 0.6, 1], ease: "easeInOut" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                  fill="#C08B6B"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            {/* Drawing SVG V+ Logo */}
            <svg
              width="90"
              height="90"
              viewBox="0 0 100 100"
              className="mb-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Animated 'V' path */}
              <motion.path
                d="M20 35 L45 75 L70 30"
                stroke="#C08B6B"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* Animated '+' path */}
              <motion.path
                d="M75 55 H91 M83 47 V63"
                stroke="#C08B6B"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              />
            </svg>

            {/* Brand Text */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-serif text-2xl md:text-3xl tracking-[0.4em] uppercase text-[#F6EFE6]"
                initial={{ opacity: 0, y: 20, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                VICARE
              </motion.h1>
              <motion.p
                className="mt-2 text-xs font-light tracking-[0.5em] text-[#B9A58E] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                AESTHETIQUE
              </motion.p>
            </div>

            {/* Small tagline */}
            <motion.div
              className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#E8D9C6]/60 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <span>REFINE</span>
              <span className="text-[#C08B6B] font-serif">·</span>
              <span>ENHANCE</span>
              <span className="text-[#C08B6B] font-serif">·</span>
              <span>EMPOWER</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
