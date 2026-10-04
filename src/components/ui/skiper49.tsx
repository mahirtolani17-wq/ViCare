import { motion } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

// Helper function to concatenate classnames if utils is not present
function cnLocal(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const Skiper49 = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
      alt: "ViCare Dermal Laser Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      alt: "ViCare Clinical Consultation Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=1000",
      alt: "Advanced FDA-Approved Treatment Systems",
    },
    {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000",
      alt: "Quiet Luxury Waiting Lounge",
    },
    {
      src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1000",
      alt: "ViCare Main Reception Desk",
    },
    {
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
      alt: "Serene Wellness Treatment Lounge",
    }
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#2A1D17]/40 rounded-3xl p-4 md:p-6">
      <Carousel_003 className="" images={images} showPagination loop showNavigation />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = true,
  spaceBetween = 12,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
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
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
  }

  .swiper-pagination-bullet {
    background-color: #C08B6B !important;
  }

  .swiper-button-next, .swiper-button-prev {
    background-color: rgba(246, 239, 230, 0.9) !important;
    width: 44px !important;
    height: 44px !important;
    border-radius: 50% !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2) !important;
    border: 1px solid #C08B6B !important;
    transition: all 0.3s ease !important;
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: #C08B6B !important;
  }

  .swiper-button-next:hover svg, .swiper-button-prev:hover svg {
    color: #F6EFE6 !important;
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
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
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
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden flex items-center justify-center cursor-pointer">
                <ChevronRightIcon className="h-5 w-5 text-[#2A1D17]" />
              </div>
              <div className="swiper-button-prev after:hidden flex items-center justify-center cursor-pointer">
                <ChevronLeftIcon className="h-5 w-5 text-[#2A1D17]" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };
export default Skiper49;
