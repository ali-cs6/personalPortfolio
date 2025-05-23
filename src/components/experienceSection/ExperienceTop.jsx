import React from "react";

function ExperienceTop() {
  return (
    <div className="mx-6 lg:flex">
      {/* first section */}
      <div className="flex flex-col items-center max-w-[450px] mx-auto">
        <p className="text-3xl font-special text-orange text-center uppercase font-bold">Since 2022</p>
        <div className="flex justify-center gap-5 mt-5 mb-5">
          <div className="flex flex-col items-center">
            <p className="text-6xl font-extrabold text-cyan">3</p>
            <p className="text-2xl text-lightBrown font-bold font-special -mt-5 uppercase ">Years</p>
          </div>
          <p className="font-bold text-6xl mt-2 text-lightBrown">-</p>
          <div className="flex flex-col items-center">
            <p  className="text-6xl font-extrabold text-cyan">23</p>
            <p className="text-2xl text-lightBrown font-bold font-special -mt-5 uppercase">Website</p>
          </div>
        </div>
        <p className="max-w-[300px] text-center text-white mt">With 3 years of experience using dynamic & User-friendly Web Applications.</p>
        <div className="flex flex-col items-center mt-10">
          <p  className="text-6xl font-extrabold text-cyan">$100k</p>
          <p className="text-2xl text-lightBrown font-bold font-special -mt-5 uppercase">Max Budget</p>
        </div>
      </div>
      {/* 2nd section */}
      <div className="flex justify-center mt-3 max-w-[450px] mx-auto">
        <img src="../../images/experience-image.png" alt="Pic not found!" className="w-full h-auto max-w-full" />
      </div>
      {/* 3rd section */}
      <div className="flex flex-col items-center mt-10 max-w-[520px] lg:max-w-[400px] w-auto mx-auto border border-lightBrown rounded-4xl p-5 text-[18px] lg:mb-10">
        <p className="text-lightBrown text-center">I Specialize in
          <span className="text-white font-bold"> modern Javascript and MERN stack</span>
          , leveraging best practices to create modern scalable and maintainable solutions.
          <br />
          I have a strong understanding of the
          <span className="text-white font-bold"> software development life cycle and agile methodologies</span>
          , allowing me to work effectively in fast-paced environments.
        </p>
      </div>
    </div>
  );
}

export default ExperienceTop;
