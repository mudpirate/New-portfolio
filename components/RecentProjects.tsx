"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Link from "next/link";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { Particles } from "@/src/components/magicui/particles";
const RecentProjects = () => {
  return (
    <div
      className="py-10 relative flex flex-col justify-center gap-10 items-center"
      id="projects"
    >
      <h1 className="heading text-white mb-20 ">
        Few of my <span className="text-purple">Innovative Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border rounded-xl shadow-lg bg-[#0a0a0a] w-full h-[32rem] overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-48 lg:h-60 overflow-hidden">
              <Image
                src={item.img}
                alt="cover"
                width={500}
                height={300}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
              {/* Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p className="lg:text-lg text-sm font-light line-clamp-7  mt-2 text-[#BEC1DD]">
                {item.des}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto gap-5 pt-6">
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
                <div className="flex gap-1  mr-3 items-center">
                  <Link href={item.git} target="_blank">
                    <div className="flex items-center gap-1 hover:underline">
                      <p className="text-white text-sm lg:text-base">Github</p>
                      <FaLocationArrow color="#CBACF9" />
                    </div>
                  </Link>

                  <Link href={item.link} target="_blank">
                    <div className="flex items-center gap-1 hover:underline">
                      <p className="text-white text-sm lg:text-base ">Live</p>
                      <FaLocationArrow color="#CBACF9" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
