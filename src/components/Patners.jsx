import React from 'react'

const Patners = () => {
  return (
    <div className='w-full px-10 absolute bottom-0 hidden md:block bg-opacity-80'>
      <h2 className='text-3xl font-bold text-center mb-1 font-[regular]'>Our <span className="orange font-[bold]">Trusted</span> Partners</h2>
      <div className='px-10 bg-[#792d0a56] border border-[#EC4E02] backdrop-blur-xl rounded-xl mt-1 bg-opacity-80 flex items-center justify-between'>
        <img src="/visa.svg.png" alt="" />
        <img src="/ness.svg.png" alt="" />
        <img src="/safety-wing.fill.png" alt="" />
        <img src="/upqork.svg.png" alt="" />
        <img src="/stitch.svg.png" alt="" />
        <img src="/xp.svg.png" alt="" />
        <img src="/vital.svg.png" alt="" />
      </div>
    </div>
  )
}

export default Patners