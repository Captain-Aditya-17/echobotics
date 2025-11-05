import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-10">
      <div className="w-full p-5 rounded-xl  bg-black border-[#EC4E02] border flex items-center justify-center flex-col md:justify-between relative overflow-hidden">
         <img className='rotate-80 -top-15 hidden left-[25%] scale-[1.5] object-cover md:block absolute z-8' src="/image24.png" alt="" />
         <img className='w-full h-full object-cover top-0 md:block absolute z-9 opacity-[.1]' src="/blur.png" alt="" />
        <div className="flex z-10 py-5 w-full flex-col md:flex-row md:items-start md:justify-between">
            <div className="w-full flex items-start justify-center flex-col  md:items-start">
          <img className="w-1/2 md:w-[30%]" src="/ECHOBotics.png" alt="" />
          <p className="font-[light] text-[3vw] text-center text-[#C7C7C7] mt-4 md:text-[1.1vw] md:text-left">
            Echobotics is redefining human–AI interaction with real-time voice, <br />
            chat, and lip-sync technology.
          </p>
          <h1 className="my-4 capitalize font-[medium]">follow us on</h1>
          <div className="w-full flex justify-center gap-5 md:justify-start">
            <img className="w-12 cursor-pointer" src="/facebook.png" alt="" />
            <img className="w-12 cursor-pointer" src="/x.png" alt="" />
            <img className="w-12 cursor-pointer" src="/insta.png" alt="" />
            <img className="w-12 cursor-pointer" src="/yt.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-5 justify-center p-2 gap-10 md:flex-row md:items-start md:justify-between md:mt-0">
            <div className="flex flex-col gap-5 items-center md:justify-start">
                <h1 className="text-[5vw] font-[medium]  md:text-[1.5vw]">Links</h1>
                <h1 className="text-[3vw] font-[medium] text-[#C7C7C7]  md:text-[1vw]">Home</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">use cases</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">features</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">contact</h1>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-[5vw] font-[medium] md:text-[1.5vw] capitalize">support</h1>
                <h1 className="text-[3vw] font-[medium] text-[#C7C7C7]  md:text-[1vw]">Contact</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">privacy policy</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">terms & conditions</h1>
            </div>
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-[5vw] font-[medium] md:text-[1.5vw] capitalize">use cases</h1>
                <h1 className="text-[3vw] font-[medium] text-[#C7C7C7]  md:text-[1vw]">Electronics</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">e-commerce</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">voice assistant</h1>
                <h1 className="text-[3vw] capitalize font-[medium] md:text-[.8vw] text-[#C7C7C7]">virtual calls</h1>
            </div>
        </div>
        </div>
        <div className="w-full z-10 flex flex-col gap-4 items-center py-5 border-t border-[#EC4E02] justify-center md:flex-row md:justify-between">
            <h1 className="text-[2.5vw] text-[#C7C7C7] md:text-[.8vw]" >Copyright © 2025 EchoBotics. All rights reserved.</h1>
            <h1 className="text-[2.5vw] text-[#C7C7C7] md:text-[.8vw]" >Terms & Conditions | Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
