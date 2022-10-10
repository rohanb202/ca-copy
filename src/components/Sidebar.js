import React from "react";
import kashilogo from "../SVG/kashiyatra.svg";
function Sidebar() {
  return (
    <div className="bg-[#098770] fixed w-[15%] h-screen hidden lg:block">
      <div className="flex flex-col p-5">
        <img src={kashilogo} alt="" />
      </div>
      <div className="flex  justify-center align-center flex-col mt-10 p-10 text-white font-semibold space-y-5">
        <div>Dashboard</div>
        <div>Profile</div>
        <div>Event Regstration</div>
        <div>Ambassador</div>
      </div>
      <div className="p-10 absolute bottom-0 text-white font-semibold ">
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
