import React from "react";
import Home from "./Home";
import Navbar from "../components/Navbar";
import About from "./About";
import Experience from "./Experience";
import Features from "./Features";
import Banner from "./Banner";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      <img className="absolute top-0" src="/Dust.png" alt="" />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Features/>
      <Banner />
      <Footer/>
    </div>
  );
};

export default Container;
