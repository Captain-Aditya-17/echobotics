import React from 'react'

const Features = () => {

  const data = [
    {
      title: "real-time conversations",
      desc:"Conversations flow naturally with zero delays, making interactions with EchoBotics feel just like talking to a human.",
      img: "/f1.png",
    },
    {
      title: "voice chat",
      desc:"Engage in lifelike voice chats where AI listens, responds, and adapts, while also allowing seamless switch to text.",
      img: "/f2.png",
    },
    {
      title: "low latency",
      desc:"With a response time of under 330ms, EchoBotics delivers near-instant communication that feels effortless.",
      img: "/f3.png",
    },
    {
      title: "multi language ",
      desc:"Communicate effortlessly in multiple languages, breaking barriers and connecting with audiences worldwide.",
      img: "/f4.png",
    },
    {
      title: "scalable & secure",
      desc:"Built with scalability and top-tier security, EchoBotics can handle thousands of users while keeping data safe.",
      img: "/f5.png",
    },
  ]

  return (
    <div className='w-full py-10 relative overflow-hidden flex justify-center items-center flex-col gap-10'>
      <img className='absolute' src="/group97.png" alt="" />
       <div className='w-full flex flex-col items-start justify-end p-4 '>
          <h4 className="uppercase orange font-[light] opacity-[.5] text-[3vw] md:text-[1.1vw] mb-2">
            avatar experience
          </h4>
          <h1 className="text-[8vw] md:text-[4vw] md:leading-[5vw] leading-[8vw] font-[bold] text-center md:text-left uppercase">Experience the <span className='orange'>power</span> of Real AI <span className='orange'>Conversations</span>.
          </h1>
       </div>
          <div className='w-full p-4 flex flex-col items-center justify-center gap-10 md:flex-row'>
           {
            data.map((item,index)=>{
              return  <div key={index} className=' w-[80vw] h-[52vw] md:w-[20vw] md:h-[20vw] p-4 relative flex items-start justify-center flex-col gap-5'>
              <div className='absolute h-[10vw] w-[.2vw] md:h-[2vw] md:w-[.10vw] left-0 bg-[#ec4c029c]'>
              </div>
              <div className='w-[15vw] h-[15vw] md:w-[3vw]  md:h-[3vw] rounded-lg bg-[#ec4c0248] border border-[#EC4E02] flex items-center justify-center'>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h1 className='text-[5vw] md:text-[1.3vw] font-[medium] capitalize'>{item.title}</h1>
              <p className='text-[3vw] md:text-[1vw] text-[#616161] font-[light]'>{item.desc}</p>
              </div>
              
            </div>
            })
           }
          </div>
    </div>
  )
}

export default Features