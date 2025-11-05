import React from 'react'

const Experience = () => {
  return (
    <div className='w-full h-screen relative flex flex-col px-5 items-center justify-center  text-white '>
      <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[.8]' src="/ellipse19.png" alt="" />
       <h4 className="uppercase orange font-[light] opacity-[.5] text-[3vw] md:text-[1.1vw] mb-2">
            avatar experience
          </h4>
          <p className="font-[light] text-[3.5vw] text-center md:w-[50%] text-[#616161] md:text-[1.6vw]">
            <span className='text-white'>
               At <span className='orange'>Echobotics</span>, we’re redefining human AI interaction. Our mission is to
            </span> make conversations with AI feel as natural as talking to a real person. We build intelligent, real-time voice and chat systems that can listen, understand, and respond instantly with perfect lip-sync, gestures, and emotions.
          </p>
    </div>
  )
}

export default Experience