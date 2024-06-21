import { projects } from "@/Data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className=" py-20" id="projects">
      <h1 className=" heading">
        {" "}
        A small selection of {""}
        <span className=" text-purple"> recent projects</span>
      </h1>
      <div className=" flex flex-wrap gap-x-24 gap-y-1 mt-10 items-center justify-center">
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className=" lg:min-h-[32.5rem] -mb-20 sm:h-[42rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className=" relative flex justify-center items-center h-[30vh] sm:h-[40vh] sm:w-[570px] w-[80vw] overflow-hidden">
                <div className=" relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  className=" z-10 absolute bottom-0"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <h1 className=" mt-2 font-bold lg:text-xl md:text-md text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className=" flex items-center justify-between mt-7 mb-3">
                <div className=" flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      className=" border m-auto rounded-full flex justify-center items-center border-white/[0.2] lg:w-10 lg:h-10 w-8 h-8 bg-black"
                    >
                      <img src={icon} alt={icon} className=" p-2" />
                    </div>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className=" flex gap-1 justify-center items-center"
                >
                  <p className=" flex lg:text-md text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className=" ms-3" color="#CBACF9" />
                </Link>
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
