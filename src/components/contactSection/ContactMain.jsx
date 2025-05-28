import React from 'react'
import Contactleft from './Contactleft'
import Contactright from './Contactright'

function ContactMain() {
  return (
    <div className='max-w-[1300px] mx-auto'>
        <h2 className='text-5xl text-cyan mt-15 text-center mb-10 md:text-6xl'>Contact Me</h2>
        <div className='bg-brown p-6 m-4 rounded-xl lg:flex lg:justify-between lg:gap-5'>
        <Contactleft />
        <Contactright />
        </div>
    </div>
  )
}

export default ContactMain