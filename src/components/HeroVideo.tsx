import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MessageCircle, MapPin, ChevronDown, ShieldCheck, Sparkles, Phone } from "lucide-react";
import Sticker from "./Sticker";
import { HandCircle, CurlyArrow, MarginNote } from "./HandDrawn";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentPhase, setCurrentPhase] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobileFallback, setIsMobileFallback] = useState(false);

  // Set up Scroll listener
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Check connection speed or mobile indicators for smooth Tier fallback
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      
      // Tier C fallback check (touch devices, data-saver mode, low-memory, or slow connection)
      const nav = navigator as any;
      const isLowMemory = nav.deviceMemory && nav.deviceMemory <= 2;
      const isSaveData = nav.connection && nav.connection.saveData;
      
      if (isTouch || isLowMemory || isSaveData) {
        setIsMobileFallback(true);
      }
    }
  }, []);

  // Responsive scroll wordmark transforms
  const wordmarkScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.35]);
  const wordmarkY = useTransform(scrollYProgress, [0, 0.22], [0, -180]);
  const wordmarkX = useTransform(scrollYProgress, [0, 0.22], [0, -110]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.18, 0.24], [1, 0.9, 0]);

  // Sync scroll progress to slides/phases
  useEffect(() => {
    try {
      const unsubscribe = scrollYProgress.onChange((latest) => {
        if (latest < 0.26) {
          setCurrentPhase(0);
        } else if (latest < 0.55) {
          setCurrentPhase(1);
        } else if (latest < 0.80) {
          setCurrentPhase(2);
        } else {
          setCurrentPhase(3);
        }
      });
      return () => unsubscribe();
    } catch (err) {
      console.warn("Scroll animation subscription error", err);
    }
  }, [scrollYProgress]);

  // Video controller: Scroll-Synced seek on desktop, continuous slow playback on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let currentTime = 0;
    const lerpFactor = 0.22; 
    let animationFrameId: number;

    // Direct loop playback for smooth Tier C mobile performance
    if (isMobileFallback) {
      try {
        video.currentTime = 0;
        video.playbackRate = 0.65; // Relaxed speed for high-end cinematic feel
        video.loop = true;
        video.muted = true;
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log("Muted autoplay handled cleanly on mobile pointer", err);
          });
        }
        setVideoLoaded(true);
      } catch (err) {
        console.warn("Mobile video playback exception", err);
        setVideoError(true);
      }
      return;
    }

    // Scroll scrubbing mechanism for desktop (Tier B)
    const syncVideo = () => {
      try {
        const dur = video.duration || 10.0;
        if (dur > 0) {
          const progress = scrollYProgress.get();
          targetTime = Math.min(Math.max(progress * dur, 0), dur - 0.05);
          currentTime += (targetTime - currentTime) * lerpFactor;

          // Only seek if time delta is larger than roughly a single frame to protect CPU/GPU
          if (Math.abs(video.currentTime - currentTime) > 0.033 && !video.seeking) {
            video.currentTime = currentTime;
          }

          // Maintain Canvas frame context if initialized
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            }
          }
        }
      } catch (err) {
        console.warn("Scroll-seeking exception", err);
      }
      animationFrameId = requestAnimationFrame(syncVideo);
    };

    const onLoadedMetadata = () => {
      setVideoLoaded(true);
      animationFrameId = requestAnimationFrame(syncVideo);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.readyState >= 1) {
      onLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollYProgress, isMobileFallback]);

  // Subtle pointer parallax: Desktop only to prevent touch redraw bugs
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (isMobileFallback) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobileFallback]);

  const handleConsultationClick = () => {
    const message = "Hi ViCare, I'd like to book a consultation with Dr. Juhi.";
    window.open(`https://wa.me/919058383905?text=${encodeURIComponent(message)}`, "_blank");
  };

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vicare+Aesthetique+Karnavati+Infinity+Living+Bhat+Ahmedabad";
  const heroLetters = ["V", "I", "C", "A", "R", "E"];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[180vh] md:h-[320vh] bg-[#2A1D17] overflow-hidden"
      id="hero"
    >
      {/* PINNED BACKGROUND VIDEO STAGE */}
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center justify-center">
        
        {/* Full-screen video element */}
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          muted
          playsInline
          autoPlay={isMobileFallback}
          loop={isMobileFallback}
          preload="auto"
          poster="/assets/hero-poster.jpg"
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${
            videoError ? "opacity-0" : videoLoaded ? "opacity-55" : "opacity-0"
          }`}
        />

        {/* Ambient Canvas Fallback */}
        {!videoLoaded && !videoError && !isMobileFallback && (
          <canvas
            ref={canvasRef}
            width="640"
            height="360"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30 mix-blend-lighten"
          />
        )}

        {/* Dynamic browser-safe gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1D17]/90 via-[#2A1D17]/35 to-[#2A1D17]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {/* FLOATING STICKERS - Hidden or limited on mobile screens */}
        <div className="absolute bottom-24 left-6 md:left-14 z-20 hidden md:block pointer-events-auto">
          <Sticker type="open-hours" initialRotate={-4} mobileHidden />
        </div>

        {/* CONTENT STAGE */}
        <div className="relative z-10 w-full max-w-5xl px-4 md:px-12 flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            
            {/* PHASE 0: Grand Entrance Wordmark */}
            {currentPhase === 0 && (
              <motion.div
                key="phase-0"
                className="flex flex-col items-center max-w-4xl relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={isMobileFallback ? {} : { x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                  <span className="text-[#C08B6B] text-[10px] md:text-xs font-sans font-medium tracking-[0.2em] uppercase">
                    Aesthetic Physician Clinic · Bhat
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                </div>
                
                {/* HERO WORDMARK */}
                <motion.div
                  style={isMobileFallback ? {} : {
                    scale: wordmarkScale,
                    y: wordmarkY,
                    x: wordmarkX,
                    opacity: wordmarkOpacity
                  }}
                  className="relative my-2 flex items-center justify-center origin-center will-change-transform"
                >
                  <div className="absolute -inset-10 rounded-full bg-radial from-[#C08B6B]/25 via-transparent to-transparent blur-2xl pointer-events-none" />

                  {/* Scaled Wordmark safely fitting smaller viewports */}
                  <h1
                    className="relative z-10 flex items-center justify-center font-display text-[#F6EFE6] leading-none select-none tracking-[0.1em]"
                    style={{ fontSize: "clamp(2.5rem, 10vw, 8.5rem)" }}
                    aria-label="VICARE"
                  >
                    {heroLetters.map((letter, i) => (
                      <span key={i} className="inline-block overflow-hidden pb-1">
                        <motion.span
                          className="inline-block"
                          initial={{ y: "115%" }}
                          animate={{ y: "0%" }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.05,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {letter}
                        </motion.span>
                      </span>
                    ))}
                  </h1>
                </motion.div>

                <p className="mt-2 font-editorial text-base sm:text-xl md:text-2xl tracking-normal text-[#E8D9C6] font-normal">
                  Lips, skin, lasers. <span className="italic text-[#C08B6B]">Natural is the whole point.</span>
                </p>

                <div className="mt-3 hidden sm:block">
                  <MarginNote text="Come say hi. Chai's on us." rotate={-1} />
                </div>

                {/* Subtle Scroll Cue */}
                <div className="mt-8 flex flex-col items-center gap-1 text-[9px] font-sans tracking-[0.18em] text-[#B9A58E]/85 uppercase">
                  <span>Scroll to view</span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-[#C08B6B]"
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* PHASE 1: Philosophy */}
            {currentPhase === 1 && (
              <motion.div
                key="phase-1"
                className="max-w-3xl flex flex-col items-center relative w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={isMobileFallback ? {} : { x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C08B6B]/35 bg-[#2A1D17]/75 backdrop-blur-sm mb-3">
                  <Sparkles size={11} className="text-[#C08B6B]" />
                  <span className="text-[10px] font-sans font-medium tracking-[0.18em] text-[#C08B6B] uppercase">
                    OUR PHILOSOPHY
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] text-[#F6EFE6] uppercase leading-tight font-normal">
                  Refine. Enhance. <HandCircle color="#C08B6B">Empower.</HandCircle>
                </h2>

                <p className="mt-4 font-editorial text-sm sm:text-base md:text-lg text-[#E8D9C6]/90 leading-relaxed max-w-lg font-normal">
                  No frozen looks, no overfilled templates. Just elegant medical aesthetics customized for your unique anatomy by Dr. Juhi Ochwani.
                </p>

                <div className="mt-4 hidden sm:flex items-center justify-center gap-2">
                  <CurlyArrow direction="down-right" label="physician-led" />
                </div>
              </motion.div>
            )}

            {/* PHASE 2: Trust */}
            {currentPhase === 2 && (
              <motion.div
                key="phase-2"
                className="max-w-2xl flex flex-col items-center relative w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={isMobileFallback ? {} : { x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              >
                <div className="mb-3 scale-90">
                  <Sticker type="google-rating" initialRotate={-2} />
                </div>

                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl tracking-[0.05em] text-[#F6EFE6] uppercase leading-tight font-normal">
                  Real Feedback, Real Trust
                </h2>

                <p className="mt-4 font-editorial text-xs sm:text-base text-[#E8D9C6]/90 leading-relaxed max-w-md italic font-normal">
                  &ldquo;Dr. Juhi listens patiently and only suggests what is necessary. Clean clinic, beautiful serene environment, and completely natural results.&rdquo;
                </p>
              </motion.div>
            )}

            {/* PHASE 3: Seamless Connect */}
            {currentPhase === 3 && (
              <motion.div
                key="phase-3"
                className="max-w-md flex flex-col items-center relative w-full"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                style={isMobileFallback ? {} : { x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              >
                <div className="mb-2 scale-90">
                  <Sticker type="location" initialRotate={2} />
                </div>

                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl tracking-[0.05em] text-[#F6EFE6] uppercase leading-tight font-normal mb-2">
                  Contact The Clinic
                </h2>

                <p className="font-editorial text-xs sm:text-sm text-[#E8D9C6]/90 leading-relaxed max-w-sm mb-4 font-normal">
                  Karnavati Infinity Living, near Indian Oil Petrol Pump, Bhat, Ahmedabad
                </p>

                {/* Mobile direct taps */}
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button
                    onClick={handleConsultationClick}
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#C08B6B] text-[#2A1D17] text-[10px] font-sans font-semibold tracking-[0.18em] uppercase hover:bg-[#E8D9C6] active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Inquiry</span>
                  </button>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#C08B6B] text-[#F6EFE6] text-[10px] font-sans font-medium tracking-[0.18em] uppercase hover:bg-[#C08B6B]/20 active:scale-95 transition-all"
                  >
                    <MapPin size={14} className="text-[#C08B6B]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
