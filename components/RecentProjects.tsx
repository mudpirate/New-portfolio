"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white">
        Few of my Innovative
        <span className="text-purple"> Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[40vh] lg:h-[50vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 lg:h-[50vh] absolute bottom-0 object-fill"
                />
              </div>

              <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-md text-white lg:font-normal font-light text-sm "
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center gap-4 items-center">
                  <Link href={item.git}>
                    <div className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-white">
                        Github
                      </p>
                      <div>
                        <FaLocationArrow className="ms-1" color="#CBACF9" />
                      </div>
                    </div>
                  </Link>

                  <Link href={item.link}>
                    <div className="flex items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-white">
                        Live
                      </p>
                      <div>
                        <FaLocationArrow className="ms-1" color="#CBACF9" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
