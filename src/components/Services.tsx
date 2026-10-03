import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicesData, Service } from "../data/services";
import { Search, MessageCircle, ArrowUpRight, HelpCircle } from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Filter & search logic
  const filteredCategories = servicesData.map((cat) => {
    // If the category filter is active, check if it matches
    const isCatMatch = activeCategory === "all" || cat.id === activeCategory;
    
    // Filter services based on search query
    const filteredServices = cat.services.filter((srv) =>
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      services: isCatMatch ? filteredServices : []
    };
  }).filter((cat) => cat.services.length > 0);

  const totalFilteredCount = filteredCategories.reduce((acc, cat) => acc + cat.services.length, 0);

  const toggleExpand = (name: string) => {
    if (expandedService === name) {
      setExpandedService(null);
    } else {
      setExpandedService(name);
    }
  };

  return (
    <section
      className="relative w-full bg-[#2A1D17] text-[#F6EFE6] py-24 md:py-32 overflow-hidden"
      id="services"
    >
      {/* Decorative center Sparkle Star with Hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#C08B6B]/20 flex flex-col justify-end items-center">
        <div className="w-2 h-2 rotate-45 bg-[#C08B6B]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header Title block */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#C08B6B] text-[11px] font-sans font-medium tracking-[0.22em] uppercase">
            TREATMENT CATALOGUE
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#F6EFE6] tracking-[0.1em] uppercase font-normal mt-3">
            SERVICES INDEX
          </h2>
          <p className="mt-4 font-editorial text-sm sm:text-base text-[#E8D9C6]/90 tracking-normal font-normal max-w-md mx-auto leading-relaxed">
            A comprehensive clinical list of facial, body, hair, makeup, and wellness therapies.
          </p>
        </div>

        {/* CONTROLS STICKY CONTAINER */}
        <div className="sticky top-[72px] md:top-[88px] z-20 bg-[#2A1D17]/90 backdrop-blur-md border border-[#C08B6B]/15 rounded-3xl p-3 md:p-4 mb-12 shadow-xl">
          <div className="flex flex-col gap-4">
            
            {/* 1. Search Bar */}
            <div className="relative w-full">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B9A58E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments (e.g. Lip Fillers, Hydrafacial, PRP...)"
                className="w-full pl-11 pr-4 py-3 bg-[#1F1511] text-[#F6EFE6] placeholder-[#B9A58E]/50 text-xs font-sans rounded-2xl border border-[#C08B6B]/10 focus:outline-none focus:border-[#C08B6B] transition-colors"
              />
            </div>

            {/* 2. Horizontal Category Filter Bar */}
            <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none scroll-smooth">
              <button
                onClick={() => setActiveCategory("all")}
                className={`py-2 px-4 rounded-full text-[11px] font-sans font-medium tracking-[0.18em] uppercase shrink-0 transition-colors cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#C08B6B] text-[#2A1D17]"
                    : "bg-[#1F1511] text-[#B9A58E] hover:text-[#F6EFE6] border border-[#C08B6B]/5"
                }`}
              >
                All Services
              </button>
              {servicesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`py-2 px-4 rounded-full text-[11px] font-sans font-medium tracking-[0.18em] uppercase shrink-0 transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#C08B6B] text-[#2A1D17]"
                      : "bg-[#1F1511] text-[#B9A58E] hover:text-[#F6EFE6] border border-[#C08B6B]/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* LIVING INDEX RESULTS LIST */}
        <div className="flex flex-col gap-12 min-h-[300px]">
          {totalFilteredCount > 0 ? (
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  layoutId={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  {/* Category Title Header in Gatchina */}
                  <h3 className="font-editorial text-2xl md:text-3xl text-[#C08B6B] tracking-normal border-b border-[#C08B6B]/20 pb-2 mb-4 font-normal">
                    {category.name}
                  </h3>

                  {/* Services Row List */}
                  <div className="flex flex-col divide-y divide-[#C08B6B]/10">
                    {category.services.map((srv) => {
                      const isExpanded = expandedService === srv.name;
                      const enquireUrl = `https://wa.me/919058383905?text=${encodeURIComponent(srv.whatsappMessage)}`;

                      return (
                        <div
                          key={srv.name}
                          className="relative group transition-colors duration-300"
                        >
                          {/* Main Row Touch Target */}
                          <button
                            onClick={() => toggleExpand(srv.name)}
                            className="w-full text-left py-6 flex items-center justify-between gap-6 hover:pl-2 transition-all duration-300 cursor-pointer"
                          >
                            <span className="font-editorial text-xl md:text-2xl text-[#F6EFE6] group-hover:text-[#C08B6B] tracking-normal transition-colors font-normal">
                              {srv.name}
                            </span>
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="text-[9px] tracking-widest text-[#B9A58E]/60 uppercase hidden sm:inline">
                                {isExpanded ? "Close" : "Explore"}
                              </span>
                              <motion.div
                                animate={{ rotate: isExpanded ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-8 h-8 rounded-full border border-[#C08B6B]/20 flex items-center justify-center text-[#C08B6B] group-hover:border-[#C08B6B]"
                              >
                                <ArrowUpRight size={14} />
                              </motion.div>
                            </div>
                          </button>

                          {/* Expanding Detail Panel */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pb-6 px-2 md:px-4 grid grid-cols-1 md:grid-cols-4 gap-6 items-start bg-[#F6EFE6]/5 rounded-2xl p-6 border border-[#C08B6B]/10 mb-4 shadow-inner">
                                  <div className="md:col-span-3 flex flex-col gap-2">
                                    <span className="text-[10px] tracking-[0.3em] text-[#C08B6B] uppercase font-semibold">
                                      TREATMENT DETAILS
                                    </span>
                                    <p className="text-xs md:text-sm text-[#E8D9C6] leading-relaxed tracking-wide font-light max-w-xl">
                                      {srv.description}
                                    </p>
                                  </div>
                                  <div className="flex flex-col gap-3 justify-end items-stretch md:items-end w-full h-full">
                                    <a
                                      href={enquireUrl}
                                      target="_blank"
                                      rel="no-referrer"
                                      className="flex items-center justify-center gap-2 px-5 py-3 bg-[#C08B6B] text-[#2A1D17] text-[10px] font-bold tracking-[0.2em] rounded-full hover:bg-[#E8D9C6] transition-colors uppercase text-center cursor-pointer shadow-lg"
                                    >
                                      <MessageCircle size={12} />
                                      <span>Enquire on WA</span>
                                    </a>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4 bg-[#F6EFE6]/5 border border-[#C08B6B]/10 rounded-3xl">
              <HelpCircle size={32} className="text-[#B9A58E]/40" />
              <div>
                <h4 className="font-serif text-lg text-[#F6EFE6] tracking-wider uppercase mb-1">
                  No treatments found
                </h4>
                <p className="text-xs text-[#B9A58E] max-w-xs">
                  We couldn't find matches for "{searchQuery}". Try searching general keywords like "Filler", "Facial" or "Laser".
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-2 px-5 py-2 bg-[#C08B6B] text-[#2A1D17] text-[10px] font-bold tracking-widest rounded-full uppercase cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
