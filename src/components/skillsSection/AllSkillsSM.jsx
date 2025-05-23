import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { IoGitMerge, IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import SingleSkill from "./SingleSkill";

const skills = [
  { name: "HTML", icon: IoLogoHtml5 },
  { name: "CSS", icon: IoLogoCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: IoLogoGithub },
];

function AllSkillsSM() {
  return <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {skills.map((item, index) => {
      return <div key={index} className="flex flex-col items-center">
        <item.icon className="text-7xl text-orange"/>
        <p className="text-center text-white mt-4 ">{item.name}</p>
      </div>
    })}
  </div>;
}

export default AllSkillsSM;
