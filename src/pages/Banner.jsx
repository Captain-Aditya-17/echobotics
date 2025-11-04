import React from 'react'

const Banner = () => {
  return (
    <div className='w-full p-15' >
        <div className='h-[100vw] md:h-[40vh] w-full rounded-xl flex justify-center items-center overflow-hidden relative flex-col'>
            <img className='w-full h-full  scale-[2] object-cover blur-[10px] absolute z-9' src="/banner.png" alt="" />
           <div className='z-10 bg-[#ec4c026c] md:px-80 flex flex-col w-full h-full justify-center items-center relative'>
            <img className='absolute z-11 top-3 left-3' src="/plus.png" alt="" />
            <img className='absolute z-11 bottom-3 left-3' src="/plus.png" alt="" />
            <img className='absolute z-11 bottom-3 right-3' src="/plus.png" alt="" />
            <img className='absolute z-11 top-3 right-3' src="/plus.png" alt="" />
             <h1 className='text-center font-[medium] text-[5vw] md:text-[3vw]'>See real AI conversations in action. book your demo today.</h1>
            <button className='mt-3 bg-white text-black px-12 py-2 rounded-lg font-[medium] text-[3vw] md:text-[1vw] '>Book a Demo</button>
           </div>
        </div>
    </div>
  )
}

export default Banner