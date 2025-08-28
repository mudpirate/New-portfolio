"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div
      className="py-10 flex flex-col justify-center items-center"
      id="projects"
    >
      <h1 className="heading text-white mb-20 ">
        Few of my <span className="text-purple">Innovative Projects</span>
      </h1>

      <div className="flex flex-wrap  md:mt-10 justify-center gap-10 px-4 py-13">
        {projects.map((item) => (
          <div
            key={item.id}
            className="w-[80vw] sm:w-96 flex flex-col justify-between rounded-xl lg:min-h-[32rem] min-h-[28rem]"
          >
            <PinContainer
              title="Made with ❤️ by Nomesh Singh"
              className="h-full flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 lg:h-60 overflow-hidden rounded-t-xl">
                <Image
                  src={item.img}
                  alt="cover"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 px-4 mt-4">
                {item.title}
              </h1>

              {/* Description */}
              <p className="lg:text-lg text-sm font-light line-clamp-4 px-4 mt-2 text-[#BEC1DD]">
                {item.des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 mt-auto mb-3 pt-6">
                {/* Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center -ml-2"
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 items-center">
                  <Link href={item.git} target="_blank">
                    <div className="flex items-center gap-1">
                      <p className="text-white text-sm lg:text-base">Github</p>
                      <FaLocationArrow color="#CBACF9" />
                    </div>
                  </Link>

                  <Link href={item.link} target="_blank">
                    <div className="flex items-center gap-1">
                      <p className="text-white text-sm lg:text-base">Live</p>
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
