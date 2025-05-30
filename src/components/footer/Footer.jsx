import React from 'react';
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full flex items-center justify-end md:justify-between gap-5 text-lightGrey p-5 font-body border-t-2 border-lightgrey mt-15 mb-3'>
      <div className='hidden md:block text-6xl font-logo'>Brkat Ali</div>
      <div>
        <div className='flex flex-col'>
          <ul className='flex gap-3'>
            <li className='text-lg msm:text-xl'>About Me</li>
            <li className='text-lg msm:text-xl'>Skills</li>
            <li className='text-lg msm:text-xl'>Experince</li>
            <li className='text-lg msm:text-xl'>Projects</li>
            <li className='text-lg hidden msm:block'>Contact</li>
          </ul>
          <div className='flex gap-3 items-center justify-end mt-3'>
          <MdCopyright />
          <p className='text-lg msm:text-xl'>2025 Ali | All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer