import React, { useState } from "react";
import ECHO from "../assets/ECHOBotics.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["use cases", "how it works", "contact us"];

  return (
    <nav className="fixed z-[99] h-[9vh] top-3 left-1/2 -translate-x-1/2 w-[85%] md:w-[50%] bg-[#0d0d0d93] border border-gray-500 rounded-3xl backdrop-blur-md flex items-center justify-between px-6 py-3 md:py-0">
      <div className="flex items-center justify-center">
        <img
          src={ECHO}
          alt="ECHOBotics"
          className="w-24 h-auto object-contain"
        />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item, index) => (
          <h1
            key={index}
            className="text-[#ABABAB] font-light text-md cursor-pointer hover:text-white transition-colors"
          >
            {item}
          </h1>
        ))}
      </div>

      <div className="hidden md:block bg-[#ec4c0291] border border-[#EC4E02] px-4 py-2 w-[8vw] text-center rounded-xl cursor-pointer hover:bg-[#ec4e02] hover:text-white transition">
        sign in
      </div>

      <button
        className="block md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
      </button>

      <div
        className={`absolute top-[100%] left-0 w-full bg-[#0d0d0ddc] backdrop-blur-lg border-t border-gray-700 rounded-b-3xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 py-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-[#ABABAB] font-light">
          {menuItems.map((item, index) => (
            <h1
              key={index}
              className="cursor-pointer hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </h1>
          ))}
          <div className="bg-[#ec4c0291] border border-[#EC4E02] px-8 py-2 rounded-xl cursor-pointer hover:bg-[#ec4e02] hover:text-white transition">
            sign in
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
