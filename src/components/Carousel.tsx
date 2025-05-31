"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        } else {
          gsap.to(el, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      },
      { threshold: 0.1 }
    );

    gsap.set(el, { opacity: 0, y: 50 }); // Initial state

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={carouselRef}
      style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "700px", overflow: "visible" }}
        className="mySwiper !overflow-visible"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "400px",
              height: "100%",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
