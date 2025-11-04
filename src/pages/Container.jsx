import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar";
import About from "./About";
import Experience from "./Experience";
import Features from "./Features";
import Banner from "./Banner";

const Container = () => {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Features/>
      <Banner />
    </div>
  );
};

export default Container;
