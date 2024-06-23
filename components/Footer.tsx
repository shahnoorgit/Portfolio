import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="contact" className="w-full mb-[100px] md:mb-[5px] pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:w-[65vw]">
          Made your <span className="text-purple">Decision?</span>
        </h1>
        <p className="text-lg font-semibold text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how can I contribute to
          your company&apos;s success.
        </p>
        <p className="text-md flex flex-col items-start font-semibold text-white-200 md:mt-10 my-5 text-center">
          <span className=" flex gap-1 items-center">
            <MdOutlineEmail />
            Email: Shahnoormujawar@gmail.com
          </span>{" "}
          <span className=" flex gap-1 items-center">
            <BiPhone />
            Phone: +917204408035
          </span>
        </p>
        <a href="mailto:shahnoormujawar@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          copyright &copy; 2024 Shahnoor&apos;s Portfolio
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 backdrop-filter rounded-lg border border-black-300"
              key={social.id}
            >
              <img src={social.img} alt={social.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
