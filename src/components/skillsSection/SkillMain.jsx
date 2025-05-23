import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

function SkillMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] min-h-[600px] px4 mx-auto relative overflow-hidden">
        <SkillText />
        <div className="absolute bottom-[50px] left-[50%] -translate-x-[50%] lg:block hidden">
          <AllSkills />
        </div>
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
}

export default SkillMain;
