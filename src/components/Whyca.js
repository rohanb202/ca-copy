import React from "react";
import whyca from "../SVG/whyca.svg";
function Whyca() {
  return (
    <div className="top-[10%] relative sm:px-10">
      <div className="flex  sm:flex-row justify-center items-center sm:space-x-10">
        <img src={whyca} className="w-96 hidden sm:block" alt="" />
        <div className="flex flex-col space-y-5">
          <h1 className=" text-xl lg:text-2xl whitespace-nowrap xl:text-3xl font-semibold text-[#F74061]">
            What Is Campus Ambassador?
          </h1>
          <p className="sm:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          </p>
        </div>
      </div>
      <img src={whyca} className="w-96 sm:hidden" alt="" />
    </div>
  );
}

export default Whyca;
