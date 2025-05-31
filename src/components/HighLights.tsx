"use client";

import Link from "next/link";
import Carousel from "./Carousel";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "@/utils";
import Image from "next/image";

const HighLights = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set("#title", { opacity: 0, y: 20 });
    gsap.set(".link", { opacity: 0, y: 20 });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate IN
          gsap.to("#title", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to(".link", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25,
            ease: "power2.out",
          });
        } else {
          // Animate OUT
          gsap.to("#title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.inOut",
          });
          gsap.to(".link", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.inOut",
          });
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#101010] py-20" ref={containerRef}>
      <div className="flex w-full screen-max-width justify-between items-baseline mb-15 max-md:flex-col max-md:px-5">
        <h1 id="title" className="section-heading">
          Get the highlights.
        </h1>
        <div className="flex gap-10 max-md:pt-2">
          <Link href={"#"} className="link">
            <p className="max-md:text-sm">Watch the film</p>
            <Image src={watchImg} alt="" className="ml-2" />
          </Link>
          <Link href={"#"} className="link">
            <p className="max-md:text-sm"> Watch the event</p>
            <Image src={rightImg} alt="" className="ml-2" />
          </Link>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default HighLights;
