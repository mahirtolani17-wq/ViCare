import { MapPin, Phone, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const mapsUrl = "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjYjLCIv52XAxUAAAAAHQAAAAAQCA..i&client=safari&udm&fvr=1&pvq=Cg0vZy8xMXdwN3lkZDE2IhgKEnYgY2FyZSBjbGluaWMgYmhhdBACGAM&lqi=ChJ2 IGNhcmUgY2xpbmljIGJoYXRIpuDY_tS7gIAIWiAQABABEAIQAxgCGAMiEnYgY2FyZSBjbGluaWMgYmhhdJIBEHNraW5fY2FyZV9jbGluaWM&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x395e81b95ee50919:0xe3fd1bdf21b259c9";

  return (
    <footer className="relative w-full bg-[#1F1511] text-[#F6EFE6] border-t border-[#C08B6B]/10 py-16 md:py-24 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core footer layout split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 border-b border-[#C08B6B]/10 pb-16 items-start">
          
          {/* Logo Brand Columns (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/vicare-logo.png"
                alt="ViCare Aesthétique Logo"
                className="h-12 md:h-14 w-auto object-contain filter drop-shadow"
              />
            </div>

            <p className="text-xs md:text-sm text-[#B9A58E] leading-relaxed max-w-sm tracking-wide font-light">
              Refine. Enhance. Empower.
              <br />
              An advanced, doctor-supervised skincare and laser clinic in Bhat, Ahmedabad. Delivering quiet luxury, clinical trust, and genuine, customized care.
            </p>
          </div>

          {/* Directory column (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.3em] text-[#C08B6B] uppercase font-bold">
              DIRECTORY
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-[#E8D9C6]/80">
              <a href="#services" className="hover:text-[#C08B6B] transition-colors">Specialized Index</a>
              <a href="#results" className="hover:text-[#C08B6B] transition-colors">Before & After Gallery</a>
              <a href="#doctor" className="hover:text-[#C08B6B] transition-colors">Meet Dr. Juhi Ochwani</a>
              <a href="#reviews" className="hover:text-[#C08B6B] transition-colors">Verified Patient Reviews</a>
              <a href="#visit" className="hover:text-[#C08B6B] transition-colors">Visit & Booking</a>
            </div>
          </div>

          {/* Connect column (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.3em] text-[#C08B6B] uppercase font-bold">
              CONNECT
            </span>
            <div className="flex flex-col gap-3.5 text-xs text-[#E8D9C6]/80">
              <a href="tel:+919058383905" className="flex items-center gap-3 hover:text-[#C08B6B] transition-colors">
                <Phone size={14} className="text-[#C08B6B]" />
                <span>090583 83905</span>
              </a>
              <a href="https://www.instagram.com/vicare_in" target="_blank" rel="no-referrer" className="flex items-center gap-3 hover:text-[#C08B6B] transition-colors">
                <Instagram size={14} className="text-[#C08B6B]" />
                <span>@vicare_in on Instagram</span>
              </a>
              <a href={mapsUrl} target="_blank" rel="no-referrer" className="flex items-start gap-3 hover:text-[#C08B6B] transition-colors">
                <MapPin size={14} className="text-[#C08B6B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Karnavati Infinity Living, near Indian Oil Petrol Pump, Bhat, Ahmedabad, Gujarat 382428
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM REGULATORY COMPLIANCE DISCLAIMER & COPYRIGHT */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[10px] tracking-wider text-[#B9A58E] leading-relaxed uppercase">
          <div className="max-w-2xl">
            <p className="font-semibold text-[#C08B6B] mb-1">
              * MEDICAL DISCLAIMER
            </p>
            <p className="font-light normal-case">
              Medical aesthetic and laser treatments are performed under the direct supervision of qualified clinical professionals. Individual results vary significantly based on patient anatomy, lifestyle, and procedural parameters.
            </p>
            <p className="mt-2 text-[8px] font-light">
              © {new Date().getFullYear()} ViCare Skin Clinic. All rights reserved.
            </p>
            <p className="mt-1 text-[9px] text-[#B9A58E]/75 normal-case font-light">
              Typography: <span className="text-[#C08B6B]">Romano Revival</span> by Shady Khalaile (Red Pilgrim) &middot; <span className="text-[#C08B6B]">Gatchina</span> by Dimitri Antonov (Blue Curve Designstudio, CC BY 4.0) &middot; <span className="text-[#C08B6B]">Jost</span>.
            </p>
          </div>

          {/* Back to top anchor */}
          <button
            onClick={scrollUp}
            className="flex items-center gap-2 border border-[#C08B6B]/20 rounded-full px-4 py-2 hover:border-[#C08B6B] hover:text-[#C08B6B] active:scale-95 transition-all text-[#F6EFE6] shrink-0 cursor-pointer self-end md:self-auto"
            aria-label="Back to Top"
          >
            <span className="text-[9px] tracking-widest uppercase font-semibold">Back to Top</span>
            <ArrowUp size={12} className="text-[#C08B6B]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
