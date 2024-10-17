import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaTenge } from "react-icons/fa";
import { FaDochub } from "react-icons/fa";
import { FaDyalog } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex justify-start ml-2">
      <FaTenge className="w-5 h-5 ml-2 text-gray-400" />
      <FaCircle className="w-5 h-5 ml-2 text-gray-400" />
      <FaDyalog className="w-5 h-5 ml-2 text-gray-400" />
      <FaCircle className="w-5 h-5 ml-2 text-gray-400" />
    </div>
  );
}

export default Logo;
