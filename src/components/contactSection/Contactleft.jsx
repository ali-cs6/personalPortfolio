import React from 'react'

function Contactleft() {
  return (
    <div className='lg:w-2/3'>
      <p className='text-4xl text-orange mb-3'>Get in touch</p>
      <p className='text-white text-[16px] md:text-[20px] mb-10'>Feel free to reach out if you'd like to collabrate
        <br />
        You are just a flew clicks away!
      </p>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Your Name' className='h-12 bg-lightBrown px-2 rounded-lg'/>
        <input type="email" placeholder='Your Email' className='h-12 bg-lightBrown px-2 rounded-lg'/>
        <textarea type="text" rows={9} cols={50} placeholder='Write your message here...' className='bg-lightBrown rounded-lg px-2'></textarea>
        <button type='submit' className='bg-cyan p-[10px] text-white rounded-lg'>Send</button>
      </form>
    </div>
  )
}

export default Contactleft