"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";
import { Particles } from "@/src/components/magicui/particles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-x-hidden min-h-[100vh] flex items-center justify-center">
      {/* Spotlights */}

      {/* Grid background */}
      <div className="h-[100vh] w-full  dark:bg-black-100 dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute inset-0 h-[100vh] flex items-center justify-center dark:bg-black-100
         
          bg-gradient-to-b from-black/90 via-black/80 to-purple/40"
        />
      </div>

      {/* Content */}

      <div className="flex justify-center  relative z-10">
        <div className="w-full px-4 max-w-[89vw] h-full md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Building apps that look great and work even better."
            className="text-center text-[32px] sm:text-[36px] md:text-5xl "
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // start hidden + slightly down
            animate={{ opacity: 1, y: 0 }} // end visible + normal position
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-center mt-4 mb-4 text-gray-200 font-bold md:text-lg lg:text-xl"
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
