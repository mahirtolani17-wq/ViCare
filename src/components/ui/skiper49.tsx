import { motion } from "motion/react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";

// Helper function to concatenate classnames
function cnLocal(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const Skiper49 = () => {
  const images = [
    {
      src: "https://i.ibb.co/DHzmqpSN/Screenshot-2026-10-03-at-2-36-34-PM.png",
      alt: "ViCare Flagship Spa & Treatment Lounge",
    },
    {
      src: "https://i.ibb.co/k23xyLRp/Screenshot-2026-10-03-at-2-36-49-PM.png",
      alt: "Pristine US FDA Laser Suite",
    },
    {
      src: "https://i.ibb.co/8nJ7H9GT/Screenshot-2026-10-03-at-2-37-13-PM.png",
      alt: "Dr. Juhi Consultation Suite",
    },
    {
      src: "https://i.ibb.co/k2kJqGXx/Screenshot-2026-10-03-at-2-37-30-PM.png",
      alt: "Elegant Waiting Reception & Welcome Bar",
    }
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_003 className="" images={images} showPagination loop />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  loop = true,
  autoplay = true,
  spaceBetween = 12,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 380px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 310px;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    border: 4px solid #F6EFE6;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.35);
  }

  .swiper-pagination-bullet {
    background-color: #C08B6B !important;
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className={cnLocal("relative w-full max-w-4xl px-2 md:px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative group">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-sans font-medium tracking-wider uppercase">
                  {image.alt}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
export default Skiper49;
