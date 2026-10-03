import { Phone, MessageCircle, MapPin, Instagram, Clock, Star, ArrowUpRight } from "lucide-react";
import { googleStats } from "../data/reviews";

export default function Contact() {
  const mapsUrl = "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjYjLCIv52XAxUAAAAAHQAAAAAQCA..i&client=safari&udm&fvr=1&pvq=Cg0vZy8xMXdwN3lkZDE2IhgKEnYgY2FyZSBjbGluaWMgYmhhdBACGAM&lqi=ChJ2 IGNhcmUgY2xpbmljIGJoYXRIpuDY_tS7gIAIWiAQABABEAIQAxgCGAMiEnYgY2FyZSBjbGluaWMgYmhhdJIBEHNraW5fY2FyZV9jbGluaWM&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x395e81b95ee50919:0xe3fd1bdf21b259c9";
  const whatsappUrl = `https://wa.me/919058383905?text=${encodeURIComponent("Hi ViCare, I would like to schedule an appointment.")}`;

  return (
    <section
      className="relative w-full bg-[#1F1511] text-[#F6EFE6] py-24 md:py-32 overflow-hidden border-t border-[#C08B6B]/15"
      id="visit"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C08B6B]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/25 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
            LOCATE & CONNECT
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#F6EFE6] tracking-[0.1em] uppercase font-normal mt-3">
            VISIT US.
          </h2>
          <p className="mt-4 font-editorial text-sm sm:text-base text-[#E8D9C6]/90 tracking-normal font-normal max-w-lg mx-auto leading-relaxed">
            Experience elevated clinical care in a serene sanctuary designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: DIRECT CONTACT & DETAILS (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Direct WhatsApp Callout Banner */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="no-referrer"
              className="flex items-center justify-between p-6 rounded-2xl bg-[#2A1D17] border border-[#C08B6B]/30 hover:border-[#C08B6B] transition-all group shadow-xl hover:shadow-[#C08B6B]/10 active:scale-98"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C08B6B] flex items-center justify-center text-[#1F1511] shrink-0 shadow-lg">
                  <MessageCircle size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.25em] text-[#C08B6B] uppercase font-semibold">DIRECT BOOKING</span>
                  <span className="font-serif text-lg text-[#F6EFE6] tracking-wide font-medium">Chat on WhatsApp</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#C08B6B]/30 flex items-center justify-center text-[#C08B6B] group-hover:border-[#C08B6B] group-hover:translate-x-1 transition-all">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Grid of contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call target */}
              <a
                href="tel:+919058383905"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#2A1D17] border border-[#C08B6B]/10 hover:border-[#C08B6B] transition-all min-h-[48px] active:scale-98 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C08B6B]/15 flex items-center justify-center text-[#C08B6B] shrink-0">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-[#B9A58E] uppercase">CLINIC TEL</span>
                  <span className="text-sm font-semibold tracking-wider text-[#F6EFE6]">090583 83905</span>
                </div>
              </a>

              {/* Instagram target */}
              <a
                href="https://www.instagram.com/vicare_in"
                target="_blank"
                rel="no-referrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#2A1D17] border border-[#C08B6B]/10 hover:border-[#C08B6B] transition-all min-h-[48px] active:scale-98 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C08B6B]/15 flex items-center justify-center text-[#C08B6B] shrink-0">
                  <Instagram size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-[#B9A58E] uppercase">INSTAGRAM</span>
                  <span className="text-sm font-semibold tracking-wider text-[#F6EFE6]">@vicare_in</span>
                </div>
              </a>

              {/* Hours target */}
              <div
                className="sm:col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-[#2A1D17] border border-[#C08B6B]/10 min-h-[48px]"
              >
                <div className="w-10 h-10 rounded-full bg-[#C08B6B]/15 flex items-center justify-center text-[#C08B6B] shrink-0">
                  <Clock size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-[#B9A58E] uppercase">CLINIC HOURS</span>
                  <span className="text-sm font-semibold tracking-wider text-[#F6EFE6]">Mon - Sat: 10:00 am - 8:00 pm (By Appointment)</span>
                </div>
              </div>
            </div>

            {/* Address Target */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="no-referrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#2A1D17] border border-[#C08B6B]/10 hover:border-[#C08B6B] transition-all min-h-[48px] active:scale-98 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C08B6B]/15 flex items-center justify-center text-[#C08B6B] shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] tracking-widest text-[#B9A58E] uppercase">CLINIC ADDRESS (TAP FOR DIRECTIONS)</span>
                <span className="text-xs md:text-sm text-[#F6EFE6] leading-relaxed mt-0.5 font-light">
                  Karnavati Infinity Living, 19, 107, near Indian Oil Petrol Pump, Bhat, Ahmedabad, Gujarat 382428
                </span>
              </div>
            </a>

            {/* Google Rating Badge */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#2A1D17]/60 border border-[#C08B6B]/10">
              <div className="flex items-center gap-2">
                <div className="flex text-[#C08B6B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C08B6B" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#F6EFE6]">{googleStats.rating} Rating</span>
              </div>
              <span className="text-[10px] tracking-widest text-[#B9A58E] uppercase font-light">
                {googleStats.totalReviews} Verified Google Reviews
              </span>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE MAP TILE (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="no-referrer"
              className="relative w-full aspect-[4/3] rounded-3xl bg-[#2A1D17] border border-[#C08B6B]/20 overflow-hidden flex items-center justify-center hover:border-[#C08B6B] transition-all group shadow-2xl"
            >
              {/* Graphic grid representations of streets */}
              <div className="absolute inset-0 bg-grid-lines opacity-15" />
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#C08B6B]/20 rotate-12" />
              <div className="absolute left-1/3 top-0 bottom-0 w-[2px] bg-[#C08B6B]/20 -rotate-45" />
              
              {/* Pulsating glowing pin mark */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[#C08B6B] opacity-45 animate-ping" />
                  <div className="w-12 h-12 rounded-full bg-[#C08B6B] border-2 border-[#1F1511] flex items-center justify-center text-[#1F1511] shadow-xl">
                    <MapPin size={22} fill="#1F1511" />
                  </div>
                </div>
                <span className="bg-[#1F1511] border border-[#C08B6B]/40 px-4 py-2 rounded-xl text-[10px] font-bold tracking-[0.3em] uppercase shadow-md group-hover:border-[#C08B6B]">
                  VICARE BHAT, AHMEDABAD
                </span>
                <span className="text-[10px] tracking-widest text-[#C08B6B] uppercase font-medium">
                  Tap to navigate in Google Maps →
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
