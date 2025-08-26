"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-x-hidden overflow-y-hidden">
      {/* Spotlights */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen max-w-full"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-0 left-[80%] max-sm:left-[50%] max-w-full"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw] max-w-full"
          fill="white"
        />
        <Spotlight
          className="left-full top-[100px] h-[80vh] w-[50vw] max-w-full"
          fill="white"
        />
        <Spotlight
          className="inset-0 h-[80vh] w-[50vw] max-w-full"
          fill="white"
        />
      </div>

      {/* Grid background */}
      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] 
          bg-gradient-to-b from-black/40 to-purple"
        />
      </div>

      {/* Content */}
      <div className="flex justify-center relative z-10">
        <div className="w-full px-4 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="I build scalable web apps and modern full stack websites."
            className="text-center text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl">
            Hi! I&apos;m Nomesh, a passionate full-stack developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Explore More"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
