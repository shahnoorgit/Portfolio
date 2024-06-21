import { workExperience } from "@/Data";
import React from "react";

const Experience = () => {
  return (
    <div className=" py-20" id="testimonials">
      <h1 className=" heading">
        {" "}
        My{""}
        <span className=" text-purple"> Work Experience</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 grid-col-1 gap-10 ">
        {workExperience.map((card) => (
          <button key={card.id}></button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
