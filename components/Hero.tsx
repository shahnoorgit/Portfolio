import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className=" -left-10 -top-40 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className=" left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className=" flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] flex md:max-w-2xl lg:max-w-[60vw] flex-col justify-center items-center">
          <h2 className=" uppercase tracking-widest text-xs text-center max-w-80 text-blue-100">
            The Sub Heading
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
