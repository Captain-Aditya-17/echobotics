import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import dust from "../assets/dust.png";
import About from './About';



const Container = () => {
  return (
    <div className='w-full bg-black text-white relative overflow-hidden'>
            <img className="absolute left-0 w-full" src={dust} alt="" />
        <Navbar />
        <Home/>
            <About/>
    </div>
  )
}

export default Container