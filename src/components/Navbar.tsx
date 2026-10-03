import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Phone, MessageCircle, MapPin, Instagram, X } from "lucide-react";

interface MenuItem {
  number: string;
  name: string;
  href: string;
  previewImage: string;
  subtitle: string;
}

const menuItems: MenuItem[] = [
  {
    number: "01",
    name: "Treatments",
    href: "#services",
    previewImage: "/images/clinic-waheguru.jpg",
    subtitle: "US FDA Laser Suite & Dermal Science"
  },
  {
    number: "02",
    name: "Results",
    href: "#gallery",
    previewImage: "/images/jawline-after.png",
    subtitle: "Interactive Before & After Gallery"
  },
  {
    number: "03",
    name: "Doctor",
    href: "#doctor",
    previewImage: "/images/dr-juhi-owner.jpg",
    subtitle: "Dr. Juhi Ochwani · Aesthetic Physician"
  },
  {
    number: "04",
    name: "Space",
    href: "#clinic",
    previewImage: "/images/clinic-reception.jpg",
    subtitle: "Quiet Luxury Clinical Sanctuary"
  },
  {
    number: "05",
    name: "Reviews",
    href: "#reviews",
    previewImage: "/images/gallery-photo3.jpg",
    subtitle: "5.0 ★ Verified Patient Letters"
  },
  {
    number: "06",
    name: "Visit",
    href: "#contact",
    previewImage: "/images/clinic-desk.jpg",
    subtitle: "Karnavati Infinity Living, Bhat, Ahmedabad"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<string>(menuItems[0].previewImage);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll tracking for header state, hide-on-scroll-down, and bottom progress line
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOverLightSection, setIsOverLightSection] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Sparkle rotation mapped to scroll
  const sparkleRotation = useTransform(scrollY, [0, 3000], [0, 720]);

  useEffect(() => {
    return scrollY.onChange((current) => {
      const heroThreshold = window.innerHeight * 0.9;
      setIsPastHero(current > heroThreshold);

      // Detect light sections (e.g. Services / PatientLove / Doctor white/sand background sections)
      // Check if scroll position falls within the light section ranges
      const signatureEl = document.getElementById("services");
      const doctorEl = document.getElementById("doctor");
      if (signatureEl && doctorEl) {
        const sigTop = signatureEl.offsetTop - 80;
        const sigBottom = signatureEl.offsetTop + signatureEl.offsetHeight;
        const docTop = doctorEl.offsetTop - 80;
        const docBottom = doctorEl.offsetTop + doctorEl.offsetHeight;
        const inLight = (current >= sigTop && current <= sigBottom) || (current >= docTop && current <= docBottom);
        setIsOverLightSection(inLight);
      }

      // Hide header on scroll down, show on scroll up (with a 10px buffer)
      if (current > 120) {
        if (current > lastScrollY.current + 10) {
          setIsVisible(false);
        } else if (current < lastScrollY.current - 10) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = current;
    });
  }, [scrollY]);

  // Lock body scroll and handle escape key when full-screen menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const [menuWiggle, setMenuWiggle] = useState(false);

  // Wiggle the Menu button once after 8 seconds of inactivity as requested
  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuWiggle(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultation = () => {
    const message = "Hi ViCare, I'd like to book an initial clinical consultation.";
    window.open(`https://wa.me/919058383905?text=${encodeURIComponent(message)}`, "_blank");
  };

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vicare+Aesthetique+Karnavati+Infinity+Living+Bhat+Ahmedabad";

  return (
    <>
      {/* SKIP TO CONTENT LINK (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C08B6B] focus:text-[#2A1D17] focus:font-sans focus:font-medium focus:rounded-full focus:shadow-xl focus:ring-2 focus:ring-[#C08B6B] focus:outline-none"
      >
        Skip to content
      </a>

      {/* FIXED BOUTIQUE CLINIC HEADER BAR */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isOverLightSection
            ? "bg-[#F6EFE6]/92 backdrop-blur-md border-b border-[#E8D9C6] text-[#2A1D17] shadow-sm"
            : isPastHero
            ? "bg-[#2A1D17]/88 backdrop-blur-md border-b border-[#C08B6B]/15 text-[#F6EFE6]"
            : "bg-transparent text-[#F6EFE6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 md:py-4 flex items-center justify-between">
          
          {/* ZONE 1 (LEFT): Copper V+ Mark, Wordmark in Gatchina, Tagline in Jost (900px+) */}
          <div className="flex items-center gap-3.5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08B6B] rounded-full pr-2"
              aria-label="ViCare Aesthetique Home"
            >
              {/* Official Logo Mark requested from https://ibb.co/TMbNm2F4 */}
              <div className="flex items-center justify-center">
                <img
                  src="/images/vicare-symbol-logo.png"
                  alt="ViCare Logo"
                  className="h-10 sm:h-12 w-auto object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Clinic Signage Typography */}
              <div className="flex flex-col text-left">
                <span
                  className="font-editorial text-base sm:text-lg tracking-wide leading-none font-normal"
                  style={{
                    textShadow: !isPastHero ? "0 2px 10px rgba(0,0,0,0.6)" : "none"
                  }}
                >
                  Vicare Aesthetique
                </span>
                {/* Tracked-caps tagline hidden below 900px */}
                <span className="hidden min-[900px]:block text-[10px] font-sans font-medium tracking-[0.22em] text-[#C08B6B] uppercase mt-1">
                  REFINE. ENHANCE. EMPOWER.
                </span>
              </div>
            </a>

            {/* Rotating 4-Point Sparkle Star between wordmark & nav */}
            <motion.div
              style={{ rotate: sparkleRotation }}
              className="hidden lg:flex items-center justify-center text-[#C08B6B] ml-2 opacity-80"
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </motion.div>
          </div>

          {/* ZONE 2 (CENTER): Empty on hero, reveals 4 tracked-caps links after hero */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center gap-7 lg:gap-9 transition-all duration-500 ${
              isPastHero ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
            }`}
          >
            {[
              { name: "Treatments", href: "#services" },
              { name: "Results", href: "#gallery" },
              { name: "Doctor", href: "#doctor" },
              { name: "Visit", href: "#contact" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative py-1 text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08B6B] rounded ${
                  isOverLightSection
                    ? "text-[#2A1D17]/80 hover:text-[#2A1D17]"
                    : "text-[#F6EFE6]/85 hover:text-[#F6EFE6]"
                } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-[#C08B6B] after:transition-all after:duration-300`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ZONE 3 (RIGHT): Consultation pill button & Round Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Pill button: "Book a consultation" with moving sheen gradient */}
            <button
              onClick={handleConsultation}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#C08B6B] bg-gradient-to-r from-[#C08B6B]/20 via-[#D9A39B]/30 to-[#C08B6B]/20 text-[#F6EFE6] hover:from-[#C08B6B] hover:to-[#D9A39B] hover:text-[#2A1D17] text-[11px] font-sans font-medium tracking-[0.18em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08B6B] cursor-pointer shadow-sm active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Book a consultation</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </button>

            {/* Round Menu Button with 2 animated lines & 8s playful wiggle */}
            <motion.button
              ref={menuButtonRef}
              onClick={() => setIsOpen(true)}
              aria-label="Open clinical directory menu"
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              animate={menuWiggle ? { rotate: [0, -8, 8, -5, 5, 0] } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full border border-[#C08B6B]/40 flex flex-col items-center justify-center gap-1.5 bg-[#2A1D17]/40 hover:border-[#C08B6B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08B6B] cursor-pointer group transition-colors"
            >
              {/* Line 1 */}
              <span className="w-5 h-[1.5px] bg-[#C08B6B] rounded-full transition-transform duration-300 group-hover:scale-x-110" />
              {/* Line 2 */}
              <span className="w-3 h-[1.5px] bg-[#C08B6B] rounded-full transition-all duration-300 group-hover:w-5" />
            </motion.button>
          </div>

        </div>

        {/* 2px Copper Scroll Progress Line along bottom edge */}
        <motion.div
          className="h-[2px] bg-[#C08B6B] origin-left w-full"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* FULL-SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main Menu"
            className="fixed inset-0 z-50 bg-[#2A1D17] text-[#F6EFE6] flex flex-col justify-between overflow-y-auto px-6 sm:px-12 md:px-20 py-8"
            initial={{ clipPath: "circle(0% at top right)" }}
            animate={{ clipPath: "circle(160% at top right)" }}
            exit={{ clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar of Menu Overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-[#C08B6B]/20">
              <div className="flex items-center gap-3">
                <img
                  src="/images/vicare-symbol-logo.png"
                  alt="ViCare Logo"
                  className="h-8 w-auto object-contain filter drop-shadow"
                />
                <span className="font-editorial text-lg sm:text-xl text-[#F6EFE6]">
                  Vicare Aesthetique
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
                <span className="text-[10px] font-sans font-medium tracking-[0.25em] text-[#C08B6B] uppercase">
                  Directory
                </span>
              </div>

              {/* Close Button (48px tap target) */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close directory menu"
                className="w-12 h-12 rounded-full border border-[#C08B6B]/40 flex items-center justify-center text-[#C08B6B] hover:border-[#C08B6B] hover:text-[#F6EFE6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C08B6B] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Center Stage: Giant Links & Desktop Arched Image Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
              
              {/* Directory Links Column */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
                {menuItems.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const isDimmed = hoveredIndex !== null && !isHovered;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * index + 0.15, duration: 0.5, ease: "easeOut" }}
                      className={`flex items-baseline gap-4 sm:gap-6 group cursor-pointer transition-opacity duration-300 ${
                        isDimmed ? "opacity-30" : "opacity-100"
                      }`}
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        setActivePreview(item.previewImage);
                      }}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#C08B6B] font-light">
                        {item.number}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-editorial text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F6EFE6] group-hover:text-[#C08B6B] transition-colors leading-none">
                          {item.name}
                        </span>
                        <span className="text-[10px] sm:text-xs font-sans font-light tracking-[0.2em] text-[#B9A58E] uppercase mt-1">
                          {item.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Desktop Arched Image Preview Column */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
                <div className="relative w-64 h-84 rounded-t-full rounded-b-2xl overflow-hidden border border-[#C08B6B]/30 shadow-2xl p-2 bg-[#1F1511]">
                  <img
                    src={activePreview}
                    alt="Section preview"
                    className="w-full h-full object-cover rounded-t-full rounded-b-xl transition-all duration-500 filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D17]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Bottom Contact & Social Links Bar */}
            <div className="pt-6 border-t border-[#C08B6B]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#E8D9C6]">
              {/* One-touch Contact Actions */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="tel:+919058383905"
                  className="flex items-center gap-2 hover:text-[#C08B6B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C08B6B] py-2 px-1"
                >
                  <Phone size={14} className="text-[#C08B6B]" />
                  <span>090583 83905</span>
                </a>

                <a
                  href="https://wa.me/919058383905?text=Hi%20ViCare,%20I'd%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C08B6B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C08B6B] py-2 px-1"
                >
                  <MessageCircle size={14} className="text-[#C08B6B]" />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C08B6B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C08B6B] py-2 px-1"
                >
                  <MapPin size={14} className="text-[#C08B6B]" />
                  <span>Bhat, Ahmedabad</span>
                </a>

                <a
                  href="https://instagram.com/vicare_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C08B6B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C08B6B] py-2 px-1"
                >
                  <Instagram size={14} className="text-[#C08B6B]" />
                  <span>@vicare_in</span>
                </a>
              </div>

              <div className="text-[11px] font-sans tracking-[0.2em] text-[#B9A58E] uppercase">
                Doctor-Supervised Medical Aesthetics
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE FIXED BOTTOM ACTION BAR (Booking & Calling) - Hidden when directory is open, and notched-safe */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1F1511]/95 backdrop-blur-md border-t border-[#C08B6B]/20 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-3 transition-transform duration-300 ${
          isOpen ? "translate-y-full pointer-events-none" : "translate-y-0"
        }`}
      >
        <a
          href="tel:+919058383905"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full border border-[#C08B6B]/40 text-[#F6EFE6] text-[11px] font-sans tracking-[0.18em] uppercase active:scale-95 transition-transform"
          aria-label="Call clinic directly"
        >
          <Phone size={13} className="text-[#C08B6B]" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={handleConsultation}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-[#C08B6B] text-[#2A1D17] text-[11px] font-sans font-semibold tracking-[0.18em] uppercase active:scale-95 transition-transform shadow-lg cursor-pointer"
          aria-label="Book a clinical consultation now"
        >
          <MessageCircle size={13} />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
}
