import React from "react";
import { Link } from "react-router-dom";
import kashilogo from "../SVG/kashiyatra.svg";

function Sidebar() {
  return (
    <div className="bg-[#098770] fixed top-0 w-[15%] h-screen hidden lg:block">
      <div className="flex flex-col p-5">
        <img src={kashilogo} alt="" />
      </div>
      <div className="flex flex-col justify-center p-10 mt-10 space-y-5 font-semibold text-white align-center">
        <div>Dashboard</div>
        <div><Link to={'/profile'}>Profile</Link></div>
        <div>Event Regstration</div>
        <div>Ambassador</div>
      </div>
      <div className="absolute bottom-0 p-10 font-semibold text-white ">
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
