import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c1022] text-white py-6">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6">

        <h3 className="text-[20px] font-semibold">
          Developed by <span className="text-[#87209e]">Anil Jaiswal</span>
        </h3>

        <p className="mt-2 text-[16px]">
          © 2025 <span className="text-[#87209e]">Anil Jaiswal</span>. All rights reserved.
        </p>

        <ul className="flex justify-center gap-5 mt-4">
          <li>
            <a href="#" target="_blank"
              className="text-white hover:text-[#87209e] transition-all duration-300 hover:-translate-y-[2px]">
              <AiOutlineGithub size={22} />
            </a>
          </li>

          <li>
            <a href="#" target="_blank"
              className="text-white hover:text-[#87209e] transition-all duration-300 hover:-translate-y-[2px]">
              <AiFillInstagram size={22} />
            </a>
          </li>

          <li>
            <a href="#" target="_blank"
              className="text-white hover:text-[#87209e] transition-all duration-300 hover:-translate-y-[2px]">
              <MdOutlineWhatsapp size={22} />
            </a>
          </li>

          <li>
            <a href="#" target="_blank"
              className="text-white hover:text-[#87209e] transition-all duration-300 hover:-translate-y-[2px]">
              <FaLinkedinIn size={22} />
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
