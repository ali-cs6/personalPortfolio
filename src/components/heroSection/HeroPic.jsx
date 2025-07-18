import React from "react";
import { PiHexagon } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadesIn } from "../../framerMotion/variants.js";

function HeroPic() {
  return (
    <motion.div
      variants={fadesIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img src="../../images/pfp.png" alt="" className="max-h-[500px] w-auto" />
      {/* <div className='absolute -z-10 flex justify-center items-center animate-pulse bg-cyan/30 rounded-full h-[500px] w-[500px]'>
      <PiHexagon className='md-h-[90%] sm-h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
      </div> */}
    </motion.div>
  );
}

export default HeroPic;
