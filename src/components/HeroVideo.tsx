import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MessageCircle, MapPin, Star, ChevronDown, ShieldCheck, Sparkles, Phone } from "lucide-react";
import Sticker from "./Sticker";
import { HandCircle, MarkerUnderline, CurlyArrow, MarginNote } from "./HandDrawn";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentPhase, setCurrentPhase] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Link scroll of containerRef to Framer Motion values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero wordmark scroll transform: scales down and slides towards header position
  const wordmarkScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.28]);
  const wordmarkY = useTransform(scrollYProgress, [0, 0.22], [0, -260]);
  const wordmarkX = useTransform(scrollYProgress, [0, 0.22], [0, -180]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.18, 0.24], [1, 0.9, 0]);

  // Map scroll progress to 4 cohesive cinematic phases (0 to 3)
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
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
  }, [scrollYProgress]);

  // Sync entire video playback to scroll effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let currentTime = 0;
    const lerpFactor = 0.28; // Responsive interpolation factor
    let animationFrameId: number;

    const syncVideo = () => {
      const dur = video.duration || 10.006;
      if (dur > 0) {
        // Map 0 -> 1 scroll progression to 0 -> 10.0s video duration
        const progress = scrollYProgress.get();
        targetTime = Math.min(Math.max(progress * dur, 0), dur - 0.04);

        // Smoothly interpolate towards target time
        currentTime += (targetTime - currentTime) * lerpFactor;

        // Apply time if difference is noticeable
        if (Math.abs(video.currentTime - currentTime) > 0.02 && !video.seeking) {
          video.currentTime = currentTime;
        }

        // Keep fallback canvas in sync if needed
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          }
        }
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
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollYProgress]);

  // Subtle mouse parallax for foreground elements
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Ambient canvas loader while video metadata is initializing
  useEffect(() => {
    if (videoLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.005;
      const width = canvas.width;
      const height = canvas.height;

      const grad = ctx.createRadialGradient(
        width / 2 + Math.sin(time) * 100,
        height / 2 + Math.cos(time) * 100,
        100,
        width / 2,
        height / 2,
        width * 0.8
      );
      grad.addColorStop(0, "#F6EFE6");
      grad.addColorStop(0.5, "#E8D9C6");
      grad.addColorStop(1, "#2A1D17");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, [videoLoaded]);

  const handleConsultationClick = () => {
    const message = "Hi ViCare, I'd like to book a consultation with Dr. Juhi.";
    window.open(`https://wa.me/919058383905?text=${encodeURIComponent(message)}`, "_blank");
  };

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vicare+Aesthetique+Karnavati+Infinity+Living+Bhat+Ahmedabad";

  const heroLetters = ["V", "I", "C", "A", "R", "E"];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#2A1D17]"
      id="hero"
    >
      {/* PINNED BACKGROUND VIDEO STAGE */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Full-screen video element strictly synced with scroll */}
        <video
          ref={videoRef}
          src="/assets/hero-video.mp4"
          muted
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${
            videoError ? "opacity-0" : videoLoaded ? "opacity-60" : "opacity-0"
          }`}
        />

        {/* Ambient Canvas Fallback if video is waiting */}
        {!videoLoaded && !videoError && (
          <canvas
            ref={canvasRef}
            width="1280"
            height="720"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-lighten"
          />
        )}

        {/* Subtle Dark Gradient Overlay for optimal headline legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1D17]/85 via-[#2A1D17]/40 to-[#2A1D17]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {/* FLOATING STICKERS (Sticker in Hero) */}
        <div className="absolute bottom-28 left-6 md:left-14 z-20 hidden md:block pointer-events-auto">
          <Sticker type="open-hours" initialRotate={-4} />
        </div>

        {/* DRIVEN NARRATIVE SLIDES CONTAINER */}
        <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            
            {/* PHASE 0: Grand Entrance with Wordmark Letters Rising through Mask + Scaling on Scroll */}
            {currentPhase === 0 && (
              <motion.div
                key="phase-0"
                className="flex flex-col items-center max-w-4xl relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              >
                {/* Tracked-caps eyebrow in Jost: no "welcome to" */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                  <span className="text-[#C08B6B] text-[11px] md:text-xs font-sans font-medium tracking-[0.22em] uppercase">
                    Aesthetic Physician Clinic · Bhat, Ahmedabad
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                </div>
                
                {/* HERO WORDMARK: Letters rising one by one through a mask, with background glow */}
                <motion.div
                  style={{
                    scale: wordmarkScale,
                    y: wordmarkY,
                    x: wordmarkX,
                    opacity: wordmarkOpacity
                  }}
                  className="relative my-2 flex items-center justify-center origin-center will-change-transform"
                >
                  {/* Outer Diffuse Copper Aura */}
                  <div 
                    className="absolute -inset-10 md:-inset-20 rounded-full bg-radial from-[#C08B6B]/45 via-[#C08B6B]/15 to-transparent blur-3xl pointer-events-none animate-pulse"
                    style={{ animationDuration: '4s' }}
                  />
                  {/* Core Warm Cream Glow */}
                  <div className="absolute -inset-2 md:-inset-6 rounded-full bg-[#E8D9C6]/20 blur-xl pointer-events-none" />

                  {/* Huge Romano Revival Display Wordmark */}
                  <h1
                    className="relative z-10 flex items-center justify-center font-display text-[#F6EFE6] leading-none select-none tracking-[0.14em]"
                    style={{ fontSize: "var(--scale-hero)" }}
                    aria-label="VICARE"
                  >
                    {heroLetters.map((letter, i) => (
                      <span key={i} className="inline-block overflow-hidden pb-4">
                        <motion.span
                          className="inline-block"
                          initial={{ y: "115%" }}
                          animate={{ y: "0%" }}
                          transition={{
                            duration: 1.0,
                            delay: 0.15 + i * 0.08,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {letter}
                        </motion.span>
                      </span>
                    ))}
                  </h1>
                </motion.div>

                {/* Sub-heading in Gatchina: Human rewrite */}
                <p className="mt-3 font-editorial text-lg sm:text-2xl md:text-3xl tracking-normal text-[#E8D9C6] font-normal">
                  Lips, skin, lasers. <span className="italic text-[#C08B6B]">Natural is the whole point.</span>
                </p>

                {/* Margin note with washi tape (flagged in README) */}
                <div className="mt-4 hidden sm:block">
                  <MarginNote text="Come say hi. Chai's on us." rotate={-2} />
                </div>

                {/* Subtle Scroll Cue */}
                <div className="mt-10 flex flex-col items-center gap-1.5 text-[10px] font-sans tracking-[0.22em] text-[#B9A58E]/80 uppercase">
                  <span>Scroll to see the clinic</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-[#C08B6B]"
                  >
                    <ChevronDown size={15} />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* PHASE 1: The Clinical Philosophy & Artistry */}
            {currentPhase === 1 && (
              <motion.div
                key="phase-1"
                className="max-w-3xl flex flex-col items-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C08B6B]/30 bg-[#2A1D17]/70 backdrop-blur-md mb-4">
                  <Sparkles size={12} className="text-[#C08B6B]" />
                  <span className="text-[11px] font-sans font-medium tracking-[0.2em] text-[#C08B6B] uppercase">
                    OUR WAY OF WORKING
                  </span>
                </div>

                {/* Giant Romano Revival scroll-video headline */}
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] text-[#F6EFE6] uppercase leading-none font-normal">
                  Refine. Enhance. <HandCircle color="#C08B6B">Empower.</HandCircle>
                </h2>

                {/* Sub-heading in Gatchina: Human rewrite */}
                <p className="mt-6 font-editorial text-base sm:text-xl text-[#E8D9C6]/95 leading-relaxed max-w-xl font-normal">
                  No frozen expressions, no cookie-cutter lips. Just careful medical aesthetics personally designed and done by Dr. Juhi Ochwani.
                </p>

                {/* Arrow and Margin note */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <CurlyArrow direction="down-right" label="real doctor-led" />
                </div>

                {/* Highlighted Credentials in Jost tracked-caps */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <div className="px-4 py-2.5 rounded-full bg-[#1F1511]/80 border border-[#C08B6B]/25 text-[11px] font-sans font-medium tracking-[0.18em] text-[#F6EFE6] uppercase flex items-center gap-2">
                    <ShieldCheck size={13} className="text-[#C08B6B]" />
                    <span>US FDA-Approved Lasers</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-full bg-[#1F1511]/80 border border-[#C08B6B]/25 text-[11px] font-sans font-medium tracking-[0.18em] text-[#F6EFE6] uppercase flex items-center gap-2">
                    <ShieldCheck size={13} className="text-[#C08B6B]" />
                    <span>MBBS, PGDCC Supervised</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-full bg-[#1F1511]/80 border border-[#C08B6B]/25 text-[11px] font-sans font-medium tracking-[0.18em] text-[#F6EFE6] uppercase flex items-center gap-2">
                    <ShieldCheck size={13} className="text-[#C08B6B]" />
                    <span>Undetectable Balance</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PHASE 2: Verified Patient Trust & Standards */}
            {currentPhase === 2 && (
              <motion.div
                key="phase-2"
                className="max-w-2xl flex flex-col items-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
              >
                {/* Floating Google Rating Sticker */}
                <div className="mb-4">
                  <Sticker type="google-rating" initialRotate={-3} />
                </div>

                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl tracking-[0.08em] text-[#F6EFE6] uppercase leading-none font-normal">
                  Real Reviews, Real People
                </h2>

                {/* Pull-quote in Gatchina */}
                <p className="mt-5 font-editorial text-base sm:text-xl text-[#E8D9C6]/95 leading-relaxed max-w-lg italic font-normal">
                  &ldquo;Dr. Juhi actually listens and tells you when not to do something. Clean clinic, lovely vibe, and results that look completely natural.&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 text-[11px] font-sans font-medium tracking-[0.2em] text-[#B9A58E] uppercase">
                  <span className="w-8 h-[1px] bg-[#C08B6B]/40" />
                  <span>37 Verified Google Reviews · 4.9 Stars</span>
                  <span className="w-8 h-[1px] bg-[#C08B6B]/40" />
                </div>
              </motion.div>
            )}

            {/* PHASE 3: Seamless Connect & Direct Consultation */}
            {currentPhase === 3 && (
              <motion.div
                key="phase-3"
                className="max-w-xl flex flex-col items-center relative"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              >
                {/* Location Sticker */}
                <div className="mb-3">
                  <Sticker type="location" initialRotate={3} />
                </div>

                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.08em] text-[#F6EFE6] uppercase leading-tight font-normal mb-3">
                  Talk To Dr. Juhi
                </h2>

                <p className="font-editorial text-sm sm:text-base text-[#E8D9C6]/90 leading-relaxed max-w-md mb-6 font-normal">
                  Karnavati Infinity Living, near Indian Oil Petrol Pump, Bhat, Ahmedabad
                </p>

                {/* Direct Action Buttons with Personality */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    onClick={handleConsultationClick}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C08B6B] text-[#2A1D17] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#E8D9C6] active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <MessageCircle size={15} />
                    <span>Say Hi on WhatsApp</span>
                  </button>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#C08B6B] text-[#F6EFE6] text-[11px] font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#C08B6B]/20 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <MapPin size={15} className="text-[#C08B6B]" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <a
                  href="tel:+919058383905"
                  className="mt-6 flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] text-[#B9A58E] hover:text-[#C08B6B] transition-colors uppercase font-normal"
                >
                  <Phone size={13} className="text-[#C08B6B]" />
                  <span>Call directly: 090583 83905</span>
                </a>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
