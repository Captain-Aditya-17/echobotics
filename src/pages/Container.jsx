import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar";
import About from "./About";
import Experience from "./Experience";

const Container = () => {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  );
};

export default Container;
