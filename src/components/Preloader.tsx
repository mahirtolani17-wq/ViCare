import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.0 seconds duration, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#F6EFE6]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Circular logo matching https://ibb.co/1Gyj41Qn exactly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Soft pulse glow behind the logo */}
            <div className="absolute -inset-6 rounded-full bg-[#C08B6B]/15 blur-2xl animate-pulse pointer-events-none" />

            {/* The circular V+ logo as in the image */}
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#E8D9C6] via-[#F6EFE6] to-[#D9A39B]/30 border-[5px] border-white shadow-xl flex items-center justify-center select-none">
              <span className="font-sans text-3xl font-normal text-[#2A1D17] tracking-wider">
                V+
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
