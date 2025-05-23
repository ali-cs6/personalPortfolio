import React from 'react';
import Marquee from "react-fast-marquee";

function SubHeroSection() {
  const stripContent = [
    "Detail-Oriented",
    "Curious",
    "Creative",
    "Persistent",
    "Self-Driven",
    "Detail-Oriented", // duplicate content
    "Curious",
    "Creative",
    "Persistent",
    "Self-Driven"];

  return (
    <div className="w-full border-y border-grey bg-brown p-6  text-grey uppercase text-4xl md:text-2xl whitespace-nowrap">
      <Marquee speed={50} gradient={false}>
        {stripContent.map((text, idx) => (
          <span
            key={idx}
            className="mx-8"
          >
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default SubHeroSection;
