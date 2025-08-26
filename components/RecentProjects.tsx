"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white">
        Few of my <span className="text-purple">Innovative Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Made with ❤️ by Nomesh Singh">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
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
                <div className="flex justify-center gap-4 items-center mt-2 sm:mt-0">
                  <Link href={item.git} target="_blank">
                    <div className="flex items-center gap-1">
                      <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                        Github
                      </p>
                      <FaLocationArrow color="#CBACF9" />
                    </div>
                  </Link>

                  <Link href={item.link} target="_blank">
                    <div className="flex items-center gap-1">
                      <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg">
                        Live
                      </p>
                      <FaLocationArrow color="#CBACF9" />
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
