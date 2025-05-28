import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

function Contactright() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 lg:-mt-8 mr-4">
      {/* image */}
      <div className="mt-10 max-w-[300px] mx-auto">
        <img src="../../images/email-image.png" alt="" />
      </div>
      {/* contact */}
      <div className="text-white text-[25px] mt-10 flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <MdOutlineEmail />
          <span>alicode6.cs@gmail.com</span>
        </div>
        <div className="flex items-center gap-6">
          <IoLogoWhatsapp />
          <span>+92 3434754420</span>
        </div>
        <div className="flex items-center gap-6">
          <CiLocationOn />
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
      {/* social medias */}
      <div className="flex gap-5 mt-5 text-4xl text-orange">
        <a href="#" >
          <CiLinkedin className="hover:text-cyan transition-all duration-500"/>
        </a>
        <a href="#">
          <CiFacebook className="hover:text-cyan transition-all duration-500"/>
        </a>
        <a href="#">
          <FaXTwitter className="hover:text-cyan transition-all duration-500"/>
        </a>
      </div>
    </div>
  );
}

export default Contactright;
