"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Particles } from "@/src/components/magicui/particles";
import TrueFocus from "./TrueFocus";

const Clients = () => {
  return (
    <section id="testimonials" className="py-4 mt-10 px-4   ">
      <TrueFocus
        sentence="I create magic with these tools"
        manualMode={false}
        blurAmount={3}
        borderColor="purple"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />

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
