"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";
import { Particles } from "@/src/components/magicui/particles";
import { motion } from "framer-motion";
import LiquidEther from "../components/LiquidEther";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-x-hidden min-h-[100vh] flex items-center justify-center ">
      {/* Spotlights */}

      {/* Grid background */}
      <div className="h-[100vh] w-full bg-black dark:bg-black absolute top-0 left-0 flex items-center justify-center pointer-events-none !bg-none">
        <div
          className="absolute inset-0 h-[100vh] flex items-center justify-center 
      "
        />
      </div>
      <div
        style={{ width: "100%", height: "100%" }}
        className="absolute inset-0 hidden lg:block"
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={80}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content */}

      <div className="flex justify-center  relative z-10">
        <div className="w-full px-4 max-w-[89vw] h-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Building apps that look great and work even better."
            className="text-center text-[32px] sm:text-[36px] md:text-6xl "
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // start hidden + slightly down
            animate={{ opacity: 1, y: 0 }} // end visible + normal position
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-center mt-4 mb-4 text-gray-200 font-bold md:text-lg lg:text-2xl"
          >
            Hey, I build web applications using Next.js, React.js, Express.js
            and more.
          </motion.h1>

          <div className="flex gap-6 mt-8 ">
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
