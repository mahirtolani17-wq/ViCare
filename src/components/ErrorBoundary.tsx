import React, { Component, ErrorInfo, ReactNode } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught clinical applet error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-[#2A1D17] text-[#F6EFE6] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E8D9C6] via-[#F6EFE6] to-[#D9A39B]/30 border-4 border-white shadow-xl flex items-center justify-center mb-6">
            <span className="font-sans text-2xl text-[#2A1D17] font-semibold">V+</span>
          </div>
          <h2 className="font-display text-3xl text-[#C08B6B] tracking-wide mb-3 uppercase">
            ViCare Aesthetique
          </h2>
          <p className="font-editorial text-lg text-[#E8D9C6] max-w-md mx-auto mb-8 font-light">
            We are refining your view. In the meantime, our doctor-led services are fully operational. Come say hi.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <a
              href="tel:+919058383905"
              className="flex items-center justify-center gap-3 py-3.5 rounded-full bg-[#C08B6B] text-[#2A1D17] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#E8D9C6] active:scale-95 transition-all shadow-md"
            >
              <Phone size={14} />
              <span>Call Clinic</span>
            </a>
            <a
              href="https://wa.me/919058383905"
              className="flex items-center justify-center gap-3 py-3.5 rounded-full border border-[#C08B6B]/40 text-[#F6EFE6] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#C08B6B]/20 active:scale-95 transition-all"
            >
              <MessageCircle size={14} className="text-[#C08B6B]" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href="https://maps.google.com/?q=Karnavati+Infinity+Living+Bhat+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 rounded-full border border-white/20 text-[#E8D9C6] font-sans text-xs font-bold tracking-widest uppercase hover:bg-white/5 active:scale-95 transition-all"
            >
              <MapPin size={14} className="text-[#C08B6B]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
