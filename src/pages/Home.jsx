import React from "react";

const Home = () => {
  const text = " SCROLL • SCROLL • SCROLL • SCROLL • ";
  return (
    <div className="w-full h-[110vh] flex overflow-hidden flex-col md:flex-row items-center justify-center relative">
      <img className="absolute left-0 w-full" src='/ellipse18.png' alt="" />
      <div className="w-full h-[60%] md:h-full py-2 px-10 flex flex-col items-start justify-end md:justify-center">
        <div>
          <h4 className="uppercase orange font-[light] opacity-[.5] text-[3vw] md:text-[1.1vw] mb-2">
            best agentic ai
          </h4>
          <div className="flex gap-5 mb-2">
          <h1 className="text-[8vw] md:text-[4vw] md:leading-[4.5vw] leading-[8vw] font-[bold]">
            MAKING
          </h1>
          <img className="w-[50%]" src="/shape.png" alt="" />
          </div>
          <h1 className="text-[8vw] md:text-[4vw] md:leading-[5vw] leading-[8vw] font-[bold]">
           <span className="font-[continue]">CONVERSATION</span> WITH <br /> <span className="">AI</span>{" "}
            <span className="orange ">FEEL</span> Real
            <span className="orange">.</span>{" "}
          </h1>
          <p className="font-[light] text-[3vw] md:text-[1.1vw]">
            <span className="orange">Echobotics</span> is redefining{" "}
            <span className="orange">human–AI </span>interaction with real-time
            voice, chat, and lip-sync technology. Our AI doesn’t just respond.
            It listens, talks, and connects like a{" "}
            <span className="orange">real</span> assistant.
          </p>
          <button className="mt-5 bg-[#ec4c023b] flex justify-between cursor-pointer border-2 border-[#EC4E02] rounded-xl text-[3vw] md:text-[1vw] font-light items-stretch pl-5 py-2 pr-1 w-[40vw] md:w-[13vw]">
            <h1 className="my-2 md:my-1 md:text-xl">Explore</h1>
            <span className="orange-bg w-[9vw] md:w-[3vw] rounded flex items-center justify-center">
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </button>
        </div>
        <div className="w-[8vw] mt-5 h-[8vw] rounded-full md:flex hidden items-center justify-center relative">
          
          <div className="absolute w-full h-full animate-spin-slow ">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-current text-white"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0
              "
                />
              </defs>
              <text fontSize="10" letterSpacing="3">
                <textPath href="#circlePath">{text.repeat(2)}</textPath>
              </text>
            </svg>
          </div>
          <i className="text-2xl ri-arrow-down-wide-line"></i>
        </div>
      </div>
      <div className="w-full h-[40%] flex items-center md:justify-end justify-center relative">
        <img className="w-[80%] hidden object-cover md:block" src="/image24.png" alt="" />

        <div className="w-[10vw] h-[10vw] rounded-full orange-bg md:flex hidden items-center justify-center absolute right-40 bottom-40">
          <div className="absolute w-full h-full animate-spin-slow ">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-current text-white"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0
              "
                />
              </defs>
              <text fontSize="8" letterSpacing="3">
                <textPath href="#circlePath">{text.repeat(2)}</textPath>
              </text>
            </svg>
          </div>
          <i className="text-3xl ri-arrow-right-up-line"></i>
        </div>
        <div className="w-[30vw] h-[30vw] rounded-full md:hidden flex items-center justify-center relative">
          <div className="absolute w-full h-full animate-spin-slow ">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-current text-white"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0
              "
                />
              </defs>
              <text fontSize="10" letterSpacing="3">
                <textPath href="#circlePath">{text.repeat(2)}</textPath>
              </text>
            </svg>
          </div>
          <i className="text-2xl ri-arrow-down-wide-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
