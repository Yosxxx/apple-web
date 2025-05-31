"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger

const images = [
  "/assets/images/carousel-1.jpg",
  "/assets/images/carousel-2.jpg",
  "/assets/images/carousel-3.jpg",
  "/assets/images/carousel-4.jpg",
  "/assets/images/carousel-5.jpg",
  "/assets/images/carousel-6.jpg",
  "/assets/images/carousel-7.jpg",
  "/assets/images/carousel-8.jpg",
];

const captions = [
  {
    title: "Photos & Videos",
    subtitle: "As stunning as your imagination.",
    textColor: "text-white",
  },
  {
    title: "Chip & Battery Power",
    subtitle: "Speed that lasts all day.",
    textColor: "text-white",
  },
  {
    title: "Innovation",
    subtitle: "Beautifully and durably designed.",
    textColor: "text-black",
  },
  {
    title: "Apple Intelligence",
    subtitle: "Amazingly capable possibilities.",
    textColor: "text-white",
  },
  {
    title: "Environment",
    subtitle: "Recycle. Reuse. Repeat.",
    textColor: "text-black",
  },
  {
    title: "Privacy",
    subtitle: "Your data. Where you want it.",
    textColor: "text-white",
  },
  {
    title: "Customize Your iPhone",
    subtitle: "Make it yours. Fully yours.",
    textColor: "text-white",
  },
  {
    title: "Peace of Mind",
    subtitle: "Helpful features. Just in case.",
    textColor: "text-white",
  },
];

export default function Carousel() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".swiper-slide", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".carousel-wrapper",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });
  }, []);

  return (
    <div className="carousel-wrapper py-16" ref={containerRef}>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={3}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="swiper-slide"
            style={{
              width: "min(80vw, 400px)",
              height: "700px",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow:
                "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
              <div className={`absolute top-6 left-6 ${captions[i].textColor}`}>
                <p className="text-sm font-semibold">{captions[i].title}</p>
                <p className="text-2xl font-bold leading-snug">
                  {captions[i].subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-pagination mt-15 flex justify-center gap-2" />

      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #444;
          opacity: 1;
          border-radius: 9999px;
          transition: background-color 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #d1d5dc;
        }
      `}</style>
    </div>
  );
}
