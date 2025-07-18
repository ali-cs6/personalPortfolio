import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadesIn } from "../../framerMotion/variants.js";

function AllSkills() {
  const skills = [
    { name: "HTML", icon: <IoLogoHtml5 /> },
    { name: "CSS", icon: <IoLogoCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <IoLogoGithub /> },
  ];

  return (
    <div className="flex justify-center items-center gap-2 relative max-w-[1200px] mx-auto">
      {skills.map((skill, index) => {
        return (
          <motion.div
            variants={fadesIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkill key={index} text={skill.name} icon={skill.icon} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default AllSkills;
