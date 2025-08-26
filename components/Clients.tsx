"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="mt-16 sm:mt-20 md:mt-24 lg:mt-26 py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 text-center">
        I create magic
        <span className="text-purple"> with these tools</span>
      </h1>

      <div className="flex flex-col  items-center">
        <div className="w-full  max-w-[1400px] h-[25rem] sm:h-[28rem] md:h-[25rem]  rounded-md relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-xl">
            I build scalable apps and projects{" "}
            <span className="text-purple">
              with T3, MERN, and Python FastAPI frameworks.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Clients;
