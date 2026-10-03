import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Exact 2.0 seconds duration, ensuring loading is smooth and absolute hard release at 2s
    const timer = setTimeout(() => {
      setIsVisible(false);
      const doneTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(doneTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#F6EFE6]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Circular V+ logo matching https://ibb.co/1Gyj41Qn exactly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center gap-6"
          >
            {/* Soft ambient skin glow */}
            <div className="absolute -inset-10 rounded-full bg-[#C08B6B]/15 blur-3xl animate-pulse pointer-events-none" />

            {/* The circular V+ logo with ivory border */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#E8D9C6] via-[#F6EFE6] to-[#D9A39B]/20 border-[4px] border-white shadow-xl flex items-center justify-center select-none relative z-10">
              <span className="font-sans text-2xl md:text-3xl font-light text-[#2A1D17] tracking-wider">
                V+
              </span>
            </div>

            {/* Micro loader progress tracking line beneath logo */}
            <div className="w-24 h-[2px] bg-[#2A1D17]/10 rounded-full overflow-hidden relative z-10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-[#C08B6B]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
