import React from "react";
import { motion } from "framer-motion";
import { fadesIn } from "../../framerMotion/variants.js";

function SkillText() {
  return (
    <motion.div
      variants={fadesIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-[100px]"
    >
      <h2 className="text-5xl md:text-6xl mt-10 text-cyan">My Skills</h2>
      <p className="text-center text-white text-lg m-3">
        I have experience in a variety of programming languages and frameworks,
        including HTML, CSS, JavaScript, React, Node.js, Express.js, and
        MongoDB. I am always eager to learn new technologies and improve my
        skills.
      </p>
    </motion.div>
  );
}

export default SkillText;
