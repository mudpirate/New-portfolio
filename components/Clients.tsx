"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="mt-20 md:mt-2 md:py-14 ">
      <h1 className="heading text-white mb-10">
        I create magic
        <span className="text-purple "> with these tools</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="rounded-md flex  antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-8">
          <h1 className="heading2 text-white">
            I build scalable apps and projects{" "}
            <span className="text-purple">
              with T3, MERN, and Python FastAPI frameworks.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Clients;
