import React from "react";
import HoverText from "./HoverText";
import Joe from "../assets/Joe.jpg";

function Navbar() {
  return (
    <div className="text-white flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4">
          <img src={Joe} alt="Profile" className="absolute w-12 h-12 object-cover" />
        </div>
        <HoverText>
          <a href="#Projects" className="text-xl ml-5 text-yellow-300">Projects</a>
        </HoverText>
        <HoverText>
          <a href="#skills" className="text-xl ml-5 text-blue-300">Skills</a>
        </HoverText>
        <HoverText>
          <a href="#AboutMe" className="text-xl ml-5 text-green-300">About Me</a>
        </HoverText>
        <HoverText>
          <a href="#ContactMe" className="text-xl ml-5 text-purple-300">Contact Me</a>
        </HoverText>
      </div>
    </div>
  );
}

export default Navbar;
