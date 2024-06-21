import React from "react";
import { InfiniteMovingCards } from "./ui/Infinitemovingcards";
import { testimonials } from "@/Data";

const Clients = () => {
  return (
    <div className=" py-20" id="testimonials">
      <h1 className=" heading">
        {" "}
        Kind words from{""}
        <span className=" text-purple"> satisfied clients</span>
      </h1>
      <div className=" flex flex-col  items-center max-lg:mt-10 mt-5 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
