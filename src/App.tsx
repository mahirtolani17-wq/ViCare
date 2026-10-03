import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import SignatureFour from "./components/SignatureFour";
import BeforeAfter from "./components/BeforeAfter";
import MeetDoctor from "./components/MeetDoctor";
import Services from "./components/Services";
import PatientLove from "./components/PatientLove";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move listener for custom copper cursor on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 4% OPTICAL FILM-GRAIN NOISE OVERLAY */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* CUSTOM DESKTOP COPPER CURSOR */}
      <div
        className="hidden md:block fixed pointer-events-none z-50 rounded-full bg-[#C08B6B] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovered ? "32px" : "8px",
          height: isHovered ? "32px" : "8px",
          opacity: 0.8,
          backgroundColor: isHovered ? "transparent" : "#C08B6B",
          border: isHovered ? "2px solid #C08B6B" : "none"
        }}
      />

      {/* PRELOADER STAGE */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* CORE APPLICATION */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        {/* Floating Top Header Navigation */}
        <Navbar />

        {/* Clinical Narrative Sections */}
        <main id="main-content">
          {/* Section 1: Scroll-driven video centerpiece */}
          <HeroVideo />

          {/* Section 2: Pinned horizontal signatures */}
          <SignatureFour />

          {/* Section 3: Interactive Draggable comparison gallery */}
          <BeforeAfter />

          {/* Section 4: Founder biography and pulls */}
          <MeetDoctor />

          {/* Section 5: Filterable services catalog */}
          <Services />

          {/* Section 6: Letters & verified reviews marquee */}
          <PatientLove />

          {/* Section 8: One-touch targets & Whatsapp enquiry form */}
          <Contact />
        </main>

        {/* Regulatory Footer & Disclaimer */}
        <Footer />
      </div>
    </>
  );
}
