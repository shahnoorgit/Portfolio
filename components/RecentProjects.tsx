import { projects } from "@/Data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className=" py-20">
      <h1 className=" heading">
        {" "}
        A small selection of {""}
        <span className=" text-purple"> recent projects</span>
      </h1>
      <div className=" flex flex-wrap p-4 gap-14 mt-10 items-center justify-center">
        {projects.map((project) => (
          <div className=" lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] mb-10">
            <PinContainer title={project.title} href={project.link}>
              <div className=" relative flex justify-center items-center h-full sm:w-96 w-[80vw] overflow-hidden">
                <div>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  className=" z-10 absolute bottom-0"
                  src={project.img}
                  alt={project.title}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
