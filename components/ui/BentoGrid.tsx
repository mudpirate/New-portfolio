"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// Lottie should be dynamically imported for SSR
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("hsu@jsmastery.pro");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between space-y-3 bg-black/40 ",
        className
      )}
    >
      <div
        className={`${id === 6 ? "flex justify-center " : ""} h-full relative`}
      >
        {/* Main Image */}
        {img && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img
              src={img}
              alt={img}
              className={cn(
                "object-cover object-center w-full h-full", // remove rounded here
                imgClassName
              )}
            />
          </div>
        )}

        {/* Spare Image */}
        {spareImg && (
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 ? "w-full opacity-80" : ""
            }`}
          >
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* Background Animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center font-bold pointer-events-none text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "relative flex flex-col min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] px-4 sm:px-6 md:px-8 lg:px-10 py-4"
          )}
        >
          {/* Description */}
          {description && (
            <div className="text-[#C1C2D3] font-sans font-extralight text-sm sm:text-base md:text-lg lg:text-xl mb-2">
              {description}
            </div>
          )}

          {/* Title */}
          {title && (
            <div className="text-gray-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-full">
              {title}
            </div>
          )}

          {/* Grid Globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack */}
          {id === 3 && (
            <div className="flex gap-2 sm:gap-4 md:gap-6 absolute right-0 top-0 flex-col sm:flex-row">
              <div className="flex flex-col gap-2">
                {leftLists.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-[#10132E] text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {rightLists.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-[#10132E] text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copy Email */}
          {id === 6 && (
            <div className="mt-4 sm:mt-6 relative">
              <div className="absolute -bottom-5 right-0 w-full flex justify-center sm:justify-end">
                <Lottie options={defaultOptions} height={150} width={300} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] rounded-md h-10 sm:h-12"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
