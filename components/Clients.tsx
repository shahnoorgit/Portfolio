import React from "react";
import { InfiniteMovingCards } from "./ui/Infinitemovingcards";
import { testimonials } from "@/Data";

const Clients = () => {
  return (
    <div className=" mt-10 py-20" id="testimonials">
      <h1 className=" heading">
        {" "}
        Kind Words From{""}
        <span className=" text-purple"> Satisfied Clients</span>
      </h1>
      <div className=" flex flex-col items-center max-lg:mt-10 mt-10 ">
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
