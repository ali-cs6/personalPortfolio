import React from "react";
import { motion } from "framer-motion";
import { fadesIn } from "../../framerMotion/variants.js";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full md:text-left text-center">
      <motion.h2
        variants={fadesIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-cyan"
      >
        Mern-Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadesIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.3rem] lg:text-6xl text-5xl font-bold font-special text-orange"
      >
        Barkat Ali
      </motion.h1>
      <motion.p
        variants={fadesIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Building sleek, high-performance web apps with modern
        <span className="hidden md:inline">
          <br />
        </span>
        tools and clean code
      </motion.p>
    </div>
  );
}

export default HeroText;
