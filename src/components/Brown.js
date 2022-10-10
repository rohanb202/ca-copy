import React from "react";
import frame from "../SVG/Frame.svg";
function Brown() {
  return (
    <div className="top-[20%] relative px-10 flex flex-col justify-center items-center">
      <div className="sm:pl-5">
        <h1 className="text-3xl font-semibold text-[#F74061] ">
          Brownie Points
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row overflow-x-hidden xl:-space-x-10  ">
        <img className="w-[15rem]" src={frame} alt="" />
        <img className="w-[15rem]" src={frame} alt="" />
        <img className="w-[15rem]" src={frame} alt="" />
        <img className="w-[15rem]" src={frame} alt="" />
        <img className="w-[15rem]" src={frame} alt="" />
      </div>
    </div>
  );
}

export default Brown;
