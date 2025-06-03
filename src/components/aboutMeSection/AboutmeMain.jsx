import React from 'react'
import AboutmeText from './AboutmeText'
import AboutmeImages from './AboutmeImages'

function AboutmeMain() {
  return (
    <div className="flex md:flex-row flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center" id="about">
      <div>
      <AboutmeText />
      </div>
      <div>
      <AboutmeImages />
      </div>
    </div>
  )
}

export default AboutmeMain