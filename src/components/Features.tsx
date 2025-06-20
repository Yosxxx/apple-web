"use client";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";
import { explore1Img, exploreVideo, explore2Img } from "@/utils";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Animate video when in view and auto-play
    gsap.fromTo(
      "#exploreVideo",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#exploreVideo",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        onStart: () => {
          videoRef.current?.play();
        },
      }
    );

    // Animate section title
    animateWithGsap("#features_title", { y: 0, opacity: 1 });

    // Animate images with scale
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );

    // Animate text blocks
    gsap.utils.toArray(".g_text").forEach((el) => {
      const target = el as HTMLElement;
      gsap.fromTo(
        target,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="h-full common-padding bg-[#101010] relative overflow-hidden max-md:p-3">
      <div className="screen-max-width">
        <div className="mb-30 w-full mt-20">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-60 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                muted
                preload="none"
                loop
                ref={videoRef}
                id="exploreVideo"
                className="w-full h-full object-cover object-center opacity-0"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore1Img}
                    alt=""
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image
                    src={explore2Img}
                    alt=""
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container min-h-[300px] mt-10  text-gray-300">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro Max is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>{" "}
                    You&apos;ll notice the difference the moment you pick one
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
