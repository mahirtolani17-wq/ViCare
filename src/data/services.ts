export interface Service {
  name: string;
  description: string;
  whatsappMessage: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "face-injectables",
    name: "Face & Injectables",
    services: [
      {
        name: "Lip Fillers",
        description: "Fuller, natural volume. Smoother, hydrated, and precisely defined lip contour.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Lip Fillers."
      },
      {
        name: "Face Fillers",
        description: "Restores volume and structure to cheeks, jawline, and tear troughs.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Face Fillers."
      },
      {
        name: "Botox",
        description: "Softens fine lines and dynamic wrinkles for a refreshed, youthful look.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Botox treatments."
      },
      {
        name: "Mesobotox",
        description: "Micro-doses of wrinkle relaxers for an instant glow, refined pores, and reduced oil production.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Mesobotox."
      },
      {
        name: "Threadlift",
        description: "Non-surgical lifting of the mid-face, jawline, and neck using advanced suture technology.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Threadlifts."
      },
      {
        name: "Neck Lifting",
        description: "Tightens loose skin and defines the neck silhouette using injectables and threads.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Neck Lifting."
      },
      {
        name: "Skin Boosters",
        description: "Deep dermal hydration using micro-injectable hyaluronic acid formulas.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Skin Boosters."
      },
      {
        name: "Profhilo",
        description: "Bio-remodeling treatment that stimulates collagen and elastin to firm skin from within.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Profhilo treatments."
      },
      {
        name: "Skinvive",
        description: "FDA-approved microdroplet injection to improve cheek skin smoothness and lasting radiance.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Skinvive."
      },
      {
        name: "Skinvital",
        description: "Rich nutrient mesotherapy supplying essential amino acids and vitamins deep into the skin.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Skinvital."
      },
      {
        name: "Sculptra",
        description: "Injectable poly-L-lactic acid that naturally boosts collagen production over time.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Sculptra."
      },
      {
        name: "Exosomes",
        description: "Next-generation cellular therapy that dramatically accelerates tissue regeneration and radiance.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Exosome therapies."
      }
    ]
  },
  {
    id: "skin",
    name: "Skin Clinics",
    services: [
      {
        name: "Hydrafacial",
        description: "Patented 3-step system to cleanse, extract, and hydrate for an instant, healthy glow.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Hydrafacial treatment."
      },
      {
        name: "Hydraglow Facial",
        description: "Premium hydration facial combined with vitamin infusions for immediate dewiness.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Hydraglow Facial."
      },
      {
        name: "Korean Facial",
        description: "Glass skin facial incorporating advanced oxygen therapy and calming botanical essences.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Korean Glass Skin Facial."
      },
      {
        name: "Medicated Facials",
        description: "Dermatologically curated skin therapies targetted to sensitive, dry, or oily skin types.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Medicated Facials."
      },
      {
        name: "Carbon Facial",
        description: "Laser carbon peel to deeply exfoliate skin, reduce pores, and stimulate collagen.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Carbon Facials."
      },
      {
        name: "Hollywood Facial",
        description: "The ultimate red-carpet laser peel for immediate tone correction and radiance.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Hollywood Facial."
      },
      {
        name: "Oxygeno Facial",
        description: "3-in-1 super facial that exfoliates, oxygenates from within, and infuses active ingredients.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Oxygeno Facial."
      },
      {
        name: "Vampire Facial",
        description: "Microneedling combined with your own growth factors to rebuild skin structure and texture.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Vampire Facial."
      },
      {
        name: "Microneedling",
        description: "Collagen induction therapy that smooths acne scars, fine lines, and texture.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Microneedling."
      },
      {
        name: "Microdermabrasion",
        description: "Gentle physical exfoliation to resurface dead cells and reveal brighter skin.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Microdermabrasion."
      },
      {
        name: "Salicylic Peel",
        description: "Targeted beta-hydroxy acid peel to clear sebum, blackheads, and active acne.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Salicylic Acid Peel."
      },
      {
        name: "Yellow Peel",
        description: "Advanced retinol peel for dramatic pigment correction, melasma reduction, and skin renewal.",
        whatsappMessage: "Hi ViCare, I would like to enquire about the Yellow Peel."
      },
      {
        name: "Deep Peelings",
        description: "Medical-grade chemical exfoliation designed for stubborn discoloration and deep scarring.",
        whatsappMessage: "Hi ViCare, I would like to enquire about medical-grade Deep Peels."
      },
      {
        name: "Acne Treatment",
        description: "Comprehensive medical and aesthetic protocol to control acne and prevent scarring.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Acne Treatments."
      },
      {
        name: "Pigmentation Solutions",
        description: "Tailored combination of peels, laser, and topical programs to fade spots and melasma.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Pigmentation Solutions."
      },
      {
        name: "Melasma Removal",
        description: "Targeted clinical treatments for persistent hormonal pigmentation.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Melasma treatments."
      },
      {
        name: "Scar Remodeling",
        description: "Advanced medical treatment combining microneedling, laser, and subcision for deep scars.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Scar Remodeling."
      },
      {
        name: "Dark Circle Removal",
        description: "A combination of light peels, skin boosters, and targeted care to brighten tired eyes.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Dark Circle treatments."
      },
      {
        name: "Wart Removal",
        description: "Quick, painless radiofrequency removal of benign skin lesions and warts.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Wart Removal."
      },
      {
        name: "Mole Removal",
        description: "Precise clinical excision or laser ablation of unwanted moles.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Mole Removal."
      },
      {
        name: "Psoriasis Treatment",
        description: "Medical management and soothing topical therapies to treat psoriasis flare-ups.",
        whatsappMessage: "Hi ViCare, I would like to enquire about clinical Psoriasis treatments."
      },
      {
        name: "Anti-Aging Solutions",
        description: "Customized aesthetic plans focused on skin elasticity, hydration, and cellular turnover.",
        whatsappMessage: "Hi ViCare, I would like to enquire about general Anti-Aging plans."
      },
      {
        name: "Wrinkle Removal",
        description: "Medical and laser therapies focused on smoothing static wrinkles.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Wrinkle Smoothing."
      }
    ]
  },
  {
    id: "laser-body",
    name: "Laser & Body",
    services: [
      {
        name: "Laser Hair Removal",
        description: "Painless triple-wavelength laser technology for smooth, hair-free skin.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Laser Hair Removal packages."
      },
      {
        name: "Laser Skin Therapy",
        description: "Targets vascular lesions, redness, and capillary issues with extreme precision.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Laser Skin Therapy."
      },
      {
        name: "Laser Skin Rejuvenation",
        description: "Stimulates deep skin layers to restore brightness, firmness, and uniform tone.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Laser Skin Rejuvenation."
      },
      {
        name: "Laser Resurfacing",
        description: "CO2 fractional or Erbium laser to completely restructure scarred or sun-damaged skin.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Fractional Laser Resurfacing."
      },
      {
        name: "Q-Switch Laser",
        description: "Gold-standard pigmentation laser for freckles, sunspots, and skin toning.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Q-Switch Laser treatments."
      },
      {
        name: "Pico Laser Treatment",
        description: "Ultra-fast picosecond pulses that shatter pigment particles with zero heat damage.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Pico Laser treatments."
      },
      {
        name: "Tattoo Removal",
        description: "Clinical tattoo clearance utilizing high-precision laser wavelengths.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Tattoo Removal."
      },
      {
        name: "Colour Tattoo Removal",
        description: "Advanced multi-wavelength laser customized to breakdown complex tattoo inks.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Colour Tattoo Removal."
      },
      {
        name: "Tan Removal",
        description: "Combination of skin resurfacing peels and lasers to instantly reverse sun tanning.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Tan Removal treatments."
      },
      {
        name: "Skin Tightening",
        description: "Radiofrequency and ultrasound energy to naturally firm up loose, sagging skin.",
        whatsappMessage: "Hi ViCare, I would like to enquire about non-surgical Skin Tightening."
      },
      {
        name: "CoolSculpting",
        description: "Non-invasive fat freezing to contour stubborn bulges and sculpt your silhouette.",
        whatsappMessage: "Hi ViCare, I would like to enquire about CoolSculpting."
      },
      {
        name: "Lymphatic Drainage",
        description: "Calming body treatment to reduce swelling, speed up recovery, and detoxify.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Lymphatic Drainage therapy."
      },
      {
        name: "Face Gymming",
        description: "Deep tissue massage and muscle stimulation to sculpt facial contours and lift cheeks.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Face Gymming."
      }
    ]
  },
  {
    id: "hair",
    name: "Hair Services",
    services: [
      {
        name: "Hair Transplants",
        description: "FUE & advanced graft placement for density restoration with natural-looking hair lines.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Hair Transplants."
      },
      {
        name: "Hair PRP",
        description: "Growth-factor hair therapy that wakes up sleeping follicles and stops hair thinning.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Hair PRP treatment."
      }
    ]
  },
  {
    id: "permanent-makeup",
    name: "Permanent Makeup",
    services: [
      {
        name: "Lip Tinting",
        description: "Soft. Natural. Blushed. Even pigmentation with a rosy, healthy everyday glow.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Lip Tinting / Blush."
      },
      {
        name: "Microblading",
        description: "Sparsely filled brows redefined with tiny, hyper-realistic, hair-like strokes.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Eyebrow Microblading."
      },
      {
        name: "Ombre Eyebrows",
        description: "Soft powder gradient brow look for a clean, naturally structured makeup finish.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Ombre Eyebrows."
      },
      {
        name: "Permanent Blush",
        description: "Subtle blush shading on cheeks to give a healthy, sun-kissed pink glow.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Permanent Blush."
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness",
    services: [
      {
        name: "iV Glow Drips",
        description: "Intravenous vitamins and hydration formula designed to revitalize and boost overall skin glow.",
        whatsappMessage: "Hi ViCare, I'd like to book an iV Glow Drip."
      },
      {
        name: "Glutathione Drips",
        description: "Antioxidant-rich iV drips that naturally detoxify cells and even out overall skin tone.",
        whatsappMessage: "Hi ViCare, I would like to enquire about Glutathione Drips."
      },
      {
        name: "Weight Loss Program",
        description: "A guided, doctor-supervised approach incorporating metabolic monitoring and custom therapy.",
        whatsappMessage: "Hi ViCare, I'd like to know more about your guided Weight Loss program."
      }
    ]
  }
];
