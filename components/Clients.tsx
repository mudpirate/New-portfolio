"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="mt-16 sm:mt-20  md:mt-24 lg:mt-26 py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
        I create magic
        <span className="text-purple"> with these tools</span>
      </h1>

      <div className="flex flex-col  mt-10  items-center">
        <div className="w-full  max-w-screen h-[15rem] sm:h-[20rem] rounded-md relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

        <div className=" mt-12 flex   py-3 flex-wrap items-center justify-center w-full max-w-5xl ">
          <h2 className="text-xl md:text-3xl font-medium text-white mx-auto max-w-4xl">
            I craft scalable apps with Next.js, React, TypeScript, Express,
            Tailwind CSS, and React Native. {""}
            <span className="text-purple ">
              blending problem-solving with clean UI/UX.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Clients;
