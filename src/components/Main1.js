import React from "react";
import back from "../SVG/back.svg";
import Whatca from "./Whatca";

function Main1() {
  return (
    <div className="w-[100%]">
      <div className="flex flex-col items-center p-5 sm:items-start">
        <div className="text-3xl font-bold text-[#F74061]">Hello!</div>
        <div>5 Februry</div>
      </div>

      <div className="flex w-full justify-center relative sm:h-[20rem] ">
        <img
          className="absolute mx-auto inset-x-0 z-[-1] scale-125 sm:scale-100 sm:w-[70rem] sm:h-[30rem] "
          src={back}
          alt=""
        />
        <div className="flex flex-col py-5 justify-center items-center relative sm:top-[4rem]">
          <h1 className="text-2xl text-white sm:text-3xl xl:text-5xl whitespace-nowrap">
            Become A Campus Ambassador
          </h1>
          <button className="text-[#F74061] p-1 sm:p-3 sm:text-xl text-lg   md:text-3xl w-40 sm:w-64 font-semibold bg-white rounded-lg mt-5 sm:mt-10">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main1;
