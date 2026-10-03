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

const Skiper49 = () => {
  const images = [
    {
      src: "https://i.ibb.co/B5cv1NSm/clinic-1.jpg",
      alt: "ViCare Flagship Entry & Reception Lounge",
    },
    {
      src: "https://i.ibb.co/chb1vWGP/clinic-2.jpg",
      alt: "Pristine Clinical Consultation Office",
    },
    {
      src: "https://i.ibb.co/WNQ2Lf7q/clinic-3.jpg",
      alt: "State-of-the-Art Dermal Laser Suite",
    },
    {
      src: "https://i.ibb.co/zVjFPmZr/clinic-4.jpg",
      alt: "Modern Therapy & Recovery Room",
    }
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent py-2">
      <Carousel_003 images={images} showPagination loop />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  showPagination = true,
  loop = true,
  autoplay = true,
  spaceBetween = 20,
}: {
  images: { src: string; alt: string }[];
  showPagination?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 480px;
    padding-bottom: 60px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 340px;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
    border: 5px solid #ffffff;
    box-shadow: 0 15px 35px -10px rgba(42,29,23,0.2);
    transition: all 0.4s ease;
  }

  @media (max-width: 640px) {
    .Carousal_003 {
      height: 380px;
    }
    .Carousal_003 .swiper-slide {
      width: 260px;
    }
  }

  .swiper-pagination-bullet {
    background-color: #C08B6B !important;
    opacity: 0.3 !important;
    width: 8px !important;
    height: 8px !important;
    transition: all 0.3s ease !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #C08B6B !important;
    opacity: 1 !important;
    width: 24px !important;
    border-radius: 4px !important;
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
      className="relative w-full max-w-5xl"
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
                  delay: 3000,
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
            rotate: 15,
            stretch: -10,
            depth: 100,
            modifier: 1.2,
            slideShadows: false,
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
                onError={(e) => {
                  // Fallback to standard URL in case of DNS/caching issues
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes(".jpg")) {
                    target.src = target.src.replace(".jpg", ".png");
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D17]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-[#F6EFE6] text-sm font-sans font-medium tracking-wider uppercase">
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
