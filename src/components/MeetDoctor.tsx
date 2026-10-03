import { motion } from "motion/react";
import { Sparkles, Heart, ShieldAlert } from "lucide-react";

// Real owner photo of Dr. Juhi Ochwani
const DOCTOR_PHOTO_URL = "/images/dr-juhi-owner.jpg"; 

export default function MeetDoctor() {
  return (
    <section
      className="relative w-full bg-[#F6EFE6] text-[#2A1D17] py-24 md:py-32 overflow-hidden"
      id="doctor"
    >
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/30 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: ARCHED PORTRAIT FRAME (1 line change photo swap) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              className="relative w-full max-w-[380px] aspect-[3/4] bg-[#E8D9C6] rounded-t-[180px] border border-[#C08B6B]/25 overflow-hidden p-3 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Inside arched crop */}
              <div className="w-full h-full bg-[#2A1D17] rounded-t-[170px] overflow-hidden flex items-center justify-center relative group">
                {DOCTOR_PHOTO_URL ? (
                  <img
                    src={DOCTOR_PHOTO_URL}
                    alt="Dr. Juhi Ochwani - Medical Director of ViCare"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Ultra-luxurious SVG vector silhouette if no portrait photo provided */
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#2A1D17] to-[#1F1511]">
                    {/* Minimalist line art avatar of professional doctor */}
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      className="w-32 h-32 text-[#C08B6B]/40 group-hover:text-[#C08B6B]/70 transition-colors duration-500 mb-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="35" r="16" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M20 85 C20 65, 30 58, 50 58 C70 58, 80 65, 80 85"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M40 50 L46 58 L54 58 L60 50"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      {/* Sparkle details */}
                      <path d="M15 20 L18 25 L20 18 L15 20 Z" fill="#C08B6B" />
                    </svg>
                    
                    <span className="font-serif text-3xl tracking-[0.2em] text-[#F6EFE6] uppercase font-light">
                      JO
                    </span>
                    <span className="text-[10px] tracking-[0.3em] text-[#C08B6B] uppercase font-semibold mt-2">
                      DR. JUHI OCHWANI
                    </span>
                    <span className="text-[9px] text-[#B9A58E] tracking-wider mt-1 italic">
                      Founder & Physician
                    </span>
                  </div>
                )}

                {/* Arched border overlay effect */}
                <div className="absolute inset-3 rounded-t-[158px] border border-[#C08B6B]/15 pointer-events-none group-hover:border-[#C08B6B]/30 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CONTENT & PULL-QUOTE */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center">
            
            {/* Header section */}
            <div>
              <motion.span
                className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                MEET THE FOUNDER
              </motion.span>
              <motion.h3
                className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#2A1D17] tracking-tight font-normal mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Dr. Juhi Ochwani
              </motion.h3>
              <motion.p
                className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.18em] text-[#C08B6B] uppercase mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Aesthetic Physician & Injector · Medical Director
              </motion.p>
            </div>

            {/* Line by Line Bio Copy */}
            <div className="flex flex-col gap-4 text-xs sm:text-sm font-sans text-[#2A1D17]/85 leading-relaxed tracking-normal font-light max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Aesthetic therapies are not about changing who you are. They are a careful process of refinement, helping you align your outer beauty with your inner vitality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                At ViCare, we do not believe in cookie-cutter templates or miracle marketing. Under doctor-supervised standards, every consultation is an honest conversation about your unique skin biology, hair structure, and wellness goals.
              </motion.p>
            </div>

            {/* High Impact Pull-Quote in Gatchina */}
            <motion.div
              className="border-t border-b border-[#C08B6B]/20 py-6 my-4 max-w-xl flex items-center gap-6"
              initial={{ opacity: 0, scaleY: 0.8 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-[1.5px] h-12 bg-[#C08B6B]" />
              <div>
                <span className="text-[10px] font-sans tracking-[0.22em] text-[#B9A58E] uppercase font-medium block mb-1">
                  OUR PHILOSOPHY
                </span>
                <span className="font-editorial text-2xl sm:text-3xl text-[#C08B6B] tracking-normal font-normal">
                  “Care, not just treatments.”
                </span>
              </div>
            </motion.div>

            {/* Professional Ethics row */}
            <div className="flex flex-wrap gap-6 max-w-xl text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B9A58E]">
              <div className="flex items-center gap-2">
                <ShieldAlert size={14} className="text-[#C08B6B]" />
                <span>Physician Supervised</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-[#C08B6B]" />
                <span>Empathetic Dialogue</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#C08B6B]" />
                <span>Natural Restorations</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
