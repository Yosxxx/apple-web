"use client";

import { chipImg, frameImg, frameVideo } from "@/utils";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), { ssr: false });

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      scale: 2,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="py-40 screen-max-width flex-center flex-col">
      <Image id="chip" src={chipImg} height={180} width={180} alt="A17 chip" />

      <div className="flex flex-col text-center mt-20">
        <div className="text-6xl font-bold flex flex-col mb-12">
          <span>A17 Pro chip.</span>
          <span>A monster for gaming</span>
        </div>
        <span className="text-gray-500 text-2xl">
          It&apos;s here. The biggest redesign in the history of Apple GPUs.
        </span>
      </div>

      <div className="mt-20 flex flex-col">
        <div className="relative h-full flex-center">
          <div className="overflow-hidden relative z-10">
            <Image
              src={frameImg}
              alt="iPhone gameplay frame"
              width={1200}
              height={800}
              className="bg-transparent"
            />
          </div>
          <div className="hiw-video">
            <VideoPlayer src={frameVideo} />
          </div>
        </div>

        <p className="text-gray-300 flex-center text-xl font-semibold mt-5">
          Honkai: Star Rail
        </p>
      </div>

      <div className="hiw-text-container mt-20 max-md:p-3">
        <div className="flex flex-1 justify-center flex-col">
          <p className="hiw-text ">
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-white">best graphic performance by far</span>.
          </p>
          <p className="hiw-text ">
            Mobile{" "}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and characters.
          </p>
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <p className="hiw-text">New</p>
          <p className="hiw-bigtext">Pro-class GPU</p>
          <p className="hiw-text">with 6 cores</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
