"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerator";
import MagicBTN from "./ui/MagicBTN";
import { FaLocationArrow, FaMailchimp } from "react-icons/fa";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { GrResume } from "react-icons/gr";
import { FcDocument } from "react-icons/fc";
import { socialMedia } from "@/Data";

const Hero = () => {
  const [copy, setcopy] = useState(false);
  const handleCopy = () => {
    const text = "shahnoormujawar@gmail.com";
    navigator.clipboard.writeText(text);
    setcopy(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/latest.pdf";
    link.download = "latest.pdf";
    link.click();
  };

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
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Building the Future, One Line of Code at a Time"
          />
          <p className=" font-semibold text-gray-300 text-sm md:text-xl lg:text-2xl mb-4 text-center md:tracking-wider">
            Hi, I&apos;m Shahnoor Mujawar, a Full-Stack Developer based in
            Bangalore.
          </p>
          <div className="flex w-full items-start mt-10 mb-10 justify-between md:gap-3 gap-6">
            {socialMedia.map((social) => (
              <Link
                href={social.link}
                className="w-full h-10 cursor-pointer flex flex-row justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 backdrop-filter rounded-lg border border-black-300"
                key={social.id}
              >
                <div className=" flex justify-center items-center gap-5">
                  <img
                    src={social.img}
                    alt={social.img}
                    width={20}
                    height={20}
                  />
                  <span className=" max-sm:hidden">
                    My{" "}
                    <span className=" text-purple">
                      {social.id === 1 ? "Github" : "LinkedIn"}
                    </span>{" "}
                    Account
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="max-sm:flex-col flex gap-5 max-lg:flex-wrap justify-between">
            <Link href="#projects">
              <MagicBTN
                title="Show My Experience"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <Link href="#projects">
              <MagicBTN
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <div onClick={() => handleCopy()}>
              <MagicBTN
                title={copy ? " Mail copied !" : "copy mail"}
                icon={<CgMail />}
                position="right"
              />
            </div>

            <div onClick={() => handleDownload()}>
              <MagicBTN
                title="Download Resume"
                icon={<FcDocument />}
                position="right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
