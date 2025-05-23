import React from 'react';
import HeroText from './HeroText.jsx';
import HeroPic from './HeroPic.jsx';
import HeroGradient from './HeroGradient.jsx';

function HeroMain() {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-6'>
        <HeroText />
        <HeroPic />
        <HeroGradient />
      </div>
    </div>
  )
}

export default HeroMain