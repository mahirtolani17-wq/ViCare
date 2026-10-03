import { useState, useEffect, lazy, Suspense } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";

// Lazy-loaded components below the fold for lightning-fast initial load on mobile
const SignatureFour = lazy(() => import("./components/SignatureFour"));
const BeforeAfter = lazy(() => import("./components/BeforeAfter"));
const MeetDoctor = lazy(() => import("./components/MeetDoctor"));
const ClinicSpace = lazy(() => import("./components/ClinicSpace"));
const Services = lazy(() => import("./components/Services"));
const PatientLove = lazy(() => import("./components/PatientLove"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"dot" | "sparkle" | "heart" | "lip">("dot");
  const [supportsHover, setSupportsHover] = useState(false);

  // Check hover capability once on startup
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSupportsHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  // Mouse move listener for custom copper cursor on desktop only
  useEffect(() => {
    if (!supportsHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer");

      if (isInteractive) {
        const textContent = target.textContent?.toLowerCase() || "";
        const href = target.getAttribute("href") || "";
        const classes = target.className || "";

        if (textContent.includes("lip") || classes.includes("lip") || href.includes("lip")) {
          setCursorType("lip");
        } else if (textContent.includes("doctor") || textContent.includes("juhi") || classes.includes("doc")) {
          setCursorType("heart");
        } else {
          setCursorType("sparkle");
        }
      } else {
        setCursorType("dot");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [supportsHover]);

  return (
    <ErrorBoundary>
      {/* 4% OPTICAL FILM-GRAIN NOISE OVERLAY - Disable full repaints on mobile to optimize GPU */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.025] hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* CUSTOM DESKTOP COPPER CURSOR - Disabled entirely on mobile */}
      {supportsHover && (
        <div
          className="hidden md:block fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`
          }}
        >
          {cursorType === "dot" ? (
            <div className="w-2 h-2 rounded-full bg-[#C08B6B] shadow-[0_1px_4px_rgba(0,0,0,0.3)]" />
          ) : cursorType === "lip" ? (
            <span className="text-xl filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)] select-none">💋</span>
          ) : cursorType === "heart" ? (
            <span className="text-xl filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)] select-none">❤️</span>
          ) : (
            <span className="text-xl filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)] select-none">✨</span>
          )}
        </div>
      )}

      {/* PRELOADER STAGE */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* CORE APPLICATION */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        {/* Floating Top Header Navigation */}
        <Navbar />

        {/* Clinical Narrative Sections */}
        <main id="main-content">
          {/* Section 1: Scroll-driven video centerpiece (Frontloaded) */}
          <HeroVideo />

          {/* Section 2: Signature treatment cards (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#F6EFE6] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading treatments...</div>}>
            <SignatureFour />
          </Suspense>

          {/* Section 3: Interactive Slider comparisons (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#1F1511] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading gallery...</div>}>
            <BeforeAfter />
          </Suspense>

          {/* Section 4: Physician Biography (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#2A1D17] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading biography...</div>}>
            <MeetDoctor />
          </Suspense>

          {/* Section 4.5: 3D Coverflow of spaces (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#F6EFE6] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading clinic spaces...</div>}>
            <ClinicSpace />
          </Suspense>

          {/* Section 5: Filterable services list (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#2A1D17] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading services index...</div>}>
            <Services />
          </Suspense>

          {/* Section 6: Patient Reviews (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#2A1D17] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading reviews...</div>}>
            <PatientLove />
          </Suspense>

          {/* Section 8: Connect & Location (Lazy-loaded) */}
          <Suspense fallback={<div className="h-96 bg-[#2A1D17] flex items-center justify-center text-[#B9A58E] font-sans text-xs tracking-widest uppercase">Loading maps...</div>}>
            <Contact />
          </Suspense>
        </main>

        {/* Regulatory Footer & Disclaimer */}
        <Suspense fallback={<div className="h-48 bg-[#1F1511]" />}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
