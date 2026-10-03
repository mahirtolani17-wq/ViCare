import { motion } from "motion/react";
import { Star, ArrowRight, Quote } from "lucide-react";
import { reviewsData, googleStats } from "../data/reviews";

export default function PatientLove() {
  const noteParagraphs = [
    "For choosing us, again and again. For trusting us with your skin, your time, your journey. For believing in our care, not just our treatments. Every visit, every smile, every return means more than you know.",
    "You're part of us. You're not just a patient, you're our story. Every glow, every transformation, every memory, we make it together. Your journey lives in our hearts, not just our records.",
    "Thank you.",
    "We exist because of you: your trust, your belief, your choice to walk this journey with us. And we'll always care for you like our own, with honesty, dedication, and love in every touch, every treatment, every moment."
  ];

  return (
    <section
      className="relative w-full bg-[#2A1D17] text-[#F6EFE6] py-24 md:py-32 overflow-hidden"
      id="reviews"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C08B6B]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative vertical line with Sparkle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/20 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Entrance Opening Text */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
            OUR SACRED PROMISE
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#F6EFE6] tracking-[0.1em] uppercase font-normal mt-3">
            THIS IS FOR YOU.
          </h2>
        </div>

        {/* DR. JUHI'S HEARTFELT NOTE TO PATIENTS IN GATCHINA */}
        <div className="flex flex-col gap-8 md:gap-10 text-center max-w-2xl mx-auto mb-24">
          {noteParagraphs.map((para, i) => (
            <motion.p
              key={i}
              className={`font-editorial leading-relaxed text-[#E8D9C6]/95 tracking-normal font-normal ${
                i === 2
                  ? "text-3xl md:text-5xl text-[#C08B6B] tracking-wide my-2"
                  : "text-base sm:text-xl"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
            >
              {para}
            </motion.p>
          ))}

          {/* Note Sign-Off */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="font-editorial text-lg tracking-normal text-[#C08B6B] block font-normal">
              Dr. Juhi Ochwani
            </span>
            <span className="text-[10px] font-sans font-medium tracking-[0.22em] text-[#B9A58E] uppercase mt-1 block">
              and the ViCare team
            </span>
          </motion.div>
        </div>

        {/* VERIFIED GOOGLE RATING STATS BADGE */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-1 text-[#C08B6B] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C08B6B" />
            ))}
          </div>
          <a
            href={googleStats.listingUrl}
            target="_blank"
            rel="no-referrer"
            className="group flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-serif text-3xl font-bold tracking-widest text-[#F6EFE6]">
              {googleStats.rating} ★
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C08B6B]" />
            <span className="text-xs tracking-widest text-[#B9A58E] uppercase">
              {googleStats.totalReviews} Google Reviews
            </span>
          </a>
        </motion.div>
      </div>

      {/* INFINITE DRIFTING TESTIMONIAL MARQUEE */}
      <div className="w-full relative overflow-hidden py-4 border-t border-b border-[#C08B6B]/10 bg-[#1F1511]/40">
        <div className="flex gap-6 animate-marquee whitespace-nowrap group hover:[animation-play-state:paused]">
          {/* First loop of items */}
          <div className="flex gap-6 shrink-0">
            {reviewsData.map((rev, idx) => (
              <TestimonialCard key={`marquee-1-${idx}`} review={rev} />
            ))}
          </div>
          {/* Second loop of items for seamless transition */}
          <div className="flex gap-6 shrink-0" aria-hidden="true">
            {reviewsData.map((rev, idx) => (
              <TestimonialCard key={`marquee-2-${idx}`} review={rev} />
            ))}
          </div>
        </div>
      </div>

      {/* EXTERNAL LINKING */}
      <div className="mt-12 text-center">
        <a
          href={googleStats.listingUrl}
          target="_blank"
          rel="no-referrer"
          className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-[#C08B6B] hover:text-[#F6EFE6] transition-colors uppercase"
        >
          <span>READ ALL REVIEWS ON GOOGLE MAPS</span>
          <ArrowRight size={12} />
        </a>
      </div>
    </section>
  );
}

function TestimonialCard({ review }: { review: typeof reviewsData[0] }) {
  return (
    <div className="inline-flex flex-col bg-[#2A1D17] border border-[#C08B6B]/15 p-6 rounded-2xl w-[85vw] max-w-[420px] whitespace-normal shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-[#C08B6B]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill="#C08B6B" />
          ))}
        </div>
        <Quote size={14} className="text-[#C08B6B]/20" />
      </div>
      <p className="text-xs md:text-sm text-[#E8D9C6] leading-relaxed tracking-wide font-light mb-4 italic">
        {review.text}
      </p>
      <div className="mt-auto border-t border-[#C08B6B]/10 pt-3 flex items-center justify-between">
        <span className="text-[10px] tracking-widest text-[#F6EFE6] uppercase font-semibold">
          {review.author}
        </span>
        {review.treatment && (
          <span className="text-[9px] tracking-wider text-[#B9A58E] italic">
            {review.treatment}
          </span>
        )}
      </div>
    </div>
  );
}
