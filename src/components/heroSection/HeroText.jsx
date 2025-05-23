import React from 'react'

function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full md:text-left text-center'>
      <h2 className='lg:text-2xl text-xl uppercase text-cyan'>
        Mern-Stack Developer
      </h2>
      <h1 className='md:text-[2.3rem] lg:text-6xl text-5xl font-bold font-special text-orange'>
        Barkat Ali
      </h1>
      <p className='text-lg mt-4 text-white'>
        Building sleek, high-performance web apps with modern
        <span className='hidden md:inline'>
          <br />
        </span>
         tools and clean code
      </p>
    </div>
  )
}

export default HeroText