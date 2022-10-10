import React from "react";
import respo from "../SVG/respo.svg";

function Respo() {
  return (
    <div className="top-[15%] relative sm:px-10">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex flex-col sm:space-y-5 space-y-2">
          <h1 className=" text-xl lg:text-2xl xl:text-3xl font-semibold text-[#F74061] whitespace-nowrap">
            Responsibilities as Campus Ambassador
          </h1>
          <p className="sm:text-base text-sm ">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Eu
            Turpis Molestie, Dictum Est A, Mattis Tellus. Sed Dignissim, Metus
            Nec Fringilla Accumsan, Risus Sem Sollicitudin Lacus, Ut Interdum
            Tellus Elit Sed Risus. Maecenas Eget Condimentum Velit, Sit Amet
            Feugiat Lectus. Class Aptent Taciti Sociosqu Ad Litora Torquent Per
            Conubia Nostra.
          </p>
        </div>
        <img src={respo} className="w-96" alt="" />
      </div>
    </div>
  );
}

export default Respo;
