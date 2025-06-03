import React from 'react'
import ExperienceHead from './ExperienceHead.jsx'
import ExperienceTop from './ExperienceTop.jsx'
import AllBottomExperiences from './AllBottomExperiences.jsx'

function ExperienceMain() {
  return (
    <div className='max-w-[1200px] mx-auto mt-[100px] mb-20' id='experience'>
      <ExperienceHead />
      <ExperienceTop />
      <div className='hidden lg:block h-[5px] w-full bg-lightBrown mt-6 mb-5'></div>
      <AllBottomExperiences />
    </div>
  )
}

export default ExperienceMain