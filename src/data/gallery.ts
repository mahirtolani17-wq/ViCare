export interface GalleryAnnotation {
  text: string;
  side: "before" | "after";
  positionY: string; // e.g. "30%", "70%"
  positionX: string; // e.g. "20%", "80%"
}

export interface GalleryCase {
  id: string;
  category: "fillers" | "lip-tinting" | "jawline";
  title: string;
  tagline: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage?: string;
  afterImage?: string;
  fullPostImage?: string;
  annotations: GalleryAnnotation[];
  beforeGradient: string;
  afterGradient: string;
}

export const galleryCases: GalleryCase[] = [
  {
    id: "case-lip-fillers",
    category: "fillers",
    title: "FILLERS",
    tagline: "REFINE THE CONTOUR, RESTORE NATURAL HYDRATION.",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeImage: "/images/fillers-before.jpg",
    afterImage: "/images/fillers-after.jpg",
    fullPostImage: "/images/before-after-fillers.jpg",
    beforeGradient: "linear-gradient(to right, #e8d0bd, #dfb9a5)",
    afterGradient: "linear-gradient(to right, #dfa599, #d9a39b)",
    annotations: [] // No insights as requested
  },
  {
    id: "case-lip-tinting",
    category: "lip-tinting",
    title: "LIP TINTING",
    tagline: "SOFT COLOR INFUSION, EQUALIZING DEEP TONES.",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeImage: "/images/liptint-before.jpg",
    afterImage: "/images/liptint-after.jpg",
    fullPostImage: "/images/before-after-liptint.jpg",
    beforeGradient: "linear-gradient(to right, #d4beab, #ba9e8c)",
    afterGradient: "linear-gradient(to right, #dda298, #c68a7f)",
    annotations: [] // No insights as requested
  },
  {
    id: "case-perfect-jawline",
    category: "jawline",
    title: "PERFECT JAWLINE",
    tagline: "SCULPTED MANDIBULAR ANGLE, CHISELED PROFILE.",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
    beforeImage: "/images/jawline-before.png",
    afterImage: "/images/jawline-after.png",
    fullPostImage: "/images/jawline-source.png",
    beforeGradient: "linear-gradient(to right, #e3cbb4, #cca78b)",
    afterGradient: "linear-gradient(to right, #eacfbb, #dcb295)",
    annotations: [
      {
        text: "Blunt mandibular border & softness",
        side: "before",
        positionY: "45%",
        positionX: "25%"
      },
      {
        text: "Lack of acute jaw angle projection",
        side: "before",
        positionY: "65%",
        positionX: "30%"
      },
      {
        text: "Chiseled, defined jawline angle",
        side: "after",
        positionY: "40%",
        positionX: "70%"
      },
      {
        text: "Sharpened lower facial contour",
        side: "after",
        positionY: "65%",
        positionX: "75%"
      }
    ]
  }
];
