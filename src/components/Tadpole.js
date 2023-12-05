import React from "react";
import ImageSequence from "./ImageSequence";

const Tadpole = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:h-[120vh] lg:justify-center lg:items-center lg:px-[17vh] bg-white ">
      <ImageSequence />
      <div className="px-[4vh] flex flex-col gap-6 lg:w-[40%] lg:flex-col-reverse">
        <div className="flex flex-row gap-2">
          <div
            className="bg-[#d9d7d7] rounded-[100%]
            h-[5vh] w-[5vh]"
          ></div>
          <div
            className="bg-[#1e1d1d] rounded-[100%]
            h-[5vh] w-[5vh]"
          ></div>
        </div>
        <div className="flex flex-col gap-[4vh] ">
          <h2
            className=" text-[24px] lg:text-[29px] font-light pr-[17vh]
        lg:pr-0 leading-[30px] md:w-[220px]"
          >
            Uniquely designed <span></span>for your laptop.
          </h2>
          <div className="text-[grey] text-[10px] lg:text-[14px] flex flex-col gap-[4vh]">
            <p>
              The Tadpole is the remarkably small, laptop dedicated, camera
              system designed by Opal.
            </p>
            <p className="pr-[1vh]">
              It comes with an adjustable clip that fits most laptop displays, a
              bead you can use to safely store your camera or wrap it around
              your wrist, and a premium woven cable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tadpole;
