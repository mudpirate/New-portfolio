"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-x-hidden min-h-[100vh] flex items-center justify-center">
      {/* Spotlights */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight className="top-10 left-10 opacity-70 animate-spotlight-slow" />
        <Spotlight className="top-1/2 -left-20  opacity-70 animate-spotlight-slow" />
        <Spotlight className="bottom-10 right-10  opacity-70 animate-spotlight-slow" />
        <Spotlight className="bottom-20 left-1/2  opacity-70 animate-spotlight-slow" />
      </div>

      {/* Grid background */}
      <div className="h-[100vh] w-full dark:bg-black-100 dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute inset-0 h-[100vh] flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] 
          bg-gradient-to-b from-black/80 to-purple"
        />
      </div>

      {/* Content */}

      <div className="flex justify-center  relative z-10">
        <div className="w-full px-4 max-w-[89vw] h-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Building apps that look great and work even better."
            className="text-center text-[32px] sm:text-[36px] md:text-5xl lg:text-6xl"
          />

          <TextGenerateEffect
            words="Hey I'm Nomesh , a Full-Stack Developer."
            className="text-center md:tracking-wider mb-4 text-white text-sm sm:text-base md:text-lg lg:text-2xl"
          />
          <div className="flex gap-6 ">
            <a href="#testimonials">
              <MagicButton title="Explore More" position="right" />
            </a>
            <a href="/resume.pdf" download>
              <MagicButton title="Download Resume" position="right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
