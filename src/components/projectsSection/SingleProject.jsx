import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";

function SingleProject({project}) {
  const { name, year, align, image, link } = project;
  return (
    <div className={`flex flex-col md:flex-row items-center ${align === "left" ? "md:row" : "md:flex-row-reverse"}`}>
      <div className='relative max-w-[450px] h-auto m-10 md:hover:scale-110 transition-all duration-500'>
        <img src={image} alt="Not Found!" className='rounded-2xl'/>
        <div className='absolute hidden md:block inset-0 bg-cyan/30 rounded-2xl hover:bg-cyan/0 transition-all duration-500'></div>
      </div>
      <div className='text-center md:text-left'>
        <p className='text-orange text-2xl'>{name}</p>
        <p className='text-lightGrey text-xl font-thin font-special'>{year}</p>
        <a href={link} className='text-cyan text-xl flex gap-2 items-center justify-center md:justify-start hover:text-orange transition-all duration-500 cursor-pointer'>
          veiw <FaLocationArrow className='text-[17px]'/>
        </a>
      </div>
    </div>
  )
}

export default SingleProject