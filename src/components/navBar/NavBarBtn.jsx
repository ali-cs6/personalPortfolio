import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

function NavBarBtn() {
  return (
    <button className='msm:px-4 px-3 msm:py-2 py-1.5 rounded-full msm:text-xl text-lg font-extrabold text-white border-cyan border flex gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 hover:shadow-cyanShadow transition-all duration-500'>
      Hire Me
      <span className='hidden msm:inline'>
      <LuArrowDownRight />
      </span>
    </button>
  )
}

export default NavBarBtn