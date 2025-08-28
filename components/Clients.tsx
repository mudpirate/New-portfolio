"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Particles } from "@/src/components/magicui/particles";

const Clients = () => {
  return (
    <section id="testimonials" className="py-4 px-4 md:mt-4 md:py-20 ">
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
      </div>
    </section>
  );
};

export default Clients;
