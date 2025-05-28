import React from 'react'

function AboutmeText() {
  return (
    <div className='flex flex-col gap-4 items-center md:items-start text-center md:text-left'>
      <h2 className='text-5xl md:text-6xl text-cyan'>About Me</h2>
      <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, eius! Sed unde rem sapiente voluptates, quam quae, magnam distinctio suscipit dolorum nobis voluptas vitae sunt. doloremque placeat et ratione impedit dolorum aut officia atque non similique nisi expedita nesciunt, optio architecto facilis tempora!</p>
      <button className='border border-orange py-2 px-4 rounded-full text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-center md:self-start text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default AboutmeText